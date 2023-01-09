import React, { useState, useMemo } from "react";
import { useTable } from "react-table";

const sprintTable = () => {
  const columnData = [
    {
      accessor: "sprintId",
      Header: "SprintId",
    },
    {
      accessor: "time",
      Header: "Time",
    },
    {
      accessor: "sprintName",
      Header: "SprintName",
    },
    {
      accessor: "sprintDetail",
      Header: "SprintDetail",
    },
    {
      accessor: "sprintType",
      Header: "SprintType",
    },
  ];

  const columns = useMemo(() => columnData, []);
  const data = [
    {
      sprintId: "sprintId",
      time: "time",
      sprintName: "sprintName",
      sprintDetail: "sprintDetail",
      sprintType: "job",
    },
    {
      sprintId: "sprintId",
      time: "time",
      sprintName: "sprintName",
      sprintDetail: "sprintDetail",
      sprintType: "code",
    },
  ];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    //@ts-ignore
    columns,
    data,
  });
  return (
    <div>
      <table {...getTableProps}>
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr>
              {headerGroups.headers.map((columns) => (
                <th {...columns.getHeaderProps()}>{columns.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default sprintTable;
