import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout-div">
      <Header></Header>
      <main className="main-div">{children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
