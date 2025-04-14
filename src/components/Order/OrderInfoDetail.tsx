import { useCheckoutStore } from "../../store/useCheckoutStore";

const OrderInfoDetails = () => {
  const userInfo = useCheckoutStore((state) => state.info);

  return (
    <div className="md:col-span-2 space-y-10">
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
      <hr className="text-gray-300 mb-7" />

      <div className="grid grid-cols-3 gap-4">
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
  );
};

export default OrderInfoDetails;
