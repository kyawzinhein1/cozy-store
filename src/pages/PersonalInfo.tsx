import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCheckoutStore } from "../store/useCheckoutStore";
import OrderSummary from "../components/OrderSummary";
import { useCartStore } from "../store/useCartStore";

const PersonalInfo = () => {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const discount = 3.19;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [shipping, setShipping] = useState("Free");
  const [payment, setPayment] = useState("Cash on delivery");

  const { setInfo } = useCheckoutStore();
  const navigate = useNavigate();

  const handleBuy = () => {
    setInfo({
      name,
      email,
      phone,
      address,
      shipping,
      payment,
    });
    navigate("/order-information");
    // console.log(name, email, phone, address, shipping, payment);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="md:col-span-2 space-y-10">
        {/* Personal Info Form */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Personal information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-400 p-2 rounded w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-400 p-2 rounded w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-400 p-2 rounded w-full"
          />
          <textarea
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-gray-400 p-2 rounded w-full h-24 resize-none"
          />
        </div>

        {/* Shipment Method */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-gray-800">Shipment Method</h2>
          <div className="border border-gray-400 rounded divide-y divide-gray-400">
            <label className="flex items-center justify-between p-3 cursor-pointer">
              <div>
                <input
                  type="radio"
                  name="shipping"
                  value="Free"
                  checked={shipping === "Free"}
                  onChange={(e) => setShipping(e.target.value)}
                  className="mr-2"
                />
                <span className="font-medium">Free</span>
                <span className="text-sm text-gray-500 ml-1">Yangon</span>
              </div>
            </label>
            <label className="flex items-center justify-between p-3 cursor-pointer">
              <div>
                <input
                  type="radio"
                  name="shipping"
                  value="$8.50"
                  checked={shipping === "$8.50"}
                  onChange={(e) => setShipping(e.target.value)}
                  className="mr-2"
                />
                <span className="font-medium">$8.50</span>
                <span className="text-sm text-gray-500 ml-1">Mandalay</span>
              </div>
            </label>
          </div>
        </div>

        {/* Payment Method */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-gray-800">Payment Method</h2>
          <div className="border border-gray-400 rounded divide-y divide-gray-400">
            <label className="flex items-center justify-between p-3 cursor-pointer">
              <div>
                <input
                  type="radio"
                  name="payment"
                  value="Cash on delivery"
                  checked={payment === "Cash on delivery"}
                  onChange={(e) => setPayment(e.target.value)}
                  className="mr-2"
                />
                <span className="font-medium">Cash on delivery.</span>
                <span className="text-sm text-gray-500 ml-1">
                  Regular payment
                </span>
              </div>
            </label>
            <label className="flex items-center justify-between p-3 cursor-pointer">
              <div>
                <input
                  type="radio"
                  name="payment"
                  value="KBZ Pay"
                  checked={payment === "KBZ Pay"}
                  onChange={(e) => setPayment(e.target.value)}
                  className="mr-2"
                />
                <span className="font-medium">KBZ Pay</span>
                <span className="text-sm text-gray-500 ml-1">
                  Digital Payment
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Right Column - Order Summary */}
      <div className="mt-12">
        <OrderSummary
          totalPrice={totalPrice}
          discount={discount}
          estimatedDelivery="01 May, 2025"
          step="info"
          onAction={handleBuy} // Pass function to OrderSummary
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
