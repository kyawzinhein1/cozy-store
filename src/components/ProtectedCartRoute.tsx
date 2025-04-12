// components/ProtectedCartRoute.tsx
import { Navigate } from "react-router-dom";
import CartPage from "../pages/CartPage";
import { useCartStore } from "../store/useCartStore";

const ProtectedCartRoute = () => {
  const totalQty = useCartStore((state) => state.totalQuantity);

  return totalQty > 0 ? <CartPage /> : <Navigate to="/" />;
};

export default ProtectedCartRoute;
