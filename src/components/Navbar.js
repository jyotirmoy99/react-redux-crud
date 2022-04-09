import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>TODO - RR</h2>
      <ul>
        <li>
          <Link to="/">Create</Link>
        </li>
        <li>
          <Link to="/list">Todos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
