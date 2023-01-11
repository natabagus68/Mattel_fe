import React from "react";
import { Link } from "react-router-dom";
import { EyeIcon, PenIcon, TrashIcon } from "../../common/components/icons";
import { Input } from "../../common/components/index.js";
import { Table } from "../../common/components/table/Table";
import { useGetEmployeesQuery } from "./employeesApiSlice";

export const DataEmployee = () => {
  const {
    data: employees = {},
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetEmployeesQuery();
  return (
    <>
      <div className="flex gap-2 font-body text-gray-700 items-center mb-[27px]">
        <Table.ShowFilter />
        <div className="ml-auto">
          <Input placeholder="search..." />
        </div>
      </div>
      {isLoading && "Loading..."}
      {isSuccess && "isSuccess..."}
      {isError && "isError..."}
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>NPK</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Position</Table.Th>
            <Table.Th>Division</Table.Th>
            <Table.Th order={false}>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <tbody>
          {employees.data?.map((item) => (
            <Table.Tr>
              <Table.Td className="whitespace-nowrap">{item.name}</Table.Td>
              <Table.Td className="whitespace-nowrap">{item.npk}</Table.Td>
              <Table.Td className="whitespace-nowrap">{item.email}</Table.Td>
              <Table.Td className="whitespace-nowrap">{item.position}</Table.Td>
              <Table.Td className="whitespace-nowrap">{item.division}</Table.Td>
              <Table.Td className="whitespace-nowrap">
                <div className="flex gap-2">
                  <Link
                    to={`${item.id}`}
                    className="bg-blue-500 rounded text-white p-1 flex items-center justify-center"
                  >
                    <EyeIcon />
                  </Link>
                  <button className="bg-orange-500 rounded text-white p-1 flex items-center justify-center">
                    <PenIcon />
                  </button>
                  <button className="bg-red-500 rounded text-red-50 p-1 flex items-center justify-center">
                    <TrashIcon />
                  </button>
                </div>
              </Table.Td>
            </Table.Tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
