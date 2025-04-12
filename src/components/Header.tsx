import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { RiMenu5Line } from "react-icons/ri";
import { useCartStore } from "../store/useCartStore";

function Header() {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="flex justify-between items-center border-b border-gray-300 px-8 h-16">
      {/* Logo */}
      <Link to={"/"}>
        <h1 className="font-bold text-2xl">
          Cozy<span className="align-top text-gray-600">&reg;</span>
        </h1>
      </Link>

      {/* Nav Links */}
      <div className="flex space-x-10 items-center font-medium text-gray-500 uppercase">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-black" : undefined)}
        >
          Shop
        </NavLink>
        <NavLink
          to={"/collective"}
          className={({ isActive }) => (isActive ? "text-black" : undefined)}
        >
          Collective
        </NavLink>
        <NavLink
          to={"/designer"}
          className={({ isActive }) => (isActive ? "text-black" : undefined)}
        >
          Designer
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "text-black" : undefined)}
        >
          About us
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? "text-black" : undefined)}
        >
          Contact
        </NavLink>
      </div>

      {/* Menu, Search, and Cart with Icons */}
      <div className="flex items-center text-gray-600 font-medium h-full">
        <div className="flex items-center pr-8 space-x-8 text-lg">
          <RiMenu5Line className="cursor-pointer text-xl" />
          <FiSearch className="cursor-pointer text-xl" />
        </div>
        <div className="pl-8 border-l border-gray-300 h-full flex items-center text-lg">
          <NavLink to="/cart">
            <div className="relative">
              <FiShoppingCart className="cursor-pointer transform -scale-x-100 text-xl" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
