"use client";

import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartProvider";
import Link from "next/link";

const CartButton = () => {
  const { items } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link href="/cart" className="relative">
        <ShoppingCart className="w-4 h-4 text-gray-400"/>
        <span className="absolute -top-3 -right-3 bg-amber-400 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">0</span>
    </Link>
  );
};

export default CartButton;