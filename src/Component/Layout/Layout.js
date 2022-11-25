import React from "react";
import Router from "../../routes/Router";
import SideBar from "../SideBar/SideBar";
import TopNav from "../TopNav/TopNav";

const Layout = () => {
  return (
    <div>
      <SideBar />
      <div className="main__layout">
        <TopNav />
        <div className="content">
          <Router />
        </div>
      </div>
    </div>
  );
};

export default Layout;
