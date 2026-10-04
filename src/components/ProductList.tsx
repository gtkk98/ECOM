import { ProductType } from "../types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";

export const products:ProductType[] = [
  {
    id: 1,
    name: "Artisan Pepperoni Pizza",
    shortDescription: "Wood-fired sourdough crust topped with spicy pepperoni and fresh mozzarella.",
    description: "Crafted with hand-tossed sourdough crust and baked in a 800°F wood-fired oven. Layered with authentic San Marzano tomato sauce, whole milk mozzarella, premium sliced pepperoni, and drizzled with chili-infused hot honey.",
    price: 18.99,
    portion: "12 inch (8 slices)",
    taste: "Spicy & Savory",
    images: {
      thumbnail: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=300",
      primary: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800",
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800"
      ]
    }
  },
  {
    id: 2,
    name: "Smoky Bacon Double Cheeseburger",
    shortDescription: "Juicy double beef patties with thick-cut bacon, cheddar, and house sauce.",
    description: "Two 100% Angus beef patties smashed and seared on a flat-top grill. Served on a toasted brioche bun with double sharp cheddar cheese, applewood smoked bacon, crispy onion strings, pickles, and signature house BBQ mayo.",
    price: 14.50,
    portion: "Single Burger (350g)",
    taste: "Rich & Savory",
    images: {
      thumbnail: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
      primary: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800"
      ]
    }
  },
  {
    id: 3,
    name: "Truffle Wild Mushroom Fettuccine",
    shortDescription: "Fresh fettuccine pasta tossed in a creamy garlic truffle cream sauce.",
    description: "House-made egg fettuccine noodles tossed with sauteed wild chanterelle and cremini mushrooms. Smothered in a velvet white wine truffle garlic sauce and finished with grated Aged Parmigiano-Reggiano.",
    price: 21.00,
    portion: "1 Serving (400g)",
    taste: "Creamy & Umami",
    images: {
      thumbnail: "https://images.unsplash.com/photo-1621996346565-e3d5d6281288?w=300",
      primary: "https://images.unsplash.com/photo-1621996346565-e3d5d6281288?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1621996346565-e3d5d6281288?w=800",
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800"
      ]
    }
  },
  {
    id: 4,
    name: "Fiery Buffalo Chicken Wings",
    shortDescription: "Crispy fried wings tossed in classic spicy buffalo sauce.",
    description: "Jumbo chicken wings fried to golden crispiness and drenched in our homemade cayenne pepper buffalo sauce. Accompanied by crunchy celery sticks, carrot spears, and house buttermilk blue cheese dip.",
    price: 12.99,
    portion: "10 Pieces",
    taste: "Hot & Tangy",
    images: {
      thumbnail: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300",
      primary: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800"
      ]
    }
  },
  {
    id: 5,
    name: "Tonkotsu Chashu Ramen",
    shortDescription: "Rich rich pork broth ramen with tender chashu pork belly and soft-boiled egg.",
    description: "Slow-simmered 12-hour pork bone broth served over springy ramen noodles. Topped with melt-in-your-mouth slow-braised pork belly, marinated ajitama egg, wood ear mushrooms, bamboo shoots, and scallions.",
    price: 16.75,
    portion: "1 Large Bowl (650ml)",
    taste: "Savory & Umami",
    images: {
      thumbnail: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300",
      primary: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800"
      ]
    }
  },
  {
    id: 6,
    name: "Mango Passionfruit Cheesecake",
    shortDescription: "Creamy New York style cheesecake topped with fresh tropical fruit glaze.",
    description: "Rich and silky baked cream cheese filling on a buttery graham cracker crust. Layered with a tart passionfruit reduction and topped with diced fresh Kensington Pride mangoes.",
    price: 8.50,
    portion: "1 Slice (180g)",
    taste: "Sweet & Tangy",
    images: {
      thumbnail: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300",
      primary: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800"
      ]
    }
  }
];

const ProductList = () => {
    return <div className="w-full">
        <Categories/>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>;
}

export default ProductList;