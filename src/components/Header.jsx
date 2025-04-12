import { useState } from "react";
import { Menu, X } from "lucide-react";
import account from "../assets/account.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center w-full mx-auto">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">Admin ChessApp</span>
        </div>

       

        {/* User Profile */}
        <div className="hidden md:flex items-center gap-3">
          <img
            src={account}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border border-gray-700"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md bg-gray-700 hover:bg-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

    </header>
  );
};

// Reusable Navigation Item Component
const NavItem = ({ text }) => (
  <a href="#" className="text-lg hover:text-gray-300 transition">
    {text}
  </a>
);

export default Header;
