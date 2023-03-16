import React, { useState } from "react";
import { Link } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

import "../styles/NavBar.css";
import Logo3 from "../../images/Logo3.png";




// import PersonIcon from "@mui/icons-material/Person";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";




const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [logged, setLogged] = useState(true);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="nav-header">
      <Link to="/home">
        <img className="header-logo" src={Logo3} />
      </Link>
      <div className="nav-left">
        <Link to="/restaurants">
          <span className="header-option">Restaurants</span>
        </Link>
      </div>
      <div className="header-search">
        <input className="header-search-feild" input type="text"></input>
        <SearchIcon className="search-icon"></SearchIcon>
      </div>
      <div className="header-nav">
        <div className="nav-right">
          <div className="header-option">
            <Link to="/cart">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={1} color="primary">
                  <ShoppingCartIcon style={{ color: "black" }} />
                </StyledBadge>
              </IconButton>
            </Link>
          </div>
          <Link to="/login">
            <div className="header-option1">
              <AccountCircleIcon />
              <span>Sign In</span>
            </div>
          </Link>
          </div>
      </div>
    </div>
  );
};

export default NavBar;












          {/* <div className="header-option"> */}
          {/* <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/login">
              {" "}
              <MenuItem
                style={{
                  fontWeight: "bold",
                  color: "black",
                  textDecoration: "none",
                }}
                onClick={handleClose}
              >
                Login
              </MenuItem>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/signup">
              <MenuItem
                style={{
                  fontWeight: "bold",
                  color: "black",
                  textDecoration: "none",
                }}
                onClick={handleClose}
              >
                Sign Up
              </MenuItem>{" "}
            </Link>
           
              <MenuItem
                style={{
                  fontWeight: "bold",
                  color: "black",
                  textDecoration: "none",
                }}
                onClick={(handleClose)}
              >
                Logout
              </MenuItem>
            
          </Menu> */}

          {/* </div> */}
       
