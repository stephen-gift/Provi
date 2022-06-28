import React, { useState, useEffect } from "react";

import StatsCard from "../../components/StatsCard/StatsCard";
import ScrolledTable, {
  ScrolledTableBody,
  ScrolledTableHead,
} from "../../components/Tables/ScrolledTable";
import PageLayout from "../../components/PageLayout/PageLayout";

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
    <PageLayout pageTitle="Dashboard">
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
    </PageLayout>
  );
}

export default ICDashboard;
