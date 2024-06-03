import { Outlet } from "react-router-dom";
import Header from "../partials/header/Header";
import Footer from "../partials/footer/Footer";
import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { CartContextProvider } from "../store/CartContext";
import { UserProgressContextProvider } from "../store/UserProgressContext";
import Cart from "../components/UI/Cart";
function RootLayout() {
  const [toggle, setToggle] = useState(false);
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header setToggle={setToggle} />
        <Sidebar toggleSidebar={toggle} setToggle={setToggle} />
        <Cart />
        <Outlet />
        <Footer />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}
export default RootLayout;
