import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import Sidebar from "../Sidebar/Sidebar";

function PageLayout({ pageTitle, children }) {
  return (
    <div className="w-screen min-h-screen h-screen bg-ghostWhite flex relative overflow-y-auto overflow-x-hidden">
      <Sidebar />

      <div className="w-full p-5 lg:p-8 relative ml-sidebar-sm lg:ml-sidebar-lg">
        <PageHeader pageTitle={pageTitle} />

        {children}
      </div>
    </div>
  );
}

export default PageLayout;
