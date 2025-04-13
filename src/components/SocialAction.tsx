import {
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaFacebook,
} from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const SocialActions = () => (
  <div className="max-w-md flex justify-between items-center gap-36">
    <div className="flex items-center gap-2 text-md font-bold text-teal-600 cursor-pointer">
      <FiHeart className="font-bold"/>
      <span>Add to Wishlist</span>
    </div>
    <div className="flex gap-4 text-gray-800">
      <FaFacebook className="cursor-pointer hover:text-black" />
      <FaTwitter className="cursor-pointer hover:text-black" />
      <FaPinterest className="cursor-pointer hover:text-black" />
      <FaInstagram className="cursor-pointer hover:text-black" />
    </div>
  </div>
);

export default SocialActions;
