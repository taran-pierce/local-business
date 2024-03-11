import Container from "../../components/Container";
import FoodMenu from "../../components/FoodMenu";

export const menu = {
  main: [
    {
      name: 'Dinners',
      description: 'Dinners are served with a house salad, fresh vegtableds and a choice of house fries, mashed potatoes, baked potatl, house chips or Cole slow. Sweet Potato frids or onions rings $2.50 up charge',
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
          description: 'Leaft Lettuce topped with Filet Tips, TOmoatoes, Cucumbers, Shredded Cheese and Hosue Cut Fries',
          price: 1649,
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

export const metadata = {
  title: "Menu | Buckshot Bar & Grill",
};

export default function MenuPage() {
  return (
    <main>
      <Container>
        <h1>Menu</h1>
        <FoodMenu menu={menu} />
      </Container>
    </main>
  );
}
