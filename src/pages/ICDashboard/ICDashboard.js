import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/sidelogo.svg";
import userImg from "../../assets/_header.png";
import { FaChartPie, FaCog, FaUserTie } from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";
import { TbFileDigit } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";

function ICDashboard() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [data, setData] = useState([
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
    {
      branch: "Ikeja GRA Lagos",
      branchManager: "Modupe Femi Akulasah",
      email: "modepef.a@providus.cgi",
      branchID: "#33BB3445AC",
      cardPrinted: 405,
      totalRequested: 200,
    },
  ]);
  return (
    <div className="w-screen min-h-screen h-screen bg-bggray flex relative overflow-y-auto overflow-x-hidden">
      {/* Sidebar */}
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
            <div className="relative">
              {/* Notification Icon */}
              <div
                className="relative"
                onClick={() =>
                  setShowNotifications((prevStatus) => !prevStatus)
                }
              >
                {/* Yellow Dot */}
                <div className="absolute right-1 top-0.5 w-1.5 h-1.5 lg:w-2 lg:h-2  select-none pointer-events-none rounded-full bg-buyellow border-[1.5px] border-bggray"></div>
                <IoIosNotifications className="text-lg lg:text-2xl text-grayShade cursor-pointer" />
              </div>

              {/* Notification Display */}
              {showNotifications && (
                <div className="absolute right-full top-4 z-50 flex flex-col bg-white shadow-md rounded-[10px] w-56 max-h-72 py-3 px-2">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h6 className="text-xs font-bold">Notifications</h6>
                    <span className="text-[8px] text-buyellow font-semibold underline cursor-pointer">
                      Mark all as read
                    </span>
                  </div>

                  {/* Filter Section */}
                  <div className="mt-3 border-b">
                    <div className="flex gap-1 items-center justify-start border-b-2 border-black w-fit p-1">
                      <span className="font-bold text-[10px]">All</span>
                      <span className="bg-buyellow text-white text-[10px] p-0.5 rounded-md">
                        15
                      </span>
                    </div>
                  </div>

                  {/* Notification Lists */}
                  <ul className="flex-1 overflow-y-auto">
                    <li
                      className="border-b pt-2 pb-1 text-[10px] font-semibold cursor-pointer hover:font-bold transition ease-linear"
                      onClick={() => setShowNotifications(false)}
                    >
                      Branch <span className="text-buyellow">#22341cd</span>{" "}
                      requested for 100 blank card.
                    </li>
                    <li
                      className="border-b pt-2 pb-1 text-[10px] font-semibold cursor-pointer hover:font-bold transition ease-linear"
                      onClick={() => setShowNotifications(false)}
                    >
                      Branch <span className="text-buyellow">#22341cd</span>{" "}
                      requested for 100 blank card.
                    </li>
                    <li
                      className="border-b pt-2 pb-1 text-[10px] font-semibold cursor-pointer hover:font-bold transition ease-linear"
                      onClick={() => setShowNotifications(false)}
                    >
                      Branch <span className="text-buyellow">#22341cd</span>{" "}
                      requested for 100 blank card.
                    </li>
                    <li
                      className="border-b pt-2 pb-1 text-[10px] font-semibold cursor-pointer hover:font-bold transition ease-linear"
                      onClick={() => setShowNotifications(false)}
                    >
                      Branch <span className="text-buyellow">#22341cd</span>{" "}
                      requested for 100 blank card.
                    </li>
                    <li
                      className="border-b pt-2 pb-1 text-[10px] font-semibold cursor-pointer hover:font-bold transition ease-linear"
                      onClick={() => setShowNotifications(false)}
                    >
                      Branch <span className="text-buyellow">#22341cd</span>{" "}
                      requested for 100 blank card.
                    </li>
                    <li
                      className="border-b pt-2 pb-1 text-[10px] font-semibold cursor-pointer hover:font-bold transition ease-linear"
                      onClick={() => setShowNotifications(false)}
                    >
                      Branch <span className="text-buyellow">#22341cd</span>{" "}
                      requested for 100 blank card.
                    </li>
                    <li
                      className="border-b pt-2 pb-1 text-[10px] font-semibold cursor-pointer hover:font-bold transition ease-linear"
                      onClick={() => setShowNotifications(false)}
                    >
                      Branch <span className="text-buyellow">#22341cd</span>{" "}
                      requested for 100 blank card.
                    </li>
                    <li
                      className="border-b pt-2 pb-1 text-[10px] font-semibold cursor-pointer hover:font-bold transition ease-linear"
                      onClick={() => setShowNotifications(false)}
                    >
                      Branch <span className="text-buyellow">#22341cd</span>{" "}
                      requested for 100 blank card.
                    </li>
                    <li
                      className="border-b pt-2 pb-1 text-[10px] font-semibold cursor-pointer hover:font-bold transition ease-linear"
                      onClick={() => setShowNotifications(false)}
                    >
                      Branch <span className="text-buyellow">#22341cd</span>{" "}
                      requested for 100 blank card.
                    </li>
                    <li
                      className="border-b pt-2 pb-1 text-[10px] font-semibold cursor-pointer hover:font-bold transition ease-linear"
                      onClick={() => setShowNotifications(false)}
                    >
                      Branch <span className="text-buyellow">#22341cd</span>{" "}
                      requested for 100 blank card.
                    </li>
                    <li
                      className="border-b pt-2 pb-1 text-[10px] font-semibold cursor-pointer hover:font-bold transition ease-linear"
                      onClick={() => setShowNotifications(false)}
                    >
                      Branch <span className="text-buyellow">#22341cd</span>{" "}
                      requested for 100 blank card.
                    </li>
                    <li
                      className="border-b pt-2 pb-1 text-[10px] font-semibold cursor-pointer hover:font-bold transition ease-linear"
                      onClick={() => setShowNotifications(false)}
                    >
                      Branch <span className="text-buyellow">#22341cd</span>{" "}
                      requested for 100 blank card.
                    </li>
                    <li
                      className="border-b pt-2 pb-1 text-[10px] font-semibold cursor-pointer hover:font-bold transition ease-linear"
                      onClick={() => setShowNotifications(false)}
                    >
                      Branch <span className="text-buyellow">#22341cd</span>{" "}
                      requested for 100 blank card.
                    </li>
                    <li
                      className="border-b pt-2 pb-1 text-[10px] font-semibold cursor-pointer hover:font-bold transition ease-linear"
                      onClick={() => setShowNotifications(false)}
                    >
                      Branch <span className="text-buyellow">#22341cd</span>{" "}
                      requested for 100 blank card.
                    </li>
                    <li
                      className="border-b pt-2 pb-1 text-[10px] font-semibold cursor-pointer hover:font-bold transition ease-linear"
                      onClick={() => setShowNotifications(false)}
                    >
                      Branch <span className="text-buyellow">#22341cd</span>{" "}
                      requested for 100 blank card.
                    </li>
                  </ul>
                </div>
              )}
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
        <div className="py-4">
          <div
            className="table-container overflow-y-auto overflow-x-hidden  max-h-[400px] h-full w-full"
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
                {data.map((row, key) => (
                  <tr key={key}>
                    <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                      {row.branch}
                    </td>
                    <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                      {row.branchManager}
                    </td>
                    <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                      {row.email}
                    </td>
                    <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                      {row.branchID}
                    </td>
                    <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                      {row.cardPrinted}
                    </td>
                    <td className="p-2 lg:px-4 lg:py-3 text-sm font-semibold">
                      {row.totalRequested}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ICDashboard;
