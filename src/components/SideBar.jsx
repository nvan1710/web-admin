import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, LayoutDashboard, Home, User, Settings, LogOut } from "lucide-react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-gray-900 text-white h-screen transition-all duration-300 flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="p-4 flex items-center justify-between">
          <h1 className={`${isOpen ? "text-lg font-bold" : "hidden"}`}>Admin</h1>
          <button
            className="p-2 rounded-md bg-gray-700 hover:bg-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex flex-col gap-2 p-4">
          <NavItem icon={<LayoutDashboard size={24} />} text="Dashboard" path="/dashboard" isOpen={isOpen} />
          <NavItem icon={<Home size={24} />} text="Home" path="/home" isOpen={isOpen} />
          <NavItem icon={<User size={24} />} text="Profile" path="/profile" isOpen={isOpen} />
          <NavItem icon={<Settings size={24} />} text="Settings" path="/settings" isOpen={isOpen} />

          {/* Updated Logout Button */}
          <LogoutButton icon={<LogOut size={24} />} text="Logout" isOpen={isOpen} />
        </nav>
      </div>
    </div>
  );
};

// Component Điều hướng
const NavItem = ({ icon, text, path, isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <div
      onClick={() => navigate(path)}
      className={`flex items-center gap-4 p-2 rounded-md cursor-pointer transition-all duration-300 
        ${isActive ? "bg-gray-700 text-white" : "hover:bg-gray-800 text-gray-300"}`}
    >
      {icon}
      <span className={`${isOpen ? "block" : "hidden"}`}>{text}</span>
    </div>
  );
};

// Component Logout
const LogoutButton = ({ icon, text, isOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Xóa dữ liệu đăng nhập nếu có
    localStorage.removeItem("userToken"); // Xóa token đăng nhập (nếu có)
    sessionStorage.clear(); // Xóa session (nếu có)

    // Điều hướng về trang LoginPage.jsx
    navigate("/login");
  };

  return (
    <div
      onClick={handleLogout}
      className="flex items-center gap-4 p-2 rounded-md cursor-pointer text-white transition-all duration-300"
    >
      {icon}
      <span className={`${isOpen ? "block" : "hidden"}`}>{text}</span>
    </div>
  );
};

export default SideBar;
