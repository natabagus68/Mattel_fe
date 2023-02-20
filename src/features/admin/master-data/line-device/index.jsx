import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../../../common/components/index.js";
import { config } from "../../../../common/utils/index.js";
import { Table } from "../../../../common/components/table/Table.jsx";
import { Thead } from "../../../../common/components/table/Thead.jsx";
import { Tr } from "../../../../common/components/table/Tr.jsx";
import { Td } from "../../../../common/components/table/Td.jsx";
import { EyeIcon } from "../../../../common/components/icons/index.js";
import {
  DeleteButton,
  EditButton,
} from "../../../../common/components/button/index.js";
import {
  useDeleteLineDeviceMutation,
  useGetLineDevicesQuery,
} from "../../../../app/services/lineDeviceService.js";

export default () => {
  const [page, setPage] = useState(1);
  const [q, setQ] = useState("");

  const navigate = useNavigate();

  const { data: lineDevices = { data: [] }, refetch } = useGetLineDevicesQuery({
    q: q,
    limit: 10,
    page: 1,
  });
  const [deleteDevice, _] = useDeleteLineDeviceMutation();

  useEffect(() => {
    refetch();
  }, [page, q]);

  const pagination = () => {
    let arr = [];
    for (let i = 0; i < lineDevices.totalPage; i++) {
      arr.push(
        <button
          disabled={page === i + 1}
          onClick={() => {
            setPage(i + 1);
          }}
        >
          <li
            className={`px-[12px] py-[8px] border border-neutral-100 ${
              i + 1 === page
                ? "bg-graphite-500 text-white-lightest"
                : "text-neutral-500"
            }`}
            key={i}
          >
            {i + 1}
          </li>
        </button>
      );
    }
    return arr;
  };

  return (
    <>
      <div className="bg-white-lightest px-[35px] py-[48px] rounded-[8px] shadow-[0_0_24px_rgba(12,47,57,0.08)] mt-6">
        <div className="flex justify-between">
          <Input
            type="text"
            value={q}
            onChange={(e) => {
              setQ(() => e.target.value);
            }}
            placeholder="Search..."
            className="border border-[1px] border-neutral-100 w-[191px]"
          />
          <button className="py-[6px] px-3 bg-graphite-500 rounded text-white-lightest text-sm font-medium">
            <Link to={`${config.pathPrefix}master/line-device/create`}>
              <div className="flex gap-2 items-center">
                <svg
                  fill="#ffffff"
                  width="14px"
                  height="14px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <title>plus</title>
                  <path d="M30 14.75h-12.75v-12.75c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 12.75h-12.75c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h12.75v12.75c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-12.75h12.75c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0z"></path>
                </svg>
                Add Data
              </div>
            </Link>
          </button>
        </div>
        <div className="mt-[18px]">
          {/*<div className="flex gap-2 font-body text-gray-700 items-center mb-[27px]">*/}
          {/*  <Table.ShowFilter />*/}
          {/*  <div className="ml-auto">*/}
          {/*    <Input placeholder="search..." />*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<ShowFilter />*/}
          <Table>
            <Thead>
              <Tr>
                <Td>No.</Td>
                <Td>Device Name</Td>
                <Td align="right">Option</Td>
              </Tr>
            </Thead>
            <tbody className="font-inter text-sm font-medium  text-ink-lighter ">
              {lineDevices.data.map((el, index) => (
                <Tr key={index} even={!!((index + 1) % 2)}>
                  <Td>{index + 1}</Td>
                  <Td>{el.name}</Td>
                  <Td align="right">
                    <div className="flex justify-end gap-[9px]">
                      <EyeIcon />
                      <EditButton
                        onClick={() => {
                          navigate(
                            `${config.pathPrefix}master/line-device/edit`,
                            {
                              state: { edit: true, data: el },
                            }
                          );
                        }}
                      />
                      <DeleteButton
                        onClick={() => {
                          deleteDevice(el.id);
                        }}
                      />
                    </div>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
          <div className="flex justify-between items-center mt-[28px]">
            <div className="text-neutral-500 font-normal text-base">
              {`Showing ${(page - 1) * lineDevices.limit + 1} to ${
                (page - 1) * lineDevices.limit + lineDevices.data.length
              } of ${lineDevices.totalRows} entries`}
              {/*Showing 1 to 10 of 14 Entries*/}
            </div>
            <div className="flex justify-center">
              <nav>
                <ul className="flex list-style-none">
                  <button
                    disabled={page === 1}
                    onClick={() => {
                      setPage((prev) => prev - 1);
                    }}
                  >
                    <li className="px-[12px] py-[8px] border border-neutral-100 rounded-l text-neutral-500">
                      Previous
                    </li>
                  </button>
                  {pagination()}
                  <button
                    disabled={page === lineDevices.totalPage}
                    onClick={() => {
                      setPage((prev) => prev + 1);
                    }}
                  >
                    <li className="px-[12px] py-[8px] border border-neutral-100 rounded-r text-neutral-500">
                      Next
                    </li>
                  </button>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
