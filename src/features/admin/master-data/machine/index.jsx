import { useEffect, useState } from "react";
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
  useDeleteMachineMutation,
  useGetMachineQuery,
  useGetMachinesQuery,
} from "../../../../app/services/machineService.js";

export default () => {
  const [page, setPage] = useState(1);
  const [q, setQ] = useState("");

  const navigate = useNavigate();

  const { data: machines = { data: [] }, refetch } = useGetMachineQuery({
    q: q,
    limit: 10,
    page: page,
  });
  const [deleteMachine, _] = useDeleteMachineMutation();

  useEffect(() => {
    refetch();
  }, [page, q]);

  const pagination = () => {
    let arr = [];
    for (let i = 0; i < machines.totalPage; i++) {
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
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
            }}
            type="text"
            placeholder="Search..."
            className="border border-[1px] border-neutral-100 w-[191px]"
          />
          <button className="py-[6px] px-3 bg-graphite-500 rounded text-white-lightest text-sm font-medium">
            <Link to={`${config.pathPrefix}master/machine/create`}>
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
          <Table>
            <Thead>
              <Tr>
                <Td>Code</Td>
                <Td>Machine Number</Td>
                <Td>Line Location</Td>
                <Td>Part</Td>
                <Td>Part</Td>
                <Td>Part</Td>
                <Td>Device ID</Td>
                <Td align="right">Option</Td>
              </Tr>
            </Thead>
            <tbody className="font-inter text-sm font-medium  text-ink-lighter ">
              {machines.data.map((el, index) => (
                <Tr key={index} even={!!((index + 1) % 2)}>
                  <Td className="px-6 ">{el.code}</Td>
                  <Td>{el.number}</Td>
                  <Td>{el.line?.name?? '-'}</Td>
                  <Td>{el.parts?.name ?? "-"}</Td>
                  <Td>{el.parts?.name ?? "-"}</Td>
                  <Td>{el.parts?.name ?? "-"}</Td>
                  <Td>{el.line.line_device.name}</Td>
                  <Td align="right">
                    <div className="flex justify-end gap-[9px]">
                      <EyeIcon />
                      <EditButton
                        onClick={() => {
                          navigate(`${config.pathPrefix}master/machine/edit`, {
                            state: { edit: true, data: el },
                          });
                        }}
                      />
                      <DeleteButton
                        onClick={() => {
                          deleteMachine(el.id);
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
              {`Showing ${(page - 1) * machines.limit + 1} to ${
                (page - 1) * machines.limit + machines.data.length
              } of ${machines.totalRows} entries`}
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
                    disabled={page === machines.totalPage}
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
