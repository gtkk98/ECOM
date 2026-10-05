"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import useCartStore from "@/stores/cartStore";

const CartButton = () => {
  const itemCount = useCartStore((state) =>
    state.cart.reduce((count, item) => count + (item.quantity ?? 1), 0),
  );

  return (
    <Link
      href="/cart"
      aria-label={`Shopping cart, ${itemCount} items`}
      className="relative"
    >
        <ShoppingCart className="w-4 h-4 text-gray-400" />
        {itemCount > 0 && (
          <span className="absolute -right-3 -top-3 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-400 px-1 text-xs font-medium tabular-nums text-gray-600">
            {itemCount}
          </span>
        )}
    </Link>
  );
};

export default CartButton;