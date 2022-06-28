import React from "react";
import { AiFillPrinter } from "react-icons/ai";
import { FaChartPie, FaCog, FaUserTie } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { TbFileDigit } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import logo from "../../assets/sidelogo.svg";

function Sidebar() {
  return (
    <div className="bg-siblack w-sidebar-sm lg:w-1/4 lg:min-w-sidebar-md lg:max-w-sidebar-lg h-screen fixed top-0 bottom-0 z-50">
      <div className="py-6 lg:py-8 px-4 lg:px-6 pr-6 lg:pr-12 w-full select-none">
        <img className="w-full" src={logo} alt="Logo" />
      </div>

      <div className="py-8 lg:py-12 flex flex-col h-full">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/ic-dashboard"
                className="group flex gap-4 lg:gap-6 items-center py-5 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <FaChartPie className="text-lgray shrink-0 group-hover:text-lavender" />
                <span className="text-lgray text-sm lg:text-base group-hover:text-lavender">
                  Dashboard
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/request"
                className="group flex gap-4 lg:gap-6 items-center py-5 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <FaUserTie className="text-lgray shrink-0 group-hover:text-lavender" />
                <span className="text-lgray text-sm lg:text-base group-hover:text-lavender">
                  Request
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/printed-cards"
                className="group flex gap-4 lg:gap-6 items-center py-5 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <AiFillPrinter className="text-lgray shrink-0 group-hover:text-lavender" />
                <span className="text-lgray text-sm lg:text-base group-hover:text-lavender">
                  Printed Cards
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reports"
                className="group flex gap-4 lg:gap-6 items-center py-5 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <TbFileDigit className="text-lgray shrink-0 group-hover:text-lavender" />
                <span className="text-lgray text-sm lg:text-base group-hover:text-lavender">
                  Reports
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <nav className="flex-1 flex items-center">
          <ul className="w-full">
            <li className="border-t border-t-platinum border-opacity-10">
              <NavLink
                to="/settings"
                className="group flex gap-4 lg:gap-6 items-center py-5 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <FaCog className="text-lgray shrink-0 group-hover:text-lavender" />
                <span className="text-lgray text-sm lg:text-base group-hover:text-lavender">
                  Settings
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                className="group flex gap-4 lg:gap-6 items-center py-5 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <FiLogOut className="text-red-700 shrink-0" />
                <span className="text-lgray text-sm lg:text-base group-hover:text-lavender">
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
