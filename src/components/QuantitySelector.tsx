import { FiMinus, FiPlus } from "react-icons/fi";

interface Props {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantitySelector = ({ quantity, onIncrease, onDecrease }: Props) => (
  <div className="text-gray-700 font-semibold flex items-center border border-gray-400 rounded-sm overflow-hidden py-1">
    <button className="p-2 cursor-pointer" onClick={onDecrease}>
      <FiMinus />
    </button>
    <span className="px-4">{quantity}</span>
    <button className="p-2 cursor-pointer" onClick={onIncrease}>
      <FiPlus />
    </button>
  </div>
);

export default QuantitySelector;
