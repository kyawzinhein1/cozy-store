import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CheckoutInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  shipping: string;
  payment: string;
}

interface CheckoutStore {
  info: CheckoutInfo;
  setInfo: (data: CheckoutInfo) => void;
  clearInfo: () => void;
}

const initialState: CheckoutInfo = {
  name: "",
  email: "",
  phone: "",
  address: "",
  shipping: "Free",
  payment: "Cash on delivery",
};

export const useCheckoutStore = create<CheckoutStore>()(
  persist(
    (set) => ({
      info: initialState,
      setInfo: (data) => set({ info: data }),
      clearInfo: () => set({ info: initialState }),
    }),
    {
      name: "checkout-storage",
    }
  )
);
