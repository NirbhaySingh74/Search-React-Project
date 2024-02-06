import { useState } from "react";
import logo from "../assets/Swiggy.png";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [isLoggedIn, setIsLogin] = useState(false);

  return (
    <div className="header">
      <div>
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact US</NavLink>
          </li>
          <li>Cart</li>
          <button onClick={() => setIsLogin(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
