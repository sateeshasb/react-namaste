import { LOGO_URL } from "../utils/constans";
import { useActionState, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [BtnName, setBtnName] = useState("Login");
  const useOnlineStatus = useActionState();

  return (
    <div className="flex justify-between  shadow-lg sm:bg-amber-500 lg:bg-green-500 ">
      <div className="logo-container">
        <img className="w-40 p-2" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 gap-4">
          <li className="px-4">
            Online Status:{useOnlineStatus ? "✅" : "✔️"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/About">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/Contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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
