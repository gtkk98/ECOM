import type { CartItemType, CartStoreActionsType, CartStoreStateType } from '@/types';
import { create } from 'zustand';
import {persist, createJSONStorage} from "zustand/middleware"

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()((set) => ({
  cart: [],
  addToCart: (product, portion) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.id === product.id && item.selectedPortion === portion.name,
      );

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item === existingItem ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        };
      }

      return {
        cart: [...state.cart, { ...product, quantity: 1, selectedPortion: portion.name }],
      };
    }),
  removeFromCart: (product) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => item.id !== product.id || item.selectedPortion !== product.selectedPortion,
      ),
    })),
  clearCart: () => set({ cart: [] as CartItemType[] }),
}));

export default useCartStore;