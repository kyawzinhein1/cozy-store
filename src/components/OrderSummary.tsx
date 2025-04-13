// components/OrderSummary.tsx
import { FiTag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface OrderSummaryProps {
  totalPrice: number;
  discount: number;
  estimatedDelivery: string;
  step: "cart" | "info" | "order";
}

const OrderSummary = ({
  totalPrice,
  discount,
  estimatedDelivery,
  step,
}: OrderSummaryProps) => {
  const navigate = useNavigate();

  const buttonLabel =
    step === "cart"
      ? "Proceed to Checkout"
      : step === "info"
      ? "Buy"
      : "Save Gallery";

  const handleClick = () => {
    if (step === "cart") {
      navigate("/personal-info");
    } else if (step === "info") {
      navigate("/order-info");
    } else if (step === "order") {
      alert("Order saved to gallery!");
    }
  };

  return (
    <div className="border border-gray-300 p-6 rounded shadow-sm h-fit">
      <h4 className="font-bold text-xl text-gray-700 mb-6">Order Summary</h4>
      <div className="space-y-3 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Price</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span className="text-green-600">-${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="text-green-600">Free</span>
        </div>
        <div className="flex justify-between">
          <span>Coupon Applied</span>
          <span>$0.00</span>
        </div>
        <hr  className="text-gray-300"/>
        <div className="flex justify-between font-semibold text-black">
          <span>Total</span>
          <span>${(totalPrice - discount).toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Delivery by</span>
          <span className="font-medium">{estimatedDelivery}</span>
        </div>
      </div>

      {/* Coupon Input */}
      <div className="mt-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Coupon Code"
            className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
          />
          <FiTag className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Checkout Button */}
      <button
        className="w-full bg-teal-600 text-white mt-6 py-2 rounded hover:bg-teal-700 transition"
        onClick={handleClick}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default OrderSummary;
