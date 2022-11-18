import { IconButton } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/Action/action";

const Header = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const curentUserData = useSelector((state) => state.curentTheData.curentuser);
  //   console.log(curentUserData, "curentUserData");
  //   console.log(curentUserData[0].email, "curentUserData.email");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOutHeandler = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <>
      <header className="navbar">
        <div className="navbarLogo">
          <Link to="/dashboard">
            <img
              style={{ display: "block" }}
              src="https://www.jiomart.com/assets/version16548039193/smartweb/images/jiomart_logo_beta.svg
"
              alt="icon"
            />
          </Link>
        </div>
        {/* <TextField
          className="searchAear"
          id="outlined-basic-1"
          variant="filled"
          type="text"
          name="firstname"
          size="small"
          placeholder="search the product"
        /> */}
        <ul className="headerList">
          <li>
            <div className="userIcon">
              <AccountCircleIcon style={{ fontSize: "24px", color: "black" }} />
              <span>{curentUserData[0].email} </span>
            </div>
          </li>
          <li>
            <Link>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent="0" color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
          </li>
          <li>
            <Link className="orderBtn">My Order</Link>
          </li>
          <li>
            <div className="logoutBtn" onClick={logOutHeandler}>
              <LogoutIcon style={{ color: "white", display: "block  " }} />
            </div>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
