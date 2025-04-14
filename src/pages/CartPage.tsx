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
  <div className="max-w-7xl mx-auto px-6 mt-9">
    <div className="md:flex md:items-start md:justify-between">
      {/* Left Side: Title and Cart Content */}
      <div className="md:w-2/3 md:pr-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Cart{" "}
          <span className="text-gray-400 font-bold text-lg align-sub ml-4">
            {totalQuantity} ITEMS
          </span>
        </h2>

        {totalPrice === 0 && (
          <p className="text-sm text-red-500 mb-4">
            No product added your cart.
          </p>
        )}

        <CartList />
        <DiscountInfo />
      </div>

      {/* Right Side: Order Summary */}
      <div className="md:w-1/3 mt-10 md:mt-0">
        <OrderSummary
          totalPrice={totalPrice}
          discount={discount}
          estimatedDelivery={estimatedDelivery}
          step="cart"
        />
      </div>
    </div>
  </div>
);

};

export default CartPage;
