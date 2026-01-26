import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  let [selectedMenu, setSelectedMenu] = useState(0);
  let [isprofileDropdownOpen, setIsprofileDropdownOpen] = useState(false);
  let [isMenuOpen, setIsMenuOpen] = useState(false);


  let handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  let handleProfileClick = () => {
    setIsprofileDropdownOpen(!isprofileDropdownOpen);
  };

  let handleLogoutBtn = () => {
    window.location.href = "https://trade-x-trading-platform-five.vercel.app/login";
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <Link to="/">
        <img src="dashboardNavLogo.jpeg" style={{ width: "60px" }} />
      </Link>
      {/* <div className="menus"> */}
      <div className={`menus ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => {
                handleMenuClick(0)
                closeMenu()
              }}
            >
              <p
                className={
                  selectedMenu === 0 ? activeMenuClass : menuClass 
                }
              >
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              style={{ textDecoration: "none" }}
              onClick={() => {
                handleMenuClick(1)
                closeMenu()
              }}
            >
              <p
                className={
                  selectedMenu === 1 ?  activeMenuClass : menuClass
                }
              >
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              style={{ textDecoration: "none" }}
              onClick={() => {
                handleMenuClick(2)
                closeMenu()
              }}
            >
              <p
                className={
                  selectedMenu === 2 ? activeMenuClass : menuClass 
                }
              >
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              style={{ textDecoration: "none" }}
              onClick={() => {
                handleMenuClick(3)
                closeMenu()
              }}
            >
              <p
                className={
                  selectedMenu === 3 ? activeMenuClass : menuClass 
                }
              >
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              style={{ textDecoration: "none" }}
              onClick={() => {
                handleMenuClick(4)
                closeMenu()
              }}
            >
              <p
                className={
                  selectedMenu === 4 ? activeMenuClass : menuClass 
                }
              >
                Funds
              </p>
            </Link>
          </li>
          {/* <li>
            <Link
              to="/apps"
              style={{ textDecoration: "none" }}
              onClick={() => {
                handleMenuClick(5)
                closeMenu()
              }}
            >
              <p
                className={
                  selectedMenu === 5 ? activeMenuClass : menuClass 
                }
              >
                Apps
              </p>
            </Link>
          </li> */}
        </ul>
        <hr className="navBorderRight"/>
        <div className="profile" onClick={handleProfileClick}>
          <Link to="/" style={{textDecoration:"none"}} onClick={() => closeMenu()}>
            <div className="avatar">ZU</div>
          </Link>
          <p className="username">USERID</p>
        </div>
      </div>
     <div className="hamburger-cont">
      <ul className="logoutBtn" onClick={handleLogoutBtn}>
         <li>
          <Link to="" style={{textDecoration:"none"}}>
              <p style={{textDecoration:"none",color:"#b23b3b"}}>
                Logout
              </p>
            </Link>
          </li>
       </ul>
       <button 
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </div>
  );
};

export default Menu;
