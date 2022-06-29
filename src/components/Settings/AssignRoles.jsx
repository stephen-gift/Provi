import React, { useEffect, useState } from "react";
import ScrolledTable, {
  ScrolledTableBody,
  ScrolledTableHead,
} from "../Tables/ScrolledTable";

function AssignRoles() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData([
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Global Admin",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Global Admin",
        status: "Suspended",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Global Admin",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Global Admin",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Branch Admin",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Branch Admin",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Branch Admin",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Internal Control",
        status: "Suspended",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Global Admin",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
      {
        fullName: "Modupe Akulasah",
        email: "modepef.a@prov.cgi",
        role: "Internal Control",
        status: "Active",
        branch: "Ikeja GRA Lagos, Nigeria",
      },
    ]);
  }, []);

  return (
    <div>
      <div className="relative max-w-lg mb-1">
        <input
          type="search"
          placeholder="Search by Name / Email"
          className="rounded-lg bg-brightGray py-4 px-4 lg:px-7 w-full border-0 text-sm lg:text-base"
        />

        <svg
          className="absolute right-5 top-1/2 transform -translate-y-1/2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.0004 20.9999L16.6504 16.6499"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      {tableData.length > 0 && (
        <ScrolledTable>
          <ScrolledTableHead>
            <th>Full Name</th>
            <th>Email</th>
            <th>Roles</th>
            <th>Assign Role</th>
            <th>Status</th>
            <th>Assign Branch </th>
          </ScrolledTableHead>

          <ScrolledTableBody>
            {tableData?.map((row, key) => (
              <tr key={key}>
                <td>{row.fullName}</td>
                <td>{row.email}</td>
                <td>{row.role}</td>
                <td className="text-center flex items-center justify-center">
                  <svg
                    className="cursor-pointer"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 12.9971C13 12.4448 12.5523 11.9971 12 11.9971C11.4477 11.9971 11 12.4448 11 12.9971C11 13.5494 11.4477 13.9971 12 13.9971C12.5523 13.9971 13 13.5494 13 12.9971Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 12.9971C6 12.4448 5.55228 11.9971 5 11.9971C4.44772 11.9971 4 12.4448 4 12.9971C4 13.5494 4.44772 13.9971 5 13.9971C5.55228 13.9971 6 13.5494 6 12.9971Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20 12.9971C20 12.4448 19.5523 11.9971 19 11.9971C18.4477 11.9971 18 12.4448 18 12.9971C18 13.5494 18.4477 13.9971 19 13.9971C19.5523 13.9971 20 13.5494 20 12.9971Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </td>
                <td className="items-center">
                  <span
                    className={`text-10 font-medium rounded-lg p-2 h-8 w-24 block bg-opacity-25 ${
                      row.status === "Active" ? "bg-greenSheen" : "bg-pigment"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td>{row.branch}</td>
              </tr>
            ))}
          </ScrolledTableBody>
        </ScrolledTable>
      )}
    </div>
  );
}

export default AssignRoles;
