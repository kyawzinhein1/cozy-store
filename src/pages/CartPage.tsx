import { FiMinus, FiPlus, FiTag } from "react-icons/fi";
import OrderSummary from "../components/OrderSummary";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Meryl Lounge Chair",
      color: "Lyseg bright green",
      price: 169.99,
      quantity: 2,
      image: "/lounge-chair.webp",
    },
  ];

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const discount = 3.19;
  //   const shipping = 0;
  const estimatedDelivery = "01 Feb, 2023";

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-6">
        Cart{" "}
        <span className="text-gray-500 font-normal">{totalQuantity} ITEMS</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-start gap-6 border-b pb-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-contain"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Color: {item.color}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 px-2 py-1 rounded">
                    <button className="text-gray-500 p-1">
                      <FiMinus />
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button className="text-gray-500 p-1">
                      <FiPlus />
                    </button>
                  </div>
                  <button className="text-red-500 font-medium text-sm">
                    Remove
                  </button>
                </div>
              </div>
              <div className="text-right font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          {/* Discount Message */}
          <div className="flex items-center text-sm text-green-700 bg-green-50 border border-green-200 px-4 py-3 rounded">
            <FiTag className="mr-2 text-lg" />
            10% Instant Discount with Federal Bank Debit Cards on a min spend of
            $150. TCA
          </div>
        </div>

        {/* Order Summary */}
        <OrderSummary
          totalPrice={totalPrice}
          discount={discount}
          estimatedDelivery={estimatedDelivery}
        />
      </div>
    </div>
  );
};

export default CartPage;
