import { FiTag } from "react-icons/fi";

const PersonalInfo = () => {
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
      <div className="border rounded p-6 h-fit space-y-4">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Price</span>
            <span>$319.98</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-600">$31.90</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between">
            <span>Coupon Applied</span>
            <span>$0.00</span>
          </div>
          <hr />
          <div className="flex justify-between font-semibold text-black">
            <span>TOTAL</span>
            <span>$288.08</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Estimated Delivery by</span>
            <span className="font-medium">01 Feb, 2023</span>
          </div>
        </div>

        {/* Coupon Input */}
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="w-full border rounded px-4 py-2 text-sm"
          />
          <FiTag className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        <button className="w-full bg-teal-600 text-white mt-4 py-2 rounded hover:bg-teal-700 transition">
          Buy
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
