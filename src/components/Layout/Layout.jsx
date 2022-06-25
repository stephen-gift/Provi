import React from "react";
import Header from "../Header/Header";
import MainNavigation from "./MainNavigation/MainNavigation";

const Layout = (props) => {
  return (
    <>
      <div>
        <Header />
        <MainNavigation />
        <main className="">{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
