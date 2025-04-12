// store/useCartStore.ts
import { create } from "zustand";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  cart: CartItem[];
  totalQuantity: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  totalQuantity: 0,

  addToCart: (item) => {
    const existing = get().cart.find((i) => i.id === item.id);
    let updatedCart;
    if (existing) {
      updatedCart = get().cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
      );
    } else {
      updatedCart = [...get().cart, item];
    }

    const totalQty = updatedCart.reduce((acc, i) => acc + i.quantity, 0);
    set({ cart: updatedCart, totalQuantity: totalQty });
  },

  removeFromCart: (id) => {
    const updatedCart = get().cart.filter((item) => item.id !== id);
    const totalQty = updatedCart.reduce((acc, i) => acc + i.quantity, 0);
    set({ cart: updatedCart, totalQuantity: totalQty });
  },

  increaseQty: (id) => {
    const updatedCart = get().cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    const totalQty = updatedCart.reduce((acc, i) => acc + i.quantity, 0);
    set({ cart: updatedCart, totalQuantity: totalQty });
  },

  decreaseQty: (id) => {
    const updatedCart = get().cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    const totalQty = updatedCart.reduce((acc, i) => acc + i.quantity, 0);
    set({ cart: updatedCart, totalQuantity: totalQty });
  },
}));
