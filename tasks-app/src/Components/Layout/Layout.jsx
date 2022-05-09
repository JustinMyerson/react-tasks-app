import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";

function Layout(props) {
  return (
    <div className="layout-div">
      <Header></Header>
      <main className="main-div">{props.children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
