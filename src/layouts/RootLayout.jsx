import { Outlet } from "react-router-dom";
import Header from "../partials/header/Header";
import Footer from "../partials/footer/Footer";
import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
function RootLayout() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Header setToggle={setToggle} />
      <Sidebar toggleSidebar={toggle} setToggle={setToggle} />
      <Outlet />
      <Footer />
    </>
  );
}
export default RootLayout;
