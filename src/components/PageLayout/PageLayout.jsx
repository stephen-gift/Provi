import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import Sidebar from "../Sidebar/Sidebar";

function PageLayout({ pageTitle, children }) {
  return (
    <div className="w-full min-h-screen h-full bg-ghostWhite flex relative overflow-y-auto overflow-x-hidden">
      <Sidebar />

      <div className="w-full p-5 lg:p-8 lg:pb-4 relative ml-sidebar-sm lg:ml-sidebar-lg overflow-x-hidden">
        <PageHeader pageTitle={pageTitle} />

        {children}
      </div>
    </div>
  );
}

export default PageLayout;
