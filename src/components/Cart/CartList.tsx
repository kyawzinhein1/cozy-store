import { useCartStore } from "../../store/useCartStore";
import CartItem from "./CartItem";

const CartList = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="pt-8">
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CartList;
