import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Home from "../components/Home";
import Profile from "../components/Profile";
import Dashboard from "../components/Dashboard";

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Header */}
      <Header />

      {/* Main Content: Sidebar + Page Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <SideBar />

        {/* Page Content */}
        <div className="flex-1 p-6 bg-gray-100 overflow-auto">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Home />} /> {/* Default to Home */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
