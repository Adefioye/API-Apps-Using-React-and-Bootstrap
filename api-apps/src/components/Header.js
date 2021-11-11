import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="mx-3 card">
      <ul className="nav-links">
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/images">
            Image API
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/videos">
            Video API
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
