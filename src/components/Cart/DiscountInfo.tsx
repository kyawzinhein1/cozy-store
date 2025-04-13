import { MdPercent } from "react-icons/md";

const DiscountInfo = () => {
  return (
    <div className="flex items-center text-sm text-teal-700 bg-green-50 border border-teal-600 px-4 py-5 rounded mt-10 max-w-fit">
      <MdPercent className="mr-2 text-lg" />
      <span className="text-gray-800">
        10% Instant Discount with Federal Bank Debit Cards on a min spend of $150. TCA
      </span>
    </div>
  );
};

export default DiscountInfo;
