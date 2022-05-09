import React from "react";
import Nav from "../Nav/Nav";

import "./Header.css";

function Header() {
  return (
    <div className="header-div">
      <h1 className="header-title">Justin's To-Do List</h1>
      <Nav></Nav>
    </div>
  );
}

export default Header;
