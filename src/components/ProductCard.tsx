"use client";

import { ProductType } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartProvider";

const ProductCard = ({ product }: { product: ProductType }) => {
  const imageSrc = product.images?.primary ?? product.images?.thumbnail ?? "";
  const tastes = Array.isArray(product.taste) ? product.taste : [product.taste];
  const [selectedPortion, setSelectedPortion] = useState(product.portions[0]);
  const { addToCart } = useCart();

  return (
    <div className="shadow-lg rounded-lg overflow-hidden bg-white">
      {/* IMAGE */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3]">
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>
      {/* PRODUCT DETAILS */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium text-emerald-800">{product.name}</h1>
        <p className="text-sm text-emerald-600">{product.shortDescription}</p>
        {/* PRODUCT TYPES */}
        <div className="flex items-center gap-4 text-xs">
          {/* PORTION */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Portion</span>
            <select
              name="size"
              id="size"
              className="bg-emerald-500 ring ring-emerald-300 rounded-md px-2 py-1"
              value={selectedPortion.name}
              onChange={(event) => {
                const portion = product.portions.find(
                  (option) => option.name === event.target.value,
                );
                if (portion) setSelectedPortion(portion);
              }}
            >
              {product.portions.map((portion) => (
                <option key={portion.name} value={portion.name}>
                  {portion.name}
                </option>
              ))}
            </select>
          </div>
          {/* TASTE */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-600">Taste</span>
            <div className="flex flex-wrap items-center gap-2">
              {tastes.map((taste) => (
                <span
                  key={taste}
                  className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-medium text-emerald-700"
                >
                  {taste}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* PRICE AND ADD TO CART */}
        <div className="flex items-center justify-between">
          <p className="font-medium text-black">${selectedPortion.price.toFixed(2)}</p>
          <button
            type="button"
            onClick={() => addToCart(product, selectedPortion)}
            className="ring-1 ring-emerald-200 bg-emerald-500 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4"/>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
