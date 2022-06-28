import React from "react";
import Notification from "../Notification/Notification";
import userImg from "../../assets/_header.png";

function PageHeader({ title }) {
  return (
    <div className="flex items-center justify-between pb-5">
      <h1 className="text-lg lg:text-2xl font-bold text-lblack">{title}</h1>

      <div className="flex items-center gap-4">
        <Notification />

        <div className="flex items-center">
          <h4 className="text-xs lg:text-sm font-poppins font-medium border-l-2 border-l-platinum border-opacity-50 px-4 py-1 lg:py-2">
            Jones Ferdinand
          </h4>

          <div className="h-8 w-8 lg:h-11 lg:w-11 rounded-full overflow-hidden border-2 p-0.5 border-platinum select-none">
            <img src={userImg} alt="Jones Ferdinand" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
