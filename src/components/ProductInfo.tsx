import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductInfo = () => (
  <section className="max-w-md">
    <h2 className="text-4xl font-semibold text-gray-800 mb-5">
      Meryl Lounge Chair
    </h2>
    <div className="flex justify-between">
      <p className="text-2xl font-semibold text-gray-800 mt-2">$149.99</p>
      <div className="flex items-center mt-2 space-x-2 text-sm text-gray-500">
        <div className="flex text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        <span>4.6 / 5.0</span>
        <span>(556)</span>
      </div>
    </div>

    <p className=" text-gray-600 text-md mt-10 leading-relaxed">
      The gently curved lines accentuated by sewn details are kind to your body
      and pleasant to look at. Also, there's a tilt and height-adjusting
      mechanism that's build to outlast years of ups and downs.
    </p>
  </section>
);

export default ProductInfo;
