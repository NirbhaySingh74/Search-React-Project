import { useState } from "react";
import logo from "../assets/Swiggy.png";
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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
