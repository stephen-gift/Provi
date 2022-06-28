import React from "react";
import { AiFillPrinter } from "react-icons/ai";
import { FaChartPie, FaCog, FaUserTie } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { TbFileDigit } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import logo from "../../assets/sidelogo.svg";

function Sidebar() {
  return (
    <div className="bg-siblack w-[180px] lg:w-1/4 lg:min-w-[200px] lg:max-w-[255px] h-screen fixed top-0 bottom-0 z-50">
      <div className="py-6 lg:py-8 px-4 lg:px-6 pr-6 lg:pr-12 w-full select-none">
        <img className="w-full" src={logo} alt="Logo" />
      </div>

      {/* Nav Container */}
      <div className="py-8 lg:py-12 flex flex-col h-full">
        {/* Main Navs */}
        <nav>
          <ul>
            <li>
              <NavLink
                to="/ic-dashboard"
                className="group flex gap-4 lg:gap-6 items-center py-5 pl-4 lg:pl-8 pr-2 border-l-[3px] border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-[0.08] hover:border-lighterGray"
              >
                <FaChartPie className="text-lgray shrink-0 group-hover:text-lighterGray" />
                <span className="text-lgray text-sm lg:text-base group-hover:text-lighterGray">
                  Dashboard
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/request"
                className="group flex gap-4 lg:gap-6 items-center py-5 pl-4 lg:pl-8 pr-2 border-l-[3px] border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-[0.08] hover:border-lighterGray"
              >
                <FaUserTie className="text-lgray shrink-0 group-hover:text-lighterGray" />
                <span className="text-lgray text-sm lg:text-base group-hover:text-lighterGray">
                  Request
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/printed-cards"
                className="group flex gap-4 lg:gap-6 items-center py-5 pl-4 lg:pl-8 pr-2 border-l-[3px] border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-[0.08] hover:border-lighterGray"
              >
                <AiFillPrinter className="text-lgray shrink-0 group-hover:text-lighterGray" />
                <span className="text-lgray text-sm lg:text-base group-hover:text-lighterGray">
                  Printed Cards
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reports"
                className="group flex gap-4 lg:gap-6 items-center py-5 pl-4 lg:pl-8 pr-2 border-l-[3px] border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-[0.08] hover:border-lighterGray"
              >
                <TbFileDigit className="text-lgray shrink-0 group-hover:text-lighterGray" />
                <span className="text-lgray text-sm lg:text-base group-hover:text-lighterGray">
                  Reports
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Other Navs */}
        <nav className="flex-1 flex items-center">
          <ul className="w-full">
            <li className="border-t border-t-grayScale border-opacity-10">
              <NavLink
                to="/settings"
                className="group flex gap-4 lg:gap-6 items-center py-5 pl-4 lg:pl-8 pr-2 border-l-[3px] border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-[0.08] hover:border-lighterGray"
              >
                <FaCog className="text-lgray shrink-0 group-hover:text-lighterGray" />
                <span className="text-lgray text-sm lg:text-base group-hover:text-lighterGray">
                  Settings
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                className="group flex gap-4 lg:gap-6 items-center py-5 pl-4 lg:pl-8 pr-2 border-l-[3px] border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-[0.08] hover:border-lighterGray"
              >
                <FiLogOut className="text-red-700 shrink-0" />
                <span className="text-lgray text-sm lg:text-base group-hover:text-lighterGray">
                  Logout
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
