import CartList from "../components/Cart/CartList";
import DiscountInfo from "../components/Cart/DiscountInfo";
import OrderSummary from "../components/OrderSummary";

import { useCartStore } from "../store/useCartStore";

const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const totalQuantity = useCartStore((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const discount = 3.19;
  const estimatedDelivery = "01 May, 2025";

  return (
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-gray-800 mt-9 mr-14">
        Cart{" "}
        <span className="text-gray-400 font-bold text-lg align-sub">
          {totalQuantity} ITEMS
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items and Discount */}
        <div className="md:col-span-2">
          <CartList />
          <DiscountInfo />
        </div>

        {/* Order Summary */}
        <OrderSummary
          totalPrice={totalPrice}
          discount={discount}
          estimatedDelivery={estimatedDelivery}
          step="cart"
        />
      </div>
    </div>
  );
};

export default CartPage;
