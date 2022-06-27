import React from "react";

function ScrolledTable({ children }) {
  return (
    <div className="py-4">
      <div
        className="table-container overflow-y-auto overflow-x-hidden  max-h-[400px] h-full w-full"
        style={{ overflowWrap: "anywhere" }}
      >
        <table className="table-auto w-full h-full rounded-lg overflow-hidden relative">
          {children}
        </table>
      </div>
    </div>
  );
}

function ScrolledTableHead({ children }) {
  return (
    <thead className="bg-buyellow text-white ">
      <tr className="scrolledTableHead">{children}</tr>
    </thead>
  );
}

function ScrolledTableBody({ children }) {
  return (
    <tbody className="text-center bg-white scrolledTableBody">{children}</tbody>
  );
}

export default ScrolledTable;
export { ScrolledTableHead, ScrolledTableBody };
