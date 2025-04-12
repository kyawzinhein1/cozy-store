import React from "react";

type OrderInfo = {
  orderNumber: string;
  name: string;
  email: string;
  phone: string;
  shipment: string;
  paymentMethod: string;
  address: string;
  price: number;
  discount: number;
  shipping: string;
  coupon: number;
  total: number;
  estimatedDelivery: string;
};

const OrderInformation: React.FC = () => {
  const order: OrderInfo = {
    orderNumber: "008834TVU",
    name: "Mr. Shinn Thant",
    email: "shinn.thant@kbzlife.com",
    phone: "09 974 872 745",
    shipment: "Free (Yangon)",
    paymentMethod: "Cash on delivery",
    address: "Gabar Aye Bagoda Road, PyaeWa Condo, Yangon Myanmar.",
    price: 319.98,
    discount: 31.9,
    shipping: "Free",
    coupon: 0.0,
    total: 288.08,
    estimatedDelivery: "01 Feb, 2023",
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-6">
        Order create successfully!
      </div>

      <h2 className="text-xl font-semibold mb-4">Order Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2 space-y-4">
          <div>
            <p className="text-gray-500">Order Number</p>
            <p className="font-medium">{order.orderNumber}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <p className="text-gray-500">Name</p>
              <p className="font-medium">{order.name}</p>
            </div>
            <div>
              <p className="text-gray-500">Email Address</p>
              <p className="font-medium">{order.email}</p>
            </div>
            <div>
              <p className="text-gray-500">Phone Number</p>
              <p className="font-medium">{order.phone}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500">Shipment</p>
              <p className="font-medium">{order.shipment}</p>
            </div>
            <div>
              <p className="text-gray-500">Payment Method</p>
              <p className="font-medium">{order.paymentMethod}</p>
            </div>
          </div>

          <div>
            <p className="text-gray-500">Address</p>
            <p className="font-medium">{order.address}</p>
          </div>
        </div>

        <div className="border p-4 rounded-md shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Price</span>
              <span>${order.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>${order.discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{order.shipping}</span>
            </div>
            <div className="flex justify-between">
              <span>Coupon Applied</span>
              <span>${order.coupon.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Estimated Delivery by</span>
              <span className="text-black font-medium">
                {order.estimatedDelivery}
              </span>
            </div>
            <button className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded">
              Save Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
