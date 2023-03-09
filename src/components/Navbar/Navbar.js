import React from "react";
import { Link } from "react-router-dom";

import "../styles/NavBar.css";
import Logo3 from "../../images/Logo3.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const NavBar = () => {
  return (
    <div className="nav-header">
      <img className="header-logo" src={Logo3} />

      <Link to="/home">
        <span className="header-option">Home</span>
      </Link>
      <Link to="/restaurants">
        <span className="header-option">Restaurants</span>
      </Link>

      <Link to="/login">
        <span className="header-option">Login</span>
      </Link>
      <Link to="/signup">
        <span className="header-option">Sign Up</span>
        
      </Link>

      <Link to="/cart">
        <span className="header-option">Cart</span>
        <AddShoppingCartIcon className="header-option" />
        <span className="header-option">0</span>
      </Link>
    </div>
  );
};

export default NavBar;
