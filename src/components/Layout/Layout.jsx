import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import AppBar from "../AppBar/AppBar";
import s from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <AppBar></AppBar>
      <Suspense fallback={null}>
        <div className={s.content}>
          <Outlet />
        </div>
      </Suspense>
    </>
  );
};

export default Layout;