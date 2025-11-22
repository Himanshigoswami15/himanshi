
import React, { useState, useEffect, useCallback } from 'react';
import { Dish, MenuCategory } from './types';
import { MENU_DATA } from './constants/menuData';

// This declaration augments the 'react' module to include the custom <model-viewer> element
// in JSX.IntrinsicElements. This allows TypeScript to recognize it without overwriting
// the standard HTML and SVG element types, fixing all related compilation errors.
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src: string;
        alt: string;
        ar?: boolean;
        'ar-modes'?: string;
        'camera-controls'?: boolean;
        'auto-rotate'?: boolean;
        'shadow-intensity'?: string;
        exposure?: string;
        style?: React.CSSProperties;
      };
    }
  }
}

// --- ICON COMPONENTS ---

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);


// --- UI COMPONENTS ---

const Header = () => (
    <header className="text-center py-8 px-4 bg-brand-bg sticky top-0 z-20 shadow-lg shadow-gold/10">
        <h1 className="text-4xl md:text-6xl font-serif text-gold text-shadow-gold tracking-wider">
            Crown Restaurant & Cafe
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base">Hungry? You’re in the right place.</p>
    </header>
);

interface ARModalProps {
    dish: Dish | null;
    onClose: () => void;
}

const ARModal = ({ dish, onClose }: ARModalProps) => {
    if (!dish || !dish.model) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-brand-bg rounded-2xl shadow-gold-glow-lg w-full max-w-lg p-6 border border-gold/30 relative" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gold hover:text-light-gold transition-colors"
                    aria-label="Close AR view"
                >
                    <CloseIcon />
                </button>
                <h2 className="text-3xl font-serif text-gold mb-2">{dish.name}</h2>
                <p className="text-gray-400 mb-4">{dish.description}</p>
                <div className="bg-black/50 rounded-lg p-2 aspect-square">
                    <model-viewer
                        src={dish.model}
                        alt={`3D model of ${dish.name}`}
                        ar
                        ar-modes="webxr scene-viewer quick-look"
                        camera-controls
                        auto-rotate
                        shadow-intensity="1"
                        exposure="1"
                        style={{ width: '100%', height: '100%' }}
                    ></model-viewer>
                </div>
                 <p className="text-center text-gray-400 mt-4 text-sm">On mobile, tap the AR icon to view this on your table.</p>
            </div>
        </div>
    );
};

interface MenuItemProps {
    dish: Dish;
    onSelect: (dish: Dish) => void;
}

const MenuItem = ({ dish, onSelect }: MenuItemProps) => {
    const hasAR = !!dish.model;
    const itemClasses = `p-4 border-b border-gold/10 transition-all duration-300 ${hasAR ? 'hover:bg-gold/5 cursor-pointer group' : ''}`;
    
    const handleClick = () => {
        if (hasAR) {
            onSelect(dish);
        }
    };

    return (
        <div
            className={itemClasses}
            onClick={handleClick}
            onTouchStart={() => {}}
        >
            <div className="flex justify-between items-baseline">
                <h4 className={`text-lg font-sans font-bold text-gray-200 ${hasAR ? 'group-hover:text-gold' : ''} transition-colors`}>{dish.name}</h4>
                <p className="text-lg font-bold text-gold whitespace-nowrap pl-4">{dish.price}</p>
            </div>
            <p className="text-sm text-gray-400 mt-1">{dish.description}</p>
        </div>
    );
};


interface MenuSectionProps {
  category: MenuCategory;
  onSelectDish: (dish: Dish) => void;
  isInitiallyOpen: boolean;
}

const MenuSection = ({ category, onSelectDish, isInitiallyOpen }: MenuSectionProps) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="mb-8 border border-gold/20 rounded-xl overflow-hidden shadow-lg shadow-black/30">
        <div 
          className="relative h-48 group cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Featured Image (Always rendered as background/fallback) */}
          <img 
              src={category.featuredImage} 
              alt={category.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
          />
          
          {/* Video Layer (Rendered on top if available and not errored) */}
          {category.video && !videoError && (
             <video
                src={category.video}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                onError={() => setVideoError(true)}
             />
          )}

          {/* Dark Overlay & Title */}
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4 transition-all duration-300 group-hover:bg-black/50">
            <h3 className="text-3xl font-serif text-white text-shadow-gold text-center">{category.title}</h3>
          </div>
          <div className="absolute bottom-4 right-4 text-gold/80 group-hover:text-gold transition-colors">
              <ChevronDownIcon isOpen={isOpen} />
          </div>
        </div>
        {isOpen && (
            <div className="bg-brand-bg/50 backdrop-blur-sm">
            {category.dishes.map((dish) => (
                <MenuItem key={dish.name} dish={dish} onSelect={onSelectDish} />
            ))}
            </div>
        )}
    </div>
  );
};


export default function App() {
    const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      // Simulate initial loading animation
      const timer = setTimeout(() => setIsLoaded(true), 100);
      return () => clearTimeout(timer);
    }, []);

    const handleSelectDish = useCallback((dish: Dish) => {
        if (dish.model) {
            setSelectedDish(dish);
        }
    }, []);

    const handleCloseModal = useCallback(() => {
        setSelectedDish(null);
    }, []);

    return (
        <div className={`bg-brand-bg min-h-screen font-sans transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Header />
            <main className="container mx-auto p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    {MENU_DATA.map((category, index) => (
                        <MenuSection 
                            key={category.title} 
                            category={category} 
                            onSelectDish={handleSelectDish}
                            isInitiallyOpen={false}
                        />
                    ))}
                </div>
            </main>
            <ARModal dish={selectedDish} onClose={handleCloseModal} />
             <footer className="text-center py-6 text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Crown Restaurant & Cafe. All rights reserved.</p>
                <p>Designed for a premium QR code menu experience.</p>
            </footer>
        </div>
    );
}
