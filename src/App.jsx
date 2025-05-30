import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import { AppointmentPage } from "./pages/AppointmentPage";
import DashboardPage from "./pages/DashboardPage";
import ForgotPassword from "./pages/ForgotPassword";
import InventoryPage from "./pages/InventoryPage";
import LoginPage from "./pages/LoginPage";
import ManageAccountPage from "./pages/ManageAccountPage";
import ManageOrdersPage from "./pages/ManageOrdersPage";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUpPage";
import ProductPage from "./pages/Ecommerce/ProductPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="appointments" element={<AppointmentPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="manage-accounts" element={<ManageAccountPage />} />
          <Route path="manage-orders" element={<ManageOrdersPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="products" element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
