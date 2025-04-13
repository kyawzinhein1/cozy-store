interface Props {
  shipping: string;
  setShipping: (val: string) => void;
}

const ShippingMethod = ({ shipping, setShipping }: Props) => {
  return (
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
  );
};

export default ShippingMethod;
