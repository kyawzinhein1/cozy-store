import { useEffect, useState } from "react";
import { useCartStore } from "../store/useCartStore";
import { useCheckoutStore } from "../store/useCheckoutStore";
import ProductInfo from "./ProductInfo";
import QuantitySelector from "./QuantitySelector";
import SocialActions from "./SocialAction";
import ThumbnailGallery from "./ThumbnailGallery";

const ProductDetail = () => {
  const thumbnails = [
    "/lounge-chair.webp",
    "/lounge-chair 5.webp",
    "/lounge-chair 2.jpg",
    "/lounge-chair 3.jpg",
    "/lounge-chair 4.png",
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

  const resetCart = useCartStore((state) => state.removeFromCart);
  const clearInfo = useCheckoutStore((state) => state.clearInfo);

  useEffect(() => {
    resetCart(product.id);
    clearInfo();
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
  };

  return (
    <section className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-2 gap-16">
      {/* Left Column */}
      <div className="flex flex-col justify-between">
        <div className="mt-14">
          <ProductInfo />

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 mt-6">
            <QuantitySelector
              quantity={quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <button
              className="bg-teal-600 text-white px-6 py-2 rounded-sm hover:bg-teal-700"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

          {/* Shipping Info */}
          <p className="text-sm text-gray-600 mt-3">
            Free 3–5 day shipping · Tool-free assembly · 30-day trial
          </p>
        </div>

        {/* Social & Wishlist */}
        <div className="mt-10">
          <SocialActions />
        </div>
      </div>

      {/* Right Column */}
      <div className="ml-auto">
        <div className="flex flex-col items-start justify-start">
          {/* Product Image */}
          <img
            src={selectedImage}
            alt="Selected Product"
            className="w-[350px] h-[350px] object-contain rounded-sm"
          />

          {/* Slide indicator */}
          <div className="mt-6">
            <p className="text-lg font-bold flex items-center gap-1">
              <span className="text-gray-800 text-2xl">{`0${
                activeIndex + 1
              }`}</span>
              <span className="text-gray-400 text-lg">{`/ 0${thumbnails.length}`}</span>
            </p>
          </div>

          {/* Thumbnail Gallery */}
          <div className="mt-3">
            <ThumbnailGallery
              thumbnails={thumbnails}
              activeIndex={activeIndex}
              onClick={handleThumbnailClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
