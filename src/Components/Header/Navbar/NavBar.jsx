import React from "react";
import { NavLink } from "react-router";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/">Home </NavLink>
        <NavLink to="/login">Login</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
