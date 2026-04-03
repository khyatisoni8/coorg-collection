import { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">

        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold tracking-wide">
          <span className="text-green-700">Coorg</span>{" "}
          <span className="text-yellow-500">Collection</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-green-600 transition">Home</a>
          <a href="#" className="hover:text-green-600 transition">Products</a>
          <a href="#" className="hover:text-green-600 transition">About</a>
          <a href="#" className="hover:text-green-600 transition">Contact</a>
        </nav>

        {/* Search (hidden on small mobile) */}
        <div className="hidden sm:flex items-center border border-gray-300 rounded-full px-3 py-1">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none text-sm px-2 w-24 md:w-40"
          />
          <span className="text-yellow-500">🔍</span>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-5 text-xl text-gray-700">
          <FaUser className="cursor-pointer hover:text-green-600" />
          <FaShoppingCart className="cursor-pointer hover:text-green-600" />
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t flex flex-col items-center gap-4 py-4 text-gray-700 font-medium">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">Products</a>
          <a href="#" className="hover:text-green-600">About</a>
          <a href="#" className="hover:text-green-600">Contact</a>

          <div className="flex gap-6 text-xl pt-2">
            <FaUser className="cursor-pointer hover:text-green-600" />
            <FaShoppingCart className="cursor-pointer hover:text-green-600" />
          </div>
        </div>
      )}

      {/* Accent line */}
      <div className="h-1 bg-gradient-to-r from-yellow-300 to-green-300"></div>

    </header>
  );
}

export default Header;