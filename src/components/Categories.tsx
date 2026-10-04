"use client";
import {
    Pizza,
    Sandwich,
    UtensilsCrossed,
    Flame,
    Soup,
    Cake,
    CupSoda
} from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const categories = [
  {
    name: "Pizza",
    slug: "pizza",
    icon: <Pizza className="w-4 h-4" />
  },
  {
    name: "Burgers",
    slug: "burgers",
    icon: <Sandwich className="w-4 h-4" />
  },
  {
    name: "Pasta",
    slug: "pasta",
    icon: <UtensilsCrossed className="w-4 h-4" />
  },
  {
    name: "Wings & Sides",
    slug: "wings-and-sides",
    icon: <Flame className="w-4 h-4" />
  },
  {
    name: "Ramen & Asian",
    slug: "ramen-and-asian",
    icon: <Soup className="w-4 h-4" />
  },
  {
    name: "Desserts",
    slug: "desserts",
    icon: <Cake className="w-4 h-4" />
  },
  {
    name: "Beverages",
    slug: "beverages",
    icon: <CupSoda className="w-4 h-4" />
  }
];

const Categories = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const selectedCategory = searchParams.get("category");

    const handelChange = (value: string | null) => {
        const params = new URLSearchParams(searchParams);
        params.set("category", value || "all");
        router.push(`${pathname}?${params.toString()}`, {scroll: false});
    };

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 text-black bg-gray-300 p-2 rounded-lg mb-4 text-sm">
            {categories.map((category) => (
                <div 
                className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md ${
                    category.slug === selectedCategory ? "bg-white" : "text-shadow-lime-300"   
                }`} 
                key={category.name}
                onClick={()=>handelChange(category.slug)}
                >
                    {category.icon}
                    {category.name}
                </div>
            ))}      
        </div>
    )
}

export default Categories