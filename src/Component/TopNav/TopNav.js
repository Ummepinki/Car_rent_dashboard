import React from "react";
import "./TopNav.css";
const TopNav = () => {
  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="search__box">
          <span>
            <i class="ri-search-line"></i>
          </span>
          <input type="text" placeholder="search " />
          <span>
            <i class="ri-close-line"></i>
          </span>
        </div>
        <div className="top_nav-right">
          <button className="top__button">Sell a car</button>
          <div className="sandwich-button">
            <span>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
