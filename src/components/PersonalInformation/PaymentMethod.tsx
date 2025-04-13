interface Props {
  payment: string;
  setPayment: (val: string) => void;
}

const PaymentMethod = ({ payment, setPayment }: Props) => {
  return (
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
            <span className="text-sm text-gray-500 ml-1">Regular payment</span>
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
            <span className="text-sm text-gray-500 ml-1">Digital Payment</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default PaymentMethod;
