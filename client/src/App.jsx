import { Routes, Route } from "react-router-dom";

import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import ChatWidget from "./components/ChatWidget";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/orderConfirmation";
import MyOrders from "./pages/MyOrder";
import TrackOrder from "./pages/TrackOrder";
import Account from "./pages/Account";
import CustomOrder from "./pages/CustomOrder";
import CustomOrderConfirmation from "./pages/CustomOrderConfirmation";
import MyCustomOrders from "./pages/MyCustomOrders";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import PaymentCallback from "./pages/PaymentCallback";
import AdminRoute from "./components/AdminRoute";
import AdminDashboard from "./pages/AdminDashboard";
import AdminOrders from "./pages/AdminOrders";
import AdminOrderDetails from "./pages/AdminOrderDetails";
import AdminProducts from "./pages/AdminProducts";
import AdminProductDetails from "./pages/AdminProductDetails";
import AdminPayments from "./pages/AdminPayments";
import AdminProductCreate from "./pages/AdminProductCreate";
import AdminCustomOrders from "./pages/AdminCustomOrders";
import AdminCustomOrderDetails from "./pages/AdminCustomOrderDetails";
import CustomOrderDetails from "./pages/CustomOrderDetails";
import AdminInstallmentSettings from "./pages/AdminInstallmentSettings";
import AdminChat from "./components/AdminChat";
import AdminCustomer from "./pages/AdminCustomer";
import AdminInventory from "./pages/AdminInventory";
import AdminReports from "./pages/AdminReport";
function App() {
  return (
    <>
      <Navbar />
      <ChatWidget />
      <Routes>
        {/* =====================================================
            PUBLIC ROUTES
        ===================================================== */}

        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/about" element={<About />} />
        

        <Route path="/contact" element={<Contact />} />
        <Route path="/payment/callback" element={<PaymentCallback />} />
{/* "09071697982" */}
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/custom-order" element={<CustomOrder />} />

        {/* =====================================================
            PROTECTED ADMIN ROUTES
        ===================================================== */}

        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/customers" element={<AdminCustomer />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetails />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/products/:id" element={<AdminProductDetails />} />
          <Route path="/admin/products/new" element={<AdminProductCreate />} />
          <Route path="/admin/payments" element={<AdminPayments />} />
          <Route path="/admin/inventory" element={<AdminInventory />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route
            path="/admin/installment-settings"
            element={<AdminInstallmentSettings />}
          />
          <Route path="/admin/chat" element={<AdminChat />} />
          <Route
            path="/admin/custom-orders/:id"
            element={<AdminCustomOrderDetails />}
          />
          <Route path="/admin/custom-orders" element={<AdminCustomOrders />} />
        </Route>

        {/* =====================================================
            PROTECTED CUSTOMER ROUTES
        ===================================================== */}

        <Route element={<ProtectedRoute />}>
          <Route path="/checkout" element={<Checkout />} />

          <Route
            path="/order-confirmation/:orderId"
            element={<OrderConfirmation />}
          />

          <Route path="/my-orders" element={<MyOrders />} />

          <Route path="/track-order/:orderId" element={<TrackOrder />} />

          <Route path="/account" element={<Account />} />

          <Route
            path="/custom-order-confirmation/:customOrderId"
            element={<CustomOrderConfirmation />}
          />

          <Route path="/my-custom-orders" element={<MyCustomOrders />} />
          <Route path="/custom-order" element={<CustomOrder />} />
          <Route
            path="/custom-order-details/:customOrderId"
            element={<CustomOrderDetails />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
