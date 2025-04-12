import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import { FaStar, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useCartStore } from "../store/useCartStore";

const ProductDetail = () => {
  const thumbnails = [
    "/lounge-chair.webp",
    "/lounge-chair 2.jpg",
    "/lounge-chair 3.jpg",
    "/lounge-chair 4.png",
    "/lounge-chair 5.webp",
  ];

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(thumbnails[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const product = {
    id: 1,
    name: "Meryl Lounge Chair",
    price: 149.99,
    image: selectedImage,
    quantity,
  };

  const resetCart = useCartStore((state) => state.resetCart);

  useEffect(() => {
    // Clear cart on page reload
    resetCart();
  }, []);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleThumbnailClick = (src: string, index: number) => {
    setSelectedImage(src);
    setActiveIndex(index);
  };

  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    });

    // Log updated Zustand cart state
    const updatedCart = useCartStore.getState().cart;
    console.log("Cart after adding:", updatedCart);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10 flex">
      {/* Left Content */}
      <div className="max-w-md relative mt-14">
        <h2 className="text-4xl font-bold mb-5">Meryl Lounge Chair</h2>
        <div className="flex justify-between">
          <div>
            <p className="text-2xl font-semibold mt-2">$149.99</p>
          </div>
          <div className="flex items-center mt-2 space-x-2 text-sm text-gray-500">
            <div className="flex text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span>4.6 / 5.0</span>
            <span>(556)</span>
          </div>
        </div>

        {/* Description */}
        <p className=" text-gray-600 mt-9 leading-relaxed">
          The gently curved lines accentuated by sewn details are kind to your
          body and pleasant to look at. Also,there's a tilt and height-adjusting
          mechanism that's build to outlast years of ups and downs.
        </p>

        {/* Quantity & Add to Cart */}
        <div className="mt-6 flex items-center gap-4">
          <div className="text-gray-700 font-semibold flex items-center border border-gray-400 rounded-sm overflow-hidden py-1">
            <button className="p-2 cursor-pointer" onClick={handleDecrease}>
              <FiMinus />
            </button>
            <span className="px-4">{quantity}</span>
            <button className="p-2 cursor-pointer" onClick={handleIncrease}>
              <FiPlus />
            </button>
          </div>
          <button
            className="bg-teal-600 text-white px-6 py-2 rounded-sm hover:bg-teal-700"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>

        {/* Shipping Info */}
        <p className="text-sm text-gray-600 mt-3">
          Free 3-5 day shipping · Tool-free assembly · 30-day trial
        </p>

        <div className="absolute -bottom-10 w-full flex justify-between items-center">
          {/* Wishlist */}
          <div className="flex items-center gap-2 text-sm text-green-600 cursor-pointer">
            <FiHeart />
            <span>Add to Wishlist</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-500">
            <FaFacebookF className="cursor-pointer hover:text-black" />
            <FaTwitter className="cursor-pointer hover:text-black" />
            <FaInstagram className="cursor-pointer hover:text-black" />
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="ml-auto">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="max-w-xs mx-auto h-80 object-cover rounded-sm"
        />

        {/* Slide Number */}
        <p className="text-lg font-bold mt-8">
          <span className="text-black text-2xl">{`0${activeIndex + 1}`}</span>
          <span className="text-gray-400 text-lg">{` / 0${thumbnails.length}`}</span>
        </p>

        {/* Image Preview Thumbnails */}
        <div className="flex justify-center mt-2 gap-3">
          {thumbnails.map((src, idx) => (
            <div
              key={idx}
              className={`border-2 ${
                idx === activeIndex ? "border-green-500" : "border-transparent"
              } p-1 rounded-md cursor-pointer`}
              onClick={() => handleThumbnailClick(src, idx)}
            >
              <img
                src={src}
                alt={`Preview ${idx}`}
                className="w-16 h-16 object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
