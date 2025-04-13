import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { RiMenu5Line } from "react-icons/ri";
import { useCartStore } from "../store/useCartStore";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="border-b border-gray-300 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
      {/* Logo */}
      <Link to={"/"}>
        <h1 className="font-bold text-2xl">
          Cozy<span className="align-top text-gray-600">&reg;</span>
        </h1>
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-8 lg:space-x-10 items-center font-medium text-gray-500 uppercase">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-black" : undefined)}>
          Shop
        </NavLink>
        <NavLink to="/collective" className={({ isActive }) => (isActive ? "text-black" : undefined)}>
          Collective
        </NavLink>
        <NavLink to="/designer" className={({ isActive }) => (isActive ? "text-black" : undefined)}>
          Designer
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-black" : undefined)}>
          About us
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-black" : undefined)}>
          Contact
        </NavLink>
      </div>

      {/* Icons */}
      <div className="flex items-center text-gray-600 font-medium h-full">
        {/* Mobile menu toggle */}
        <div className="flex items-center pr-4 sm:pr-6 space-x-4 sm:space-x-6 text-lg md:hidden">
          <RiMenu5Line className="cursor-pointer text-xl" onClick={() => setMenuOpen(!menuOpen)} />
          <FiSearch className="cursor-pointer text-xl" />
        </div>

        {/* Desktop search */}
        <div className="hidden md:flex items-center pr-8 space-x-8 text-lg">
          <FiSearch className="cursor-pointer text-xl" />
        </div>

        {/* Cart */}
        <div className="pl-4 sm:pl-6 border-l border-gray-300 h-full flex items-center text-lg">
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

      {/* Mobile Dropdown Nav */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-md md:hidden z-50">
          <div className="flex flex-col px-6 py-4 space-y-4 text-gray-700 uppercase font-medium text-sm">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Shop
            </NavLink>
            <NavLink to="/collective" onClick={() => setMenuOpen(false)}>
              Collective
            </NavLink>
            <NavLink to="/designer" onClick={() => setMenuOpen(false)}>
              Designer
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About us
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
