import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
    <nav className="nav-nav">
      <ul className="nav-ul">
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/todos">To Do</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
