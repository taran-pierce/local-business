import { Rye } from "next/font/google";

import Container from "../../components/Container";
import FoodMenu from "../../components/FoodMenu";

export const menu = {
  main: [
    {
      name: 'Appetizers',
      items: [
        {
          name: 'Boneless Chicken Wings',
          special: true,
          description: 'Hot, Mild, or BBQ served with Carrots & celery',
          price: 1289,
        },
        {
          name: 'Filet Tips',
          description: 'Topped with blue cheese crumblesserved with brown gravy',
          price: 1499,
        },
        {
          name: 'Mac & Cheese bites',
          description: 'Elbow macaroni with a Blend of pepper jack, cheddar and white cheddar cheese',
          price: 1089,
        },
        {
          name: 'Mushrooms',
          description: 'Whole mushrooms deep fried to perfection',
          price: 989,
        },
        {
          name: 'Nachos',
          description: 'Chips, cheese sauce,lettuce, tomoatoes, jalapenos, salsa and sour cream',
          price: 1449,
        },
        {
          name: 'Jalapeno Poppers',
          description: 'red jalapenos stuffed with cream cheese',
          price: 1189,
        },
        {
          name: 'Fried Pickles',
          description: 'Fried to a golden brown',
          price: 889,
        },
        {
          name: 'House made Mozzarella Sticks',
          description: 'Every cheese lovers dream! Cheese cooked to a perfection served with Marinara sauce',
          price: 1489,
        },
        {
          name: 'Spicy Cauliflower Bites',
          description: 'Deep fried cauliflower florets with a touch of spice',
          price: 1089,
        },
        {
          name: 'House Cut Fries',
          description: 'Fresh Fries Cuty Daily',
          price: 789,
        },
        {
          name: 'Basket of House Made Chips',
          description: 'Dusted with your choice of BBQ, Garlic and Onion or Ranch Seasoning',
          price: 789,
        },
        {
          name: 'Chips & Salsa',
          price: 769,
        },
        {
          name: 'Big Buck Sampler Platter',
          description: 'Boneless Wings, Poppers, Mac Bites, Mushrooms and Onions Rings',
          price: 1869,
        },
      ]
    },
    {
      name: 'Burgers & Sandwiches',
      items: [
        {
          name: 'Single Shot',
          description: 'Juicy Flame grilled burger',
          price: 1389,
        },
        {
          name: 'Black Bean Veggie Burger',
          description: 'Juicy flame grilled bean burger',
          price: 1289,
        },
        {
          name: '12 Gauge Burger',
          description: 'Flame grilled topped with Cream cheese and roasted pueblo green chili',
          special: true,
          price: 1589,
        },
        {
          name: '16 Guage Burger',
          description: 'Flame grilled topped with blue cheese crumbles, spicy mayo and crispy onions',
          price: 1549,
        },
        {
          name: '20 Gauge Slopper Burger',
          special: true,
          description: 'Flame grilled smothered in pueblo gtreen chili topped with lettuce, tomato, cheese and red onions',
          price: 1589,
        },
        {
          name: 'Western Barrel Burger',
          description: 'Flame grilled topped with cheddar cheese, bacon, BBQ sauce and an onion ring',
          price: 1649,
        },
        {
          name: 'Patty Melt',
          description: 'Flame grilled topped with swiss cheese, grilled onions served open faced on rye bread',
          price: 1469,
        },
        {
          name: 'Philly Cheese Steak',
          description: 'Shaved prime rib grilled with oninos, peppers and provolone cheese',
          price: 1689,
        },
        {
          name: 'French Dip',
          description: 'Shaved prime rib topped with provolone cheese served with Beef Au Jus',
          price: 1589,
        },
        {
          name: 'Turkey Club',
          description: 'Thinly sliced ham grilled with American cheese served on White, wheat or Rye bread',
          price: 1389,
        },
        {
          name: 'Big BLT',
          description: 'Eight strips of crispy bacon, lettuce, tomato and mayo on whtie, wheat or rye bread',
          price: 1389,
        },
        {
          name: 'Grilled Chicken Club',
          description: 'Fresh grilled chicken with lettuce, tomato, swiss cheese, bacon and spicy mustard on a glossy bun',
          price: 1489,
        },
        {
          name: 'Breaded Buffalo Chicken',
          description: 'Breaded hicken breast with lettuce, tomato, and blue cheese crumbles topped with buffalo sauce on a glossy bun',
          price: 1489,
        },
        {
          name: 'Steak Wrap',
          description: 'Filet TIps, lettuce, tomato, blue cheese crumbles, and balsamic Vinaigrette wrapped in a large Tortilla',
          price: 1489,
        },
        {
          name: 'Chicken Ranch Wrap',
          description: 'Grilled or breaded chicken breast, bacon, lettuce, tomato, shredded cheese and ranch dressing wrapped in a large Tortilla',
          price: 1489,
        },
      ]
    },
    {
      name: 'Dinners',
      description: 'Dinners are served with a house salad, fresh vegtables and a choice of house fries, mashed potatoes, baked potatoe, house chips or cole slow. Sweet Potato fries or onions rings are a $2.50 up charge',
      items: [
        {
          name: 'Canyon Cut Ribeye',
          description: 'Hand Cut USDA Choice Ribeye Steak',
          price: 2899,
        },
        {
          name: 'Grilled Chicken Dinner',
          description: 'Two Large grilled Chicken Breasts',
          price: 2289,
        },
        {
          name: 'Petite Cut Filet',
          description: 'Hand Cut USDA Choice Filet',
          price: 2499,
        },
        {
          name: 'Chicken Tender Dinner',
          description: 'Hand cut breaded Chicken strips with your choice of dipping sauce',
          price: 1999,
        },
        {
          name: 'Chicken Fried Steak',
          description: 'Tender Breaded steak topped with White or Brown Gravy',
          price: 2189,
        },
      ]
    },
    {
      name: 'House Favorites',
      items: [
        {
          name: 'Beer Battered Fish & Chips',
          special: true,
          description: '8oz Cod Filet served with House Fries or House Chips and Cole Slaw',
          price: 1989,
        },
        {
          name: 'Mac & Cheese',
          description: 'Cheese Blend topped with Toasted Panko Bread Crumbs Served with Garlic Toast and a House Salad',
          subDescription: 'Green CHili Mac and Cheese', 
          price: 1389,
          subPrice: 1589,
        },
        {
          name: 'Grilled Salmon Filet',
          description: '6 oz Code filet served with house fries or house chips and cole slaw.',
          price: 1989,
        },
        {
          name: 'Large Quesadilla',
          description: 'Served with salsa, sour cream and house fries',
          subDescription: 'Add Grilled onions or grilled peppers', 
          price: 1549,
          subPrice: 225,
        },
      ]
    },
    {
      name: 'Salads',
      items: [
        {
          name: 'Large Garden Salad',
          description: 'Leaf lettuce topped with tomatoes, cucumbers, shredded cheese and croutons.',
          price: 1049,
        },
        {
          name: 'Our Famous Steak Salad',
          special: true,
          description: 'Leaf Lettuce topped with Filet Tips, Tomatoes, Cucumbers, Shredded Cheese and Hosue Cut Fries',
          price: 1649,
        },
        {
          name: 'Chef Salad',
          description: 'Leaf lettuce topped with tomatoes, cucumbers, ham, turkey, swiss cheese and hard-boiled eggs',
          price: 1369,
        },
        {
          name: 'Chicken Caesar Salad',
          description: 'Leaf lettuce topped with grilled chicken, parmesan cheese, croutons and caesar dressing',
          price: 1389,
        },
        {
          name: 'Homemade Dressings',
          description: 'Ranch, Blue Cheese, 1000 Island, Honey Mustard, Italian, Caesar, Balsamic Vinaigrette, Vinegar and Oil',
        },
      ]
    }
  ],
  secondary: [
    {
      name: 'Desserts',
      description: 'Ask server for the latest'
    },
    {
      name: 'Drinks',
      description: 'All the above include free refills',
      price: 369,
      items: [
        'Coke',
        'Diet Coke'
      ]
    }
  ],
};

const rye = Rye({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Menu | Local Restaurant",
};

export default function MenuPage() {
  return (
    <main>
      <Container>
        <h1 className={rye.className}>Menu</h1>
        <FoodMenu menu={menu} />
      </Container>
    </main>
  );
}
