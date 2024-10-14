import {
  FaUser,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaBars,
} from "react-icons/fa"; // Sử dụng react-icons

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-20 py-8 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-3xl font-bold text-gray-800">Furniro</span>
        </div>

        <nav className="hidden lg:flex space-x-8 text-gray-600">
          <a href="/" className="text-xl hover:text-black">
            Home
          </a>
          <a href="/shop" className="text-xl hover:text-black">
            Shop
          </a>
          <a href="/about" className="text-xl hover:text-black">
            About
          </a>
          <a href="/contact" className="text-xl hover:text-black">
            Contact
          </a>
        </nav>

        <div className="hidden lg:flex space-x-6 items-center text-gray-600">
          <a href="#" className="text-xl hover:text-black">
            <FaUser />
          </a>
          <a href="#" className="text-xl hover:text-black">
            <FaSearch />
          </a>
          <a href="#" className="text-xl hover:text-black">
            <FaHeart />
          </a>
          <a href="#" className="text-xl hover:text-black">
            <FaShoppingCart />
          </a>
        </div>

        {/* Mobile Menu Button (hiển thị trên mobile) */}
        <button className="lg:hidden block text-gray-600">
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Header;
