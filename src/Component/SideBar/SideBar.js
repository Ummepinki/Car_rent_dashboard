import React from "react";
import { NavLink } from "react-router-dom";
import navLink from "../../assets/data/navLink";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>
          <span>
            <i class="ri-car-line"></i>AUTO WORLD
          </span>
        </h2>
      </div>
      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLink.map((item, index) => (
              <li className="nav__item">
                <NavLink to={item.path}></NavLink>
                <span>
                  <i className={item.icon}></i>
                </span>
                {item.display}
                <i class="ri-add-line"></i>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar__bottom">
          <p>Found car:12324</p>
          <button className="bottom__button">Show</button>
          <span>
            <i class="ri-close-line"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
