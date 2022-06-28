import React, { useState, useEffect } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import StatsCard from "../../components/StatsCard/StatsCard";
import ScrolledTable, {
  ScrolledTableBody,
  ScrolledTableHead,
} from "../../components/Tables/ScrolledTable";
import PageHeader from "../../components/PageHeader/PageHeader";

function ICDashboard() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData([
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
  }, []);

  return (
    <div className="w-screen min-h-screen h-screen bg-ghostWhite flex relative overflow-y-auto overflow-x-hidden">
      <Sidebar />

      <div className="w-full p-5 lg:p-8 relative ml-sidebar-sm lg:ml-sidebar-lg">
        <PageHeader title="Dashboard" />

        <StatsCard
          data={[
            { title: "Total Request", total: "350" },
            { title: "Total Card Printed", total: "12,304" },
            { title: "Current Blank Card", total: "20,000" },
          ]}
        />

        {tableData.length > 0 && (
          <ScrolledTable>
            <ScrolledTableHead>
              <th>BRANCH</th>
              <th>BRANCH MANAGER</th>
              <th>EMAIL</th>
              <th>BRANCH ID</th>
              <th>CARD PRINTED</th>
              <th>TOTAL REQUESTED</th>
            </ScrolledTableHead>

            <ScrolledTableBody>
              {tableData?.map((row, key) => (
                <tr key={key}>
                  <td>{row.branch}</td>
                  <td>{row.branchManager}</td>
                  <td>{row.email}</td>
                  <td>{row.branchID}</td>
                  <td>{row.cardPrinted}</td>
                  <td>{row.totalRequested}</td>
                </tr>
              ))}
            </ScrolledTableBody>
          </ScrolledTable>
        )}
      </div>
    </div>
  );
}

export default ICDashboard;
