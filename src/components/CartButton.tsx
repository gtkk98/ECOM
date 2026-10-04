"use client";

import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartProvider";

const CartButton = () => {
  const { items } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={`Shopping cart, ${itemCount} items`}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="relative flex items-center"
      >
        <ShoppingCart className="h-4 w-4 text-gray-600" />
        {itemCount > 0 && (
          <span className="absolute -right-2 -top-2 min-w-4 rounded-full bg-emerald-600 px-1 text-center text-[10px] text-white">
            {itemCount}
          </span>
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full z-20 mt-3 w-72 rounded-md border border-b-emerald-900 bg-emerald-500 p-4 shadow-lg">
          <h2 className="mb-3 font-medium">Shopping cart</h2>
          {items.length === 0 ? (
            <p className="text-sm text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li
                  key={`${item.productId}-${item.portion}`}
                  className="flex justify-between gap-3 text-sm"
                >
                  <span>
                    {item.name} ({item.portion}) x {item.quantity}
                  </span>
                  <span className="shrink-0">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default CartButton;