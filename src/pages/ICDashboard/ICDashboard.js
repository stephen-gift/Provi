import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/sidelogo.svg";
import userImg from "../../assets/_header.png";
import { FaChartPie, FaCog, FaUserTie } from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";
import { TbFileDigit } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";

function ICDashboard() {
  return (
    <div className="w-full min-h-screen bg-bggray flex relative">
      {/* Sidebar */}
      {/* overflow-y-auto no-scrollbar */}
      <div className="bg-siblack w-1/4 min-w-[200px] max-w-[255px] h-screen sticky top-0">
        <div className="py-8 px-6 pr-12 w-full select-none">
          <img className="w-full" src={logo} alt="Logo" />
        </div>

        {/* Nav Container */}
        <div className="py-12 flex flex-col h-full">
          {/* Main Navs */}
          <nav>
            <ul>
              <li>
                <NavLink to="/ic-dashboard" className="nav">
                  <FaChartPie />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/request" className="nav">
                  <FaUserTie />
                  <span>Request</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/printed-cards" className="nav">
                  <AiFillPrinter />
                  <span>Printed Cards</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/reports" className="nav">
                  <TbFileDigit />
                  <span>Reports</span>
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Other Navs */}
          <nav className="flex-1 flex items-center">
            <ul className="w-full">
              <li className="border-t border-t-grayScale border-opacity-10">
                <NavLink to="/settings" className="nav">
                  <FaCog />
                  <span>Settings</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/logout" className="nav">
                  <FiLogOut className="logout-btn" />
                  <span>Logout</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Body */}
      <div className="w-full p-8 ">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          {/* Page Title */}
          <h1 className="text-2xl font-bold text-lblack">Dashboard</h1>

          {/* TopLeft Bar */}
          <div className="flex items-center gap-4">
            {/* Notification */}
            <div>
              <IoIosNotifications className="text-2xl" />
            </div>

            {/* User Info */}
            <div className="flex items-center gap-4">
              <h4 className="text-sm font-semibold border-l-2 border-l-grayScale border-opacity-50 pl-4 py-2">
                Jones Ferdinand
              </h4>

              <div className="h-11 w-11 rounded-full overflow-hidden border-2 p-0.5 border-grayScale">
                <img src={userImg} alt="Jones Ferdinand" className="w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}

        {/* Table */}
      </div>
    </div>
  );
}

export default ICDashboard;
