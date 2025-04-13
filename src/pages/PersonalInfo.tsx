import OrderSummary from "../components/OrderSummary";
import { useCartStore } from "../store/useCartStore";

const PersonalInfo = () => {
  const cart = useCartStore((state) => state.cart);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const discount = 3.19;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Left Column - Form */}
      <div className="md:col-span-2 space-y-10">
        {/* Personal Info */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Personal information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border p-2 rounded w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Phone Number"
            className="border p-2 rounded w-full"
          />
          <textarea
            placeholder="Address"
            className="border p-2 rounded w-full h-24 resize-none"
          />
        </div>

        {/* Shipment Method */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Shipment Method</h2>
          <div className="border rounded divide-y">
            <label className="flex items-center justify-between p-3 cursor-pointer">
              <div>
                <input
                  type="radio"
                  name="shipping"
                  defaultChecked
                  className="mr-2"
                />
                <span className="font-medium">Free</span>{" "}
                <span className="text-sm text-gray-500 ml-1">Yangon</span>
              </div>
            </label>
            <label className="flex items-center justify-between p-3 cursor-pointer">
              <div>
                <input type="radio" name="shipping" className="mr-2" />
                <span className="font-medium">$8.50</span>{" "}
                <span className="text-sm text-gray-500 ml-1">Mandalay</span>
              </div>
            </label>
          </div>
        </div>

        {/* Payment Method */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Payment Method</h2>
          <div className="border rounded divide-y">
            <label className="flex items-center justify-between p-3 cursor-pointer">
              <div>
                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                  className="mr-2"
                />
                <span className="font-medium">Cash on delivery.</span>{" "}
                <span className="text-sm text-gray-500 ml-1">
                  Regular payment
                </span>
              </div>
            </label>
            <label className="flex items-center justify-between p-3 cursor-pointer">
              <div>
                <input type="radio" name="payment" className="mr-2" />
                <span className="font-medium">KBZ Pay</span>{" "}
                <span className="text-sm text-gray-500 ml-1">
                  Digital Payment
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Right Column - Order Summary */}
      <OrderSummary
        totalPrice={totalPrice}
        discount={discount}
        estimatedDelivery="Apr 15, 2025"
        step="info"
      />
    </div>
  );
};

export default PersonalInfo;
