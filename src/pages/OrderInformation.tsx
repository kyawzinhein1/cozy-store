import OrderSummary from "../components/OrderSummary";
import { useCartStore } from "../store/useCartStore";
import { useCheckoutStore } from "../store/useCheckoutStore";

const OrderInformation = () => {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const discount = 3.19;

  const userInfo = useCheckoutStore((state) => state.info);

  return (
    <div className="px-6 pt-4 max-w-7xl mx-auto">
      <div className="bg-teal-50 text-teal-600 font-semibold px-4 py-3 rounded mb-6">
        Order create successfully!
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Left side (main info) */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-bold mb-2">Order Information</h2>
          <hr className="text-gray-300 mb-7" />

          <div>
            <p className="text-gray-500 font-semibold">Order Number</p>
            <p className="font-medium">008834TVU</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <p className="text-gray-500 font-semibold">Name</p>
              <p className="font-medium">{userInfo.name}</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">Email Address</p>
              <p className="font-medium">{userInfo.email}</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">Phone Number</p>
              <p className="font-medium">{userInfo.phone}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 font-semibold">Shipment</p>
              <p className="font-medium">
                {userInfo.shipping === "Free"
                  ? `${userInfo.shipping} (Yangon)`
                  : userInfo.shipping}
              </p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">Payment Method</p>
              <p className="font-medium">{userInfo.payment}</p>
            </div>
          </div>

          <div>
            <p className="text-gray-500 font-semibold">Address</p>
            <p className="font-medium">{userInfo.address}</p>
          </div>
        </div>

        {/* Order Summary */}
        <OrderSummary
          totalPrice={totalPrice}
          discount={discount}
          estimatedDelivery="01 May, 2025"
          step="order"
        />
      </div>
    </div>
  );
};

export default OrderInformation;
