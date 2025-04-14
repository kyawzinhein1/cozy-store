import OrderInfoDetails from "../components/Order/OrderInfoDetail";
import OrderSummary from "../components/OrderSummary";
import { useCartStore } from "../store/useCartStore";

const OrderInformation = () => {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const discount = 3.19;

  return (
    <div className="px-6 pt-4 max-w-7xl mx-auto">
      <div className="bg-teal-50 text-teal-600 px-6 py-3 rounded-sm mb-6">
        Order create successfully!
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <OrderInfoDetails />
        <div className="mt-8">
          <OrderSummary
            totalPrice={totalPrice}
            discount={discount}
            estimatedDelivery="01 May, 2025"
            step="order"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
