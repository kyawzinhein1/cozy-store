import { FiMinus, FiPlus } from "react-icons/fi";
import { useCartStore } from "../../store/useCartStore";

type Props = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

const CartItem = ({ id, name, image, price, quantity }: Props) => {
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="flex items-start gap-6 border-b border-gray-300 pb-6">
      <img src={image} alt={name} className="w-24 h-24 object-contain" />
      <div className="flex-1">
        <h3 className="font-bold text-2xl text-gray-800 mb-3">{name}</h3>
        <p className="text-lg font-semibold text-gray-700 mb-4">
          <span className="text-gray-400 pe-2">Color</span> Lysed bright green
        </p>
        <div className="flex items-center space-x-4">
          <div className="text-gray-700 font-semibold flex items-center border border-gray-400 rounded-sm overflow-hidden py-1">
            <button className="p-2 cursor-pointer" onClick={() => decreaseQty(id)}>
              <FiMinus />
            </button>
            <span className="px-4">{quantity}</span>
            <button className="p-2 cursor-pointer" onClick={() => increaseQty(id)}>
              <FiPlus />
            </button>
          </div>
          <button
            className="text-red-500 text-sm cursor-pointer"
            onClick={() => removeFromCart(id)}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="text-right font-semibold">${(price * quantity).toFixed(2)}</div>
    </div>
  );
};

export default CartItem;
