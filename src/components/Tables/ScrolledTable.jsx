import React from "react";

function ScrolledTable({ children }) {
  return (
    <div className="py-4">
      <div
        className="table-container overflow-auto max-h-table-height h-fit w-full"
        style={{ overflowWrap: "anywhere" }}
      >
        <table className="table-auto w-full">{children}</table>
      </div>
    </div>
  );
}

function ScrolledTableHead({ children }) {
  return (
    <thead className="text-white sticky top-0 z-30">
      <tr className="scrolledTableHead">{children}</tr>
    </thead>
  );
}

function ScrolledTableBody({ children }) {
  return (
    <tbody className="scrolledTableBody text-center bg-white">{children}</tbody>
  );
}

export default ScrolledTable;
export { ScrolledTableHead, ScrolledTableBody };
