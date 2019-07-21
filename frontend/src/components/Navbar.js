import React from "react";
import { Link } from "react-router-dom";

import "../css/Navbar.css";
import logo from "../assets/relieve_logo.png";
// test
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <span>
          <Link to={"/"}>
            <img
              className="logo"
              src={logo}
              alt=""
              width="90px"
              height="auto"
            />
          </Link>
        </span>
      </div>
      <span className="nav_boro_links">
        <Link to="/byborough/bronx">Bronx</Link>
        <Link to="/byborough/brooklyn">Brooklyn</Link>
        <Link to="/byborough/manhattan">Manhattan</Link>
        <Link to="/byborough/queens">Queens</Link>
      </span>
    </>
  );
};

export default Navbar;
