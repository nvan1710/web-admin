import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Home from "./components/Home";
import LoginPage from "./pages/LoginPage"; // Import trang Login

function App() {
  return (
    <Router>
      <Routes>
        {/* Route cho trang login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Route chính với HomePage làm layout */}
        <Route path="/" element={<HomePage />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="home" element={<Home />} />
        </Route>

        {/* Route mặc định nếu đường dẫn không hợp lệ */}
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
