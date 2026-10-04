import Link from "next/link";
import { ProductType } from "../types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Filter from "./Filter";

export const products:ProductType[] = [
  {
    id: 1,
    name: "Artisan Pepperoni Pizza",
    shortDescription: "Wood-fired sourdough crust topped with spicy pepperoni and fresh mozzarella.",
    description: "Crafted with hand-tossed sourdough crust and baked in a 800°F wood-fired oven. Layered with authentic San Marzano tomato sauce, whole milk mozzarella, premium sliced pepperoni, and drizzled with chili-infused hot honey.",
    portions: [
      { name: "small", price: 18.99 },
      { name: "medium", price: 22.99 },
      { name: "large", price: 26.99 },
    ],
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
    portions: [
      { name: "single", price: 14.50 },
      { name: "double", price: 18.50 },
      { name: "triple", price: 22.50 },
    ],
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
    portions: [
      { name: "regular", price: 21.00 },
      { name: "large", price: 25.00 },
      { name: "family", price: 39.00 },
    ],
    taste: "Creamy & Umami",
    images: {
      thumbnail: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300",
      primary: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800"
      ]
    }
  },
  {
    id: 4,
    name: "Fiery Buffalo Chicken Wings",
    shortDescription: "Crispy fried wings tossed in classic spicy buffalo sauce.",
    description: "Jumbo chicken wings fried to golden crispiness and drenched in our homemade cayenne pepper buffalo sauce. Accompanied by crunchy celery sticks, carrot spears, and house buttermilk blue cheese dip.",
    portions: [
      { name: "Half Dozen", price: 12.99 },
      { name: "Standard", price: 18.99 },
      { name: "Party Size", price: 29.99 },
    ],
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
    portions: [
      { name: "Regular Bowl", price: 16.75 },
      { name: "Large Bowl", price: 20.75 },
      { name: "Monster Bowl", price: 25.75 },
    ],
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
    portions: [
      { name: "Single Slice", price: 8.50 },
      { name: "Double Slice", price: 15.00 },
      { name: "Whole Cake", price: 42.00 },
    ],
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

const ProductList = ({category, params}: {category:string, params:"homepage" | "products"}) => {
    return ( <div className="w-full">
        <Categories/>
        {params === "products" && <Filter/>}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        <Link 
            href={category ? `/products/?category=${category}` : "/products"} 
            className="flex justify-end m-4 underline text-sm text-gray-500"
        >
            View all products
        </Link>
    </div>
    )
}

export default ProductList;