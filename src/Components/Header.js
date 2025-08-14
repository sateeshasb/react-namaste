import { LOGO_URL } from "../utils/constans";
import { useState } from "react";

const Header = () => {
  const [BtnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Conttact us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              BtnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {" "}
            {BtnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
