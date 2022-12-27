import React from "react";
import { Outlet } from "react-router-dom";
import NavbarLeft from "../../component/Admin/NavbarLeft/NavbarLeft";

const Admin = () => {
  return (
    <div className="sb-nav-fixed">
      <div id="layoutSidenav">
        <NavbarLeft />
        <div id="layoutSidenav_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
