import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/">Home </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
