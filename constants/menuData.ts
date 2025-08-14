
import { MenuCategory } from '../types';

// Using a few different models to make the menu more interesting.
const BOWL_MODEL = "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/SpecGlossVsMetalRough/glTF-Binary/SpecGlossVsMetalRough.glb";
const SHISHKEBAB_MODEL = "https://modelviewer.dev/shared-assets/models/shishkebab.glb";
const ESPRESSO_MODEL = "https://modelviewer.dev/shared-assets/models/Espresso.glb";
const COFFEE_CUP_MODEL = "https://modelviewer.dev/shared-assets/models/CoffeeCup.glb";
const BURGER_MODEL = "https://modelviewer.dev/shared-assets/models/hamburger.glb";
const PIZZA_MODEL = "https://modelviewer.dev/shared-assets/models/pizza.glb";


export const MENU_DATA: MenuCategory[] = [
  {
    title: "Tea",
    featuredImage: "https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      { name: "Masala chai", price: "₹39", image: "https://images.pexels.com/photos/9312999/pexels-photo-9312999.jpeg?auto=compress&cs=tinysrgb&w=400", description: "The quintessential Indian spiced tea. A robust blend of black tea, milk, and aromatic spices like cardamom and ginger." },
      { name: "Green Tea", price: "₹49", image: "https://images.pexels.com/photos/5946968/pexels-photo-5946968.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A light and healthy brew, rich in antioxidants, offering a delicate, earthy flavor." },
      { name: "Lemon Tea", price: "₹49", image: "https://images.pexels.com/photos/405238/pexels-photo-405238.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A zesty and invigorating infusion of black tea and fresh lemon, served hot." },
      { name: "Basil Tea", price: "₹59", image: "https://images.pexels.com/photos/10313083/pexels-photo-10313083.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A uniquely refreshing and aromatic herbal tea infused with fresh basil leaves." },
    ]
  },
  {
    title: "Hot Coffee",
    featuredImage: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      { name: "Espresso", price: "₹59", image: "https://images.pexels.com/photos/4109744/pexels-photo-4109744.jpeg?auto=compress&cs=tinysrgb&w=400", model: ESPRESSO_MODEL, description: "A concentrated coffee brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans." },
      { name: "Black coffee", price: "₹59", image: "https://images.pexels.com/photos/1578332/pexels-photo-1578332.jpeg?auto=compress&cs=tinysrgb&w=400", model: COFFEE_CUP_MODEL, description: "Pure black coffee shot with NO milk. Simple and invigorating." },
      { name: "Hot Chocolate", price: "₹79", image: "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=400", model: COFFEE_CUP_MODEL, description: "Rich and creamy chocolate drink, a comforting treat for any time of day." },
      { name: "Café Latte", price: "₹89", image: "https://images.pexels.com/photos/373463/pexels-photo-373463.jpeg?auto=compress&cs=tinysrgb&w=400", model: COFFEE_CUP_MODEL, description: "A coffee drink made with a shot of espresso and steamed milk, with a light layer of foam." },
      { name: "Mocha Chocolaty", price: "₹99", image: "https://images.pexels.com/photos/1470514/pexels-photo-1470514.jpeg?auto=compress&cs=tinysrgb&w=400", model: COFFEE_CUP_MODEL, description: "Espresso, creamy Chocolate, steamed milk and whipped cream." },
      { name: "Cappuccino", price: "₹99", image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400", model: COFFEE_CUP_MODEL, description: "Shot of coffee with steamed milk and silky creamy froth... pleasure guaranteed." },
      { name: "Café Mocha", price: "₹99", image: "https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=400", model: COFFEE_CUP_MODEL, description: "Double shot coffee with chocolate spread on the glass and topped with foamed milk." },
      { name: "Hazelnut Cappuccino", price: "₹109", image: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=400", model: COFFEE_CUP_MODEL, description: "A classic cappuccino infused with the rich, nutty flavor of hazelnut syrup." },
      { name: "Caramel Cappuccino", price: "₹109", image: "https://images.pexels.com/photos/1484674/pexels-photo-1484674.jpeg?auto=compress&cs=tinysrgb&w=400", model: COFFEE_CUP_MODEL, description: "Latte combined with caramel and creamy milk for a sweet, comforting beverage." }
    ]
  },
  {
    title: "Cold Coffee",
    featuredImage: "https://bigycloud.relationshop.net/RSData/recipe/20230228145804_fdjxz32mhk0_frozenchocmudslide400x400.jpg",
    dishes: [
      { name: "Café Frappe", price: "₹109", image: "https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Cold coffee blended with ice cream and topped with whipped cream." },
      { name: "Hazelnut Frappe", price: "₹119", image: "https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Frappe blended with Hazelnut for a sweet and nutty delight." },
      { name: "Frozen Moccachino", price: "₹119", image: "https://images.pexels.com/photos/3850790/pexels-photo-3850790.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Frozen coffee blended with chocolate ice cream." },
      { name: "Caramel Macchiato", price: "₹119", image: "https://images.pexels.com/photos/5698379/pexels-photo-5698379.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Espresso with caramel served chilled. A beautiful layered creation." },
      { name: "Brownie Millionaire", price: "₹139", image: "https://images.pexels.com/photos/6328795/pexels-photo-6328795.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Thick dark beverage brownie chunks, whipped cream and lots of chocolate." },
      { name: "Brownie delight", price: "₹149", image: "https://images.pexels.com/photos/5682498/pexels-photo-5682498.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A chocolate lover's dream. Rich chocolate sauce and fudgy brownie pieces blended with coffee and ice." },
      { name: "Moody Dark Frappe", price: "₹159", image: "https://images.pexels.com/photos/2159048/pexels-photo-2159048.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Frappe with double shot Topped with a scoop of ice cream." }
    ]
  },
  {
    title: "Mocktails",
    featuredImage: "https://img.freepik.com/premium-photo/selection-colorful-mocktails_941600-17032.jpg?w=2000",
    dishes: [
      { name: "The Country Lemonade", price: "₹99", image: "https://images.pexels.com/photos/1200354/pexels-photo-1200354.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Simple, classic, and perfectly refreshing. A timeless blend of fresh-squeezed lemons and sugar." },
      { name: "Thunderbolt", price: "₹99", image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=400", description: "An electrifying mix of citrus and secret ingredients, giving a jolt of refreshment." },
      { name: "Blue Ocean", price: "₹109", image: "https://images.pexels.com/photos/2775835/pexels-photo-2775835.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Chilled and refreshing Blue Curacao mocktail is smooth and best served iced cold." },
      { name: "Orange Mojito", price: "₹109", image: "https://images.pexels.com/photos/775030/pexels-photo-775030.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A sunny twist on a classic with the sweetness of orange and lemon." },
      { name: "Strawberry Bliss", price: "₹109", image: "https://images.pexels.com/photos/3434629/pexels-photo-3434629.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Sweetness of Strawberry flavor with crushed ice topped with soda." },
      { name: "Green apple soda Mojito", price: "₹119", image: "https://images.pexels.com/photos/616851/pexels-photo-616851.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Mint and mojito with brown sugar topped with Fizz." },
      { name: "Kiwi Classic", price: "₹119", image: "https://images.pexels.com/photos/839641/pexels-photo-839641.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Freshness of green apple with fizz of soda." },
      { name: "Classic Mojito", price: "₹119", image: "https://images.pexels.com/photos/4784/alcohol-bar-cocktail-cocktails.jpg?auto=compress&cs=tinysrgb&w=400", description: "The timeless classic. A refreshing blend of mint, lime, and soda water." },
      { name: "Crown Cafe Special", price: "₹129", image: "https://images.pexels.com/photos/2480828/pexels-photo-2480828.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A delicate combination of Kiwi, green apple and mildly flavored with lemon juice." }
    ]
  },
  {
    title: "Shakes",
    featuredImage: "https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      { name: "Pineapple Shake", price: "₹109", image: "https://images.pexels.com/photos/5946633/pexels-photo-5946633.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A refreshing tropical escape! Sweet pineapple blended with creamy vanilla ice cream." },
      { name: "Zesty Strawberry", price: "₹109", image: "https://images.pexels.com/photos/2067423/pexels-photo-2067423.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Creamy milkshake with a tinge of strawberries, vanilla ice cream." },
      { name: "Blackcurrant Shake", price: "₹109", image: "https://images.pexels.com/photos/4112948/pexels-photo-4112948.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A burst of bold, tangy flavor. Rich blackcurrants blended with creamy ice cream." },
      { name: "Mango Shake", price: "₹109", image: "https://images.pexels.com/photos/1359326/pexels-photo-1359326.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A tropical delight made with sweet, ripe mangoes and creamy ice cream." },
      { name: "Green Apple Shake", price: "₹119", image: "https://images.pexels.com/photos/2638019/pexels-photo-2638019.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A crisp and tangy delight. The tartness of green apples perfectly balanced with sweet, creamy ice cream." },
      { name: "O'Reo Shake", price: "₹139", image: "https://images.pexels.com/photos/5505963/pexels-photo-5505963.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Crunchy, velvety Oreo blended with ice cream & milk." },
      { name: "Kitkat Shake", price: "₹139", image: "https://images.pexels.com/photos/5947043/pexels-photo-5947043.jpeg?auto=compress&cs=tinysrgb&w=400", description: "The crunchy Kitkat blended with milk, ice cream and topped with chocolate sauce." },
      { name: "Classic Chocolate Shake", price: "₹149", image: "https://images.pexels.com/photos/2347399/pexels-photo-2347399.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Rich dark chocolate blended with ice cream and milk." },
      { name: "Brownie Chocolate Shake", price: "₹159", image: "https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Chunks of Brownie blended with ice cream and milk." },
      { name: "Kesar Pista Shake", price: "₹169", image: "https://images.pexels.com/photos/8314413/pexels-photo-8314413.jpeg?auto=compress&cs=tinysrgb&w=400", description: "An exotic, royal treat. A luxurious blend of fragrant saffron (Kesar) and rich pistachios." },
      { name: "Dry fruit Shake", price: "₹179", image: "https://images.pexels.com/photos/6157038/pexels-photo-6157038.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A wholesome powerhouse. A rich blend of almonds, cashews, dates, and figs with creamy milk." }
    ]
  },
  {
    title: "Sundaes",
    featuredImage: "https://images.pexels.com/photos/2846337/pexels-photo-2846337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      { name: "O'reo Sundae", price: "₹149", image: "https://images.pexels.com/photos/5060413/pexels-photo-5060413.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A delightful sundae with crushed Oreo cookies, vanilla ice cream, and chocolate sauce." },
      { name: "Strawberry sundae", price: "₹149", image: "https://images.pexels.com/photos/3639912/pexels-photo-3639912.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Creamy vanilla ice cream topped with sweet strawberry sauce and fresh strawberries." },
      { name: "Super Chocolate Sundae", price: "₹159", image: "https://images.pexels.com/photos/2846337/pexels-photo-2846337.jpeg?auto=compress&cs=tinysrgb&w=400", description: "For the ultimate chocolate lover, with chocolate ice cream, chocolate sauce, and chocolate chips." },
      { name: "Crown Special Sundae", price: "₹179", image: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A majestic creation with multiple ice cream flavors, nuts, fruits, and special toppings." }
    ]
  },
  {
    title: "Desserts & Ice Cream",
    featuredImage: "https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      { name: "Vanilla", price: "₹59", image: "https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Classic and creamy vanilla ice cream." },
      { name: "Pineapple", price: "₹69", image: "https://images.pexels.com/photos/1352274/pexels-photo-1352274.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A tropical delight, creamy ice cream with the sweet and tangy taste of pineapple." },
      { name: "Strawberry", price: "₹69", image: "https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Sweet and fruity strawberry ice cream." },
      { name: "Chocolate", price: "₹69", image: "https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Rich, classic, and decadent chocolate ice cream. A timeless favorite for all ages." },
      { name: "Cookies and Cream", price: "₹79", image: "https://images.pexels.com/photos/3631430/pexels-photo-3631430.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Vanilla ice cream with crushed chocolate sandwich cookies." },
      { name: "Chocolate Chip", price: "₹79", image: "https://images.pexels.com/photos/4772847/pexels-photo-4772847.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Vanilla ice cream with chocolate chips." },
      { name: "Mango", price: "₹69", image: "https://images.pexels.com/photos/5213133/pexels-photo-5213133.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Tropical and refreshing mango ice cream." },
      { name: "Butterscotch", price: "₹69", image: "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Rich and buttery butterscotch ice cream." },
      { name: "American Nuts", price: "₹69", image: "https://images.pexels.com/photos/2067425/pexels-photo-2067425.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Creamy ice cream loaded with a mix of nuts." },
      { name: "Kesar Pista", price: "₹69", image: "https://images.pexels.com/photos/8314413/pexels-photo-8314413.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Saffron and pistachio flavored Indian ice cream." },
      { name: "Kesar Mohini", price: "₹69", image: "https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A special saffron-based ice cream delicacy." },
      { name: "Kaju Anjeer", price: "₹69", image: "https://images.pexels.com/photos/10389429/pexels-photo-10389429.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A royal Indian treat, blending creamy ice cream with the rich flavors of cashews (Kaju) and figs (Anjeer)." },
      { name: "Sizzling Chocolate Brownie", price: "₹149", image: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Warm brownie topped with ice cream and chocolate sauce, served on a sizzling platter. (Must Try)" },
    ]
  },
  {
    title: "Soups",
    featuredImage: "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      { name: "Tomato soup", price: "₹89", image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400", model: BOWL_MODEL, description: "A classic, rich and creamy tomato soup, lightly seasoned." },
      { name: "Sweet corn veg. soup", price: "₹99", image: "https://images.pexels.com/photos/14732150/pexels-photo-14732150.jpeg?auto=compress&cs=tinysrgb&w=400", model: BOWL_MODEL, description: "A comforting and hearty soup made with sweet corn and mixed vegetables." },
      { name: "Hot and sour veg. Soup", price: "₹99", image: "https://images.pexels.com/photos/8891147/pexels-photo-8891147.jpeg?auto=compress&cs=tinysrgb&w=400", model: BOWL_MODEL, description: "A spicy and tangy soup with mushrooms, tofu, and bamboo shoots." },
      { name: "Veg Manchow", price: "₹99", image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400", model: BOWL_MODEL, description: "A popular hot and spicy Indo-Chinese soup, topped with crispy fried noodles." }
    ]
  },
  {
    title: "Salads & Side Dishes",
    featuredImage: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      { name: "Roasted Papad", price: "₹25", image: "https://images.pexels.com/photos/10372338/pexels-photo-10372338.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Crispy roasted Papadum, a perfect crunchy accompaniment." },
      { name: "Masala Papad", price: "₹39", image: "https://images.pexels.com/photos/5639414/pexels-photo-5639414.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Crispy roasted tangy Papadum, garnished with onion, tomato & green chilly." },
      { name: "Onion Salad", price: "₹49", image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Simple yet refreshing salad with sliced onions, lemon and spices." },
      { name: "Garden Fresh Green Salad", price: "₹69", image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400", model: BOWL_MODEL, description: "A bouquet of fresh garden greens served with lemon wedges." },
      { name: "Russian Salad", price: "₹129", image: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=400", model: BOWL_MODEL, description: "Fresh boiled vegetables mixed in mayonnaise sauce." },
    ]
  },
  {
    title: "Fries & Pakoda",
    featuredImage: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      { name: "French fry", price: "₹99", image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400", description: "The classic finger food made with good old potatoes." },
      { name: "Mix Veg. Pakoda", price: "₹149", image: "https://images.pexels.com/photos/11995819/pexels-photo-11995819.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Assorted vegetables, batter-fried to golden perfection. A classic Indian snack." },
      { name: "Paneer Pakoda", price: "₹169", image: "https://images.pexels.com/photos/9609835/pexels-photo-9609835.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Soft cottage cheese cubes batter-fried until crispy. Served with tangy chutney." },
    ]
  },
  {
    title: "Tandoori Starters",
    featuredImage: "https://www.successyeti.com/wp-content/uploads/2021/08/follow-this-super-easy-recipe-to-make-scrumptious-mutton-shami-kebabs.jpg",
    dishes: [
      { name: "Tandoori Aloo Chatpate", price: "₹149", image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Potatoes marinated in spices and yogurt, grilled in a tandoor for a smoky flavor." },
      { name: "Hara Bhara Kebab", price: "₹159", image: "https://images.pexels.com/photos/8313071/pexels-photo-8313071.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Spinach, peas, and potato patties, spiced and shallow-fried." },
      { name: "Veg Seekh Kebab", price: "₹159", image: "https://images.pexels.com/photos/12842247/pexels-photo-12842247.jpeg?auto=compress&cs=tinysrgb&w=400", model: SHISHKEBAB_MODEL, description: "Minced vegetables and spices molded onto skewers and grilled to perfection." },
      { name: "Potato Hungama", price: "₹169", image: "https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A flavorful and spicy potato preparation that is sure to create a sensation." },
      { name: "Gilafi Seekh Kebab", price: "₹169", image: "https://images.pexels.com/photos/5710189/pexels-photo-5710189.jpeg?auto=compress&cs=tinysrgb&w=400", model: SHISHKEBAB_MODEL, description: "Minced vegetable kebabs coated with chopped bell peppers and onions, grilled." },
      { name: "Kathi Paneer Roll", price: "₹169", image: "https://images.pexels.com/photos/4958639/pexels-photo-4958639.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Spicy paneer tikka, onions, and chutney wrapped in a flaky paratha." },
      { name: "Corn Cheese Kebab", price: "₹179", image: "https://images.pexels.com/photos/2586078/pexels-photo-2586078.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Delicious kebabs made with corn, cheese, and mild spices." },
      { name: "Dahi ke Kebab", price: "₹179", image: "https://images.pexels.com/photos/4012759/pexels-photo-4012759.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Soft, melt-in-the-mouth kebabs made from yogurt and spices." },
      { name: "Mulaiyam Dil Kebab", price: "₹179", image: "https://images.pexels.com/photos/4012759/pexels-photo-4012759.jpeg?auto=compress&cs=tinysrgb&w=400", description: "An exceptionally soft and flavorful kebab that melts in your mouth." },
      { name: "Paneer Tikka", price: "₹199", image: "https://images.pexels.com/photos/9609835/pexels-photo-9609835.jpeg?auto=compress&cs=tinysrgb&w=400", model: SHISHKEBAB_MODEL, description: "Cubes of paneer marinated in spices and grilled in a tandoor." },
      { name: "Hariyali Paneer Tikka", price: "₹199", image: "https://images.pexels.com/photos/15702758/pexels-photo-15702758.jpeg?auto=compress&cs=tinysrgb&w=400", model: SHISHKEBAB_MODEL, description: "Paneer marinated in a fresh green paste of mint, coriander, and spices." },
      { name: "Achari Paneer Tikka", price: "₹199", image: "https://images.pexels.com/photos/5560029/pexels-photo-5560029.jpeg?auto=compress&cs=tinysrgb&w=400", model: SHISHKEBAB_MODEL, description: "Paneer marinated in pickling spices (achar) for a tangy and spicy flavor." },
      { name: "Tanduri Kebab Platter", price: "₹269", image: "https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Combination of tanduri kebab, paneer tikka, veg seekh kebab & tandoori aloo." }
    ]
  },
  {
    title: "Chinese",
    featuredImage: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      { name: "Spring Rolls", price: "₹139", image: "https://images.pexels.com/photos/3662134/pexels-photo-3662134.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Deep fried savory with vegetable and herbs stuffing." },
      { name: "Fried Rice", price: "₹129", image: "https://images.pexels.com/photos/1907097/pexels-photo-1907097.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Schezwan style (hot) fried rice with fresh vegetables." },
      { name: "Dragon Potato", price: "₹149", image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Crispy Potato, onion and capsicum tossed in spicy chilly and soya sauce." },
      { name: "Veg Manchurian dry", price: "₹149", image: "https://images.pexels.com/photos/4871111/pexels-photo-4871111.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Cauliflower fritters dry." },
      { name: "Chowmein", price: "₹159", image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Stir fried noodles with vegetables and savory sauces." },
      { name: "Hakka Noodles", price: "₹159", image: "https://images.pexels.com/photos/10373053/pexels-photo-10373053.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Stir fried noodles with vegetables in Chinese sauces and condiments." },
      { name: "Gobi Manchurian (Dry)", price: "₹159", image: "https://images.pexels.com/photos/13599026/pexels-photo-13599026.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Crispy cauliflower florets tossed in a tangy and savory Manchurian sauce." },
      { name: "Veg Manchurian gravy", price: "₹159", image: "https://images.pexels.com/photos/8891147/pexels-photo-8891147.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Cauliflower fritters in thick spicy gravy." },
      { name: "Crispy Vegetables", price: "₹159", image: "https://images.pexels.com/photos/2544830/pexels-photo-2544830.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Stir fried vegetables with the choice of spicy/non spicy sauce." },
      { name: "Honey Chilly Potatoes", price: "₹159", image: "https://images.pexels.com/photos/13109311/pexels-photo-13109311.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Potatoes are tossed in honey with sweet and sour sauce." },
      { name: "Chinese Bhel", price: "₹159", image: "https://images.pexels.com/photos/9609858/pexels-photo-9609858.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Medley of crispy fried noodles, spring onions, cabbage and chilly garlic sauce." },
      { name: "Veg lollipops", price: "₹169", image: "https://images.pexels.com/photos/1247656/pexels-photo-1247656.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Lollipops loaded with lots of veggies in tangy and spicy sauce." },
      { name: "Chilli Garlic Noodles", price: "₹169", image: "https://images.pexels.com/photos/7627415/pexels-photo-7627415.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Stir-fried noodles tossed with fiery red chillies and pungent garlic for a spicy kick." },
      { name: "Veg 65", price: "₹169", image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Crispy fingers of minced vegetables tossed with traditional Chinese sauce." },
      { name: "Corn & Paneer Fritters", price: "₹169", image: "https://images.pexels.com/photos/111131/pexels-photo-111131.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Crispy corn and cottage cheese tossed in soya sauce, garlic and ginger." },
      { name: "Chilli Paneer", price: "₹189", image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Fresh Cottage cheese with a capsicum, chilies in a spicy sauce." },
      { name: "Paneer 65", price: "₹189", image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Crisp fried Cottage cheese chunks salted and seasoned in spicy paste." },
      { name: "Chinese Platter", price: "₹249", image: "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Combination of Choice of Noodles/Fried rice, spring rolls and Manchurian." },
    ]
  },
   {
    title: "South Indian",
    featuredImage: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      { name: "Plan Dosa", price: "₹50", image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A simple, crispy crepe made from fermented rice and lentil batter." },
      { name: "Masala Dosa", price: "₹80", image: "https://images.pexels.com/photos/6929202/pexels-photo-6929202.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A crispy dosa stuffed with a savory spiced potato filling." },
      { name: "Idli", price: "₹99", image: "https://images.pexels.com/photos/6739922/pexels-photo-6739922.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Steamed savory rice cakes, soft and fluffy, served with sambar and chutney." },
      { name: "Paneer Dosa", price: "₹129", image: "https://images.pexels.com/photos/5741152/pexels-photo-5741152.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A delicious dosa filled with a spiced paneer (cottage cheese) mixture." },
      { name: "Pav Bhaji", price: "₹139", image: "https://images.pexels.com/photos/5520556/pexels-photo-5520556.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A flavorful mash of mixed vegetables served with soft, buttered pav (bread rolls)." },
      { name: "Extra Pav", price: "₹15", image: "https://images.pexels.com/photos/5848467/pexels-photo-5848467.jpeg?auto=compress&cs=tinysrgb&w=400", description: "An extra serving of soft, buttered bread rolls." },
    ]
  },
  {
    title: "Maggi",
    featuredImage: "https://i.pinimg.com/originals/c2/f1/59/c2f159053d7f0565b4043c8ae7ae2cac.jpg",
    dishes: [
      { name: "Plane Maggi", price: "₹69", image: "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Classic instant noodles, a simple and comforting favorite." },
      { name: "home maggi", price: "₹69", image: "https://images.pexels.com/photos/10398075/pexels-photo-10398075.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Just like mom makes it. Simple, comforting, and delicious." },
      { name: "Veg. Maggi", price: "₹79", image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Maggi noodles cooked with a medley of fresh vegetables." },
      { name: "Masala Maggi", price: "₹89", image: "https://images.pexels.com/photos/8963459/pexels-photo-8963459.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Maggi noodles cooked with extra spices for a flavorful kick." },
      { name: "Cheese Maggi", price: "₹109", image: "https://images.pexels.com/photos/606553/pexels-photo-606553.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A cheesy delight! Maggi noodles cooked with a generous amount of melted cheese." },
      { name: "Veg cheese Maggi", price: "₹119", image: "https://images.pexels.com/photos/606555/pexels-photo-606553.jpeg?auto=compress&cs=tinysrgb&w=400", description: "The best of both worlds: Maggi with fresh vegetables and melted cheese." }
    ]
  },
  {
    title: "Pizzas",
    featuredImage: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      { name: "Margherita Pizza", price: "₹149/179", image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400", model: PIZZA_MODEL, description: "Fresh tomato sauce, mozzarella and basil." },
      { name: "Cheese & corn Pizza", price: "₹159/189", image: "https://images.pexels.com/photos/8254898/pexels-photo-8254898.jpeg?auto=compress&cs=tinysrgb&w=400", model: PIZZA_MODEL, description: "Fresh tomato sauce, mozzarella and corn." },
      { name: "Onion, cheese & Capsicum Pizza", price: "₹169/199", image: "https://images.pexels.com/photos/1596888/pexels-photo-1596888.jpeg?auto=compress&cs=tinysrgb&w=400", model: PIZZA_MODEL, description: "Tomato sauce, tomatoes, onions, roasted bell peppers." },
      { name: "Spicy Exotic Veg. Pizza", price: "₹179/219", image: "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=400", model: PIZZA_MODEL, description: "Tomato sauce, corn, tomatoes, olives, onions and bell peppers." },
      { name: "Peppy Paneer Pizza", price: "₹179/219", image: "https://images.pexels.com/photos/3762075/pexels-photo-3762075.jpeg?auto=compress&cs=tinysrgb&w=400", model: PIZZA_MODEL, description: "Topped with Barbeque paneer, mozzarella and lots of vegetables." },
      { name: "Crown Special Pizza", price: "₹199/229", image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=400", model: PIZZA_MODEL, description: "Fresh tomato sauce, mozzarella, onion, mushroom, bell peppers, olives and basil." },
    ]
  },
  {
    title: "Pastas",
    featuredImage: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      { name: "Red Pasta", price: "₹179", image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400", model: BOWL_MODEL, description: "Red Pasta Sauce, Paprika, basil, oregano & fresh Exotic Veggies." },
      { name: "White Pasta", price: "₹189", image: "https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg?auto=compress&cs=tinysrgb&w=400", model: BOWL_MODEL, description: "Garden fresh mixed veggies tossed in creamy white sauce." },
      { name: "Veg. Mushroom Pasta", price: "₹189", image: "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=400", model: BOWL_MODEL, description: "Pasta tossed in red sauce with mushroom, fresh veggies and topped with cheese." },
      { name: "Baked Cheese Pasta", price: "₹189", image: "https://images.pexels.com/photos/5865239/pexels-photo-5865239.jpeg?auto=compress&cs=tinysrgb&w=400", model: BOWL_MODEL, description: "Pasta in white sauce with seasonal veggies baked in the oven." },
      { name: "Combo Pasta", price: "₹209", image: "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Any pasta of your choice with soft drink." },
    ]
  },
  {
    title: "Sandwiches",
    featuredImage: "https://www.datocms-assets.com/20941/1606228913-sandwich-superstars-feature-image.jpeg?auto=format?&fp-debug=false&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&w=350&h=320&dpr=2",
    dishes: [
      { name: "Cheese corn Sandwiches", price: "₹119", image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A delicious grilled sandwich filled with a creamy mixture of cheese and corn." },
      { name: "Veg. Cheese Chilli sandwiches", price: "₹139", image: "https://images.pexels.com/photos/2227776/pexels-photo-2227776.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A spicy and cheesy sandwich with a filling of chili, cheese, and vegetables." },
      { name: "Veg. Club sandwiches", price: "₹149", image: "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A classic triple-layered sandwich with fresh vegetables, cheese, and a creamy spread." },
      { name: "Tandoori Paneer Sandwiches", price: "₹159", image: "https://images.pexels.com/photos/4958639/pexels-photo-4958639.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Grilled sandwich filled with spicy tandoori paneer and veggies." },
      { name: "Crown Special Sandwich", price: "₹169", image: "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Our signature sandwich with a special, secret filling." },
      { name: "Sandwich Platter", price: "₹259", image: "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=400", description: "An assortment of our best sandwiches, perfect for sharing." }
    ]
  },
  {
    title: "Burgers",
    featuredImage: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      { name: "Vegetable cheese Burger", price: "₹99", image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400", model: BURGER_MODEL, description: "A classic veg burger with a crispy vegetable patty, fresh lettuce, tomato, and cheese." }
    ]
  },
  {
    title: "Garlic Breads",
    featuredImage: "https://diyjoy.com/wp-content/uploads/2024/06/Best-Cheesy-Garlic-Bread-Recipe-1024x576.jpg",
    dishes: [
      { name: "Cheese Chilli Toast (CCT)", price: "₹109", image: "https://images.pexels.com/photos/8141381/pexels-photo-8141381.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Toasted bread topped with cheese and spicy green chilies." },
      { name: "Cheese Garlic Bread", price: "₹119", image: "https://images.pexels.com/photos/3998144/pexels-photo-3998144.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Crusty bread smothered in garlic butter and topped with melted mozzarella cheese." },
      { name: "Cheese Chilli Garlic Bread", price: "₹129", image: "https://images.pexels.com/photos/3998144/pexels-photo-3998144.jpeg?auto=compress&cs=tinysrgb&w=400", description: "The perfect combination of cheesy, garlicky, and spicy flavors on toasted bread." },
      { name: "Garlic Bread Supreme", price: "₹139", image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Garlic bread loaded with cheese, corn, olives, and jalapenos." }
    ]
  },
  {
    title: "Sizzlers",
    featuredImage: "https://www.yummyfoodrecipes.com/resources/picture/org/Indian-Vegetable-Sizzler.jpg",
    dishes: [
      { name: "Chinese Platter", price: "₹249", image: "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Combination of Choice of Noodles/Fried rice, spring rolls and Manchurian." },
      { name: "Paneer Shashlik Sizzler", price: "₹279", image: "https://images.pexels.com/photos/111131/pexels-photo-111131.jpeg?auto=compress&cs=tinysrgb&w=400", model: SHISHKEBAB_MODEL, description: "Served cottage cheese, vegetables and cutlet with french fries." },
      { name: "Chinese Sizzler", price: "₹279", image: "https://images.pexels.com/photos/1247656/pexels-photo-1247656.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Served Manchurian Dumplings and fried Rice with chowmein." },
      { name: "Tandoori Sizzler", price: "₹279", image: "https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg?auto=compress&cs=tinysrgb&w=400", model: SHISHKEBAB_MODEL, description: "Tandoori Paneer Tikka with steamed rice and tangy makhani gravy." }
    ]
  },
  {
    title: "Main Course (Paneer)",
    featuredImage: "https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Paneer-Butter-Masala-Recipe-1.jpg",
    dishes: [
      { name: "Paneer Lababdar", price: "₹209", image: "https://images.pexels.com/photos/3979183/pexels-photo-3979183.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Cottage cheese in onion and tomato gravy finished with butter and cream." },
      { name: "Kadai Paneer", price: "₹209", image: "https://images.pexels.com/photos/9609835/pexels-photo-9609835.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Cottage cheese and capsicum in spicy, flavorful gravy." },
      { name: "Handi Paneer", price: "₹209", image: "https://images.pexels.com/photos/5938348/pexels-photo-5938348.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Cottage cheese served on a copper brown gravy with cream." },
      { name: "Mattar Paneer", price: "₹209", image: "https://images.pexels.com/photos/4009412/pexels-photo-4009412.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Cottage cheese and peas cooked in red gravy." },
      { name: "Shahi Paneer", price: "₹209", image: "https://images.pexels.com/photos/5410887/pexels-photo-5410887.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A classic combination of tomato, brown and rich cashew gravy." },
      { name: "Paneer Tikka Masala", price: "₹219", image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Cubes of Cottage cheese marinated and cooked in tandoor placed in spicy tomato gravy." },
      { name: "Paneer Angara", price: "₹209", image: "https://images.pexels.com/photos/10793393/pexels-photo-10793393.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Cottage cheese cooked in spicy tomato gravy." },
      { name: "Paneer Bhurji", price: "₹199", image: "https://images.pexels.com/photos/10793393/pexels-photo-10793393.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Cottage cheese scrambled and cooked with chilly, onions, tomatoes and coriander." },
      { name: "Paneer Mushroom", price: "₹209", image: "https://images.pexels.com/photos/10298942/pexels-photo-10298942.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Cottage cheese and mushroom cooked in traditional Indian gravy." },
      { name: "Kadai Mushroom", price: "₹199", image: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Mushroom capsicum cooked in onion and tomato based spicy semi gravy." },
      { name: "Corn Palak", price: "₹189", image: "https://images.pexels.com/photos/11088195/pexels-photo-11088195.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Corn & spinach cooked in rich and creamy based gravy." },
      { name: "Palak Paneer", price: "₹189", image: "https://images.pexels.com/photos/11088195/pexels-photo-11088195.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Cottage cheese simmered in a rich and creamy spinach based gravy." },
      { name: "Subz Nizami Handi", price: "₹179", image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Assorted vegetables in saffron flavored Indian curry." },
    ]
  },
  {
    title: "Main Course (Vegetable)",
    featuredImage: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      { name: "Veg Kolhapuri", price: "₹189", image: "https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Spicy combination of mix vegetables with grated cheese cooked in a special spicy gravy." },
      { name: "Veg Jalfreji", price: "₹189", image: "https://images.pexels.com/photos/4057758/pexels-photo-4057758.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Mix vegetables cooked in spicy gravy." },
      { name: "Bhuna Sabnami Masala", price: "₹209", image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Fresh green peas are cooked with button mushrooms with aromatic Indian spice." },
      { name: "Navratan Korma", price: "₹189", image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Nine vegetables and fruits with pineapple & finished in white gravy." },
      { name: "Kofta Lajawab", price: "₹199", image: "https://images.pexels.com/photos/12737915/pexels-photo-12737915.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Cottage cheese dumplings stuffed with raisins cooked along with Golden gravy." },
      { name: "Kaju Masala", price: "₹239", image: "https://images.pexels.com/photos/4218640/pexels-photo-4218640.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Whole cashews in a rich and creamy gravy." },
      { name: "Methi Matar Malai", price: "₹189", image: "https://images.pexels.com/photos/10298942/pexels-photo-10298942.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Green peas & Fenugreek in rich creamy gravy." },
      { name: "Chole Masala", price: "₹159", image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Chickpeas cooked in a spicy onion-tomato gravy." },
      { name: "Shahi Gatta Curry", price: "₹159", image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Gram flour dumplings in a tangy yogurt-based curry." },
      { name: "Dum Aloo Kashmiri", price: "₹169", image: "https://images.pexels.com/photos/5639414/pexels-photo-5639414.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Stuffed potatoes in a flavorful red tomato gravy." },
      { name: "Aloo Do Pyaza", price: "₹169", image: "https://images.pexels.com/photos/12737919/pexels-photo-12737919.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A simple yet flavorful dish from Awadh which the addition of onions twice to the dish." },
      { name: "Crown Restaurant Spe.", price: "₹289", image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Our special house dal, a must-try." },
    ]
  },
  {
    title: "Main Course (Dal)",
    featuredImage: "https://www.funfoodfrolic.com/wp-content/uploads/2023/04/Dal-Makhani-Blog-768x768.jpg",
    dishes: [
      { name: "Dal Fry", price: "₹159", image: "https://images.pexels.com/photos/12842247/pexels-photo-12842247.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Yellow lentils tempered with spices." },
      { name: "Dal Tadka", price: "₹169", image: "https://images.pexels.com/photos/14885172/pexels-photo-14885172.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Tempered yellow lentils with zesty garlic flavor." },
      { name: "Dal Makhani", price: "₹189", image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Slow cooked black gram lentils, simmered overnight and finished with butter and cream." },
      
    ]
  },
  {
    title: "Indian Breads",
    featuredImage: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      { name: "Tawa Roti Plain", price: "₹12", image: "https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Simple whole wheat flatbread cooked on a griddle." },
      { name: "Tawa Roti Butter", price: "₹15", image: "https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Whole wheat flatbread cooked on a griddle, topped with butter." },
      { name: "Tandoori Roti Plain", price: "₹16", image: "https://images.pexels.com/photos/10372338/pexels-photo-10372338.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Whole wheat bread cooked in a tandoor." },
      { name: "Tandoori Roti Butter", price: "₹19", image: "https://images.pexels.com/photos/10372338/pexels-photo-10372338.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Whole wheat bread cooked in a tandoor, topped with butter." },
      { name: "Naan Plain", price: "₹25", image: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Soft leavened flatbread cooked in a tandoor." },
      { name: "Naan Butter", price: "₹30", image: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Soft leavened flatbread cooked in a tandoor, topped with butter." },
      { name: "Garlic Naan", price: "₹35", image: "https://images.pexels.com/photos/3754303/pexels-photo-3754303.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Naan flavored with garlic and cilantro." },
      { name: "Cheese Garlic Naan", price: "₹49", image: "https://images.pexels.com/photos/3754303/pexels-photo-3754303.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Naan stuffed with cheese and flavored with garlic." },
      { name: "Crown Special Naan", price: "₹59", image: "https://images.pexels.com/photos/2955819/jpeg?auto=compress&cs=tinysrgb&w=400", description: "Our special house naan." },
      { name: "Laccha Paratha", price: "₹29", image: "https://images.pexels.com/photos/4967390/pexels-photo-4967390.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Layered whole wheat bread, crispy and flaky." },
      { name: "Onion Stuff Kulcha", price: "₹49", image: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Soft leavened bread stuffed with spiced onions." },
      { name: "Paneer Stuff Kulcha", price: "₹49", image: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Soft leavened bread stuffed with spiced paneer." },
      { name: "Tandoori Bread Basket", price: "₹99", image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Assorted basket of tandoori Indian Breads includes Kuber Naan, Lachaa and Tandoori Roti." },
    ]
  },
  {
    title: "Rice & Biryani",
    featuredImage: "https://tse1.mm.bing.net/th/id/OIP.Tzz2wqMGwkBYV571aVfN5wHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    dishes: [
      { name: "Steamed Rice", price: "₹109", image: "https://images.pexels.com/photos/1305063/pexels-photo-1305063.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Perfectly steamed, fluffy white rice." },
      { name: "Jeera Rice", price: "₹119", image: "https://images.pexels.com/photos/9551325/pexels-photo-9551325.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Basmati rice tempered with cumin seeds." },
      { name: "Green Peas Rice", price: "₹129", image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A fragrant rice dish cooked with green peas and mild spices." },
      { name: "Veg Pulao", price: "₹149", image: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Aromatic basmati rice cooked with mixed vegetables and spices." },
      { name: "Biryani Subz", price: "₹179", image: "https://images.pexels.com/photos/12737919/pexels-photo-12737919.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Basmati rice cooked with rare Indian spices and vegetables." },
    ]
  },
  {
    title: "Curd & Raita",
    featuredImage: "https://img.freepik.com/premium-photo/topview-bowl-cream-cheese-with-natural-herbs-swirls-flavor-isolated-white-background_817921-2955.jpg",
    dishes: [
      { name: "Plain Dahi", price: "₹59", image: "https://images.pexels.com/photos/853005/pexels-photo-853005.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Simple, fresh, and creamy plain yogurt." },
      { name: "Boondi Raita", price: "₹79", image: "https://images.pexels.com/photos/8782352/pexels-photo-8782352.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Yogurt with small, crispy chickpea flour balls (boondi)." },
      { name: "Vegetable Raita", price: "₹79", image: "https://images.pexels.com/photos/2067406/pexels-photo-2067406.jpeg?auto=compress&cs=tinysrgb&w=400", description: "Yogurt mixed with finely chopped fresh vegetables and spices." },
      { name: "Pineapple Raita", price: "₹89", image: "https://images.pexels.com/photos/691159/pexels-photo-691159.jpeg?auto=compress&cs=tinysrgb&w=400", description: "A sweet and savory raita with pineapple chunks." },
    ]
  },
];
