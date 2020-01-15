import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

import 'materialize-css/dist/css/materialize.min.css'

const Navbar = () => {
  const dropDown = () => {
    const searchAP = document.querySelector(".searched");
    searchAP.classList.toggle("openSearch");
  };

  const togglenav = () => {
    const navi = document.querySelector(".navigation");
    navi.classList.toggle("open-nav");
  };
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">Movies/tv/</Link>
        </div>
        <div className="navigation">
          <ul>
            <li onClick={togglenav}>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>

            <li onClick={togglenav}>
              <NavLink to="/tv-shows">Tv-shows</NavLink>
            </li>
          </ul>
        </div>
        
    

        <div className="bars" onClick={togglenav}>
          <i className="fa fa-bars" />
        </div>
      </div>
      <div className="overlay" onClick={dropDown} />
    </>
  );
};

export default Navbar;
