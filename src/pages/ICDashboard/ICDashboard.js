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
    <div className="w-screen min-h-screen h-screen bg-bggray flex relative overflow-y-auto overflow-x-hidden">
      {/* Sidebar */}
      {/* overflow-y-auto no-scrollbar */}
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
      <div className="w-full p-5 lg:p-8 relative ml-[180px] lg:ml-[255px]">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-5">
          {/* Page Title */}
          <h1 className="text-lg lg:text-2xl font-bold text-lblack">
            Dashboard
          </h1>

          {/* TopLeft Bar */}
          <div className="flex items-center gap-4">
            {/* Notification Icon */}
            <div className="relative">
              {/* Yellow Dot */}
              <div className="absolute right-1 top-0.5 w-1.5 h-1.5 lg:w-2 lg:h-2  select-none pointer-events-none rounded-full bg-buyellow border-[1.5px] border-bggray"></div>
              <IoIosNotifications className="text-lg lg:text-2xl text-grayShade cursor-pointer" />
            </div>

            {/* User Info */}
            <div className="flex items-center">
              <h4 className="text-xs lg:text-sm font-semibold border-l-2 border-l-grayScale border-opacity-50 px-4 py-1 lg:py-2">
                Jones Ferdinand
              </h4>

              <div className="h-8 w-8 lg:h-11 lg:w-11 rounded-full overflow-hidden border-2 p-0.5 border-grayScale select-none">
                <img src={userImg} alt="Jones Ferdinand" className="w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="my-12 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          <div className="group bg-white rounded-lg border border-grayScale hover:border-buyellow cursor-pointer flex items-center justify-center gap-3 flex-col p-2 min-h-[130px] transition ease-out duration-300">
            <h3 className="text-center lg:text-xl font-semibold text-lgray group-hover:text-buyellow transition ease-out duration-200">
              Total Request
            </h3>
            <span className="text-xl lg:text-3xl font-bold text-lblack group-hover:text-buyellow transition ease-out duration-200">
              350
            </span>
          </div>
          <div className="group bg-white rounded-lg border border-grayScale hover:border-buyellow cursor-pointer flex items-center justify-center gap-3 flex-col p-2 min-h-[130px] transition ease-out duration-300">
            <h3 className="ttext-center lg:text-xl font-semibold text-lgray group-hover:text-buyellow transition ease-out duration-200">
              Total Card Printed
            </h3>
            <span className="text-xl lg:text-3xl font-bold text-lblack group-hover:text-buyellow transition ease-out duration-200">
              12,304
            </span>
          </div>

          <div className="group bg-white rounded-lg border border-grayScale hover:border-buyellow cursor-pointer flex items-center justify-center gap-3 flex-col p-2 min-h-[130px] transition ease-out duration-300">
            <h3 className="ttext-center lg:text-xl font-semibold text-lgray group-hover:text-buyellow transition ease-out duration-200">
              Current Blank Card
            </h3>
            <span className="text-xl lg:text-3xl font-bold text-lblack group-hover:text-buyellow transition ease-out duration-200">
              20,000
            </span>
          </div>
        </div>

        {/* Table */}
        <div
          className="py-4 overflow-y-auto overflow-x-hidden  max-h-[400px] h-full w-full"
          style={{
            overflowWrap: "anywhere",
          }}
        >
          <table className="table-auto w-full h-full rounded-lg overflow-hidden relative">
            <thead className="bg-buyellow text-white ">
              <tr className="">
                <th className="p-2 lg:px-4 lg:py-3 font-bold text-sm text-white sticky top-[1px]">
                  BRANCH
                </th>
                <th className="p-2 lg:px-4 lg:py-3 font-bold text-sm text-white sticky top-[1px]">
                  BRANCH MANAGER
                </th>
                <th className="p-2 lg:px-4 lg:py-3 font-bold text-sm text-white sticky top-[1px]">
                  EMAIL
                </th>
                <th className="p-2 lg:px-4 lg:py-3 font-bold text-sm text-white sticky top-[1px]">
                  BRANCH ID
                </th>
                <th className="p-2 lg:px-4 lg:py-3 font-bold text-sm text-white sticky top-[1px]">
                  CARD PRINTED
                </th>
                <th className="p-2 lg:px-4 lg:py-3 font-bold text-sm text-white sticky top-[1px]">
                  TOTAL REQUESTED
                </th>
              </tr>
            </thead>
            <tbody className="text-center bg-white">
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
              <tr>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Ikeja GRA Lagos
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  Modupe Femi Akulasah
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  modepef.a@providus.cgi
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  #33BB3445AC
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  405
                </td>
                <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                  200
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ICDashboard;
