import { Dropdown } from "../../dashboard/Dropdown.jsx";
import {
  CalendarIcon,
  EditIcon,
  EyeIcon,
  TrashIcon,
} from "../../../../common/components/icons/index.js";
import { Input } from "../../../../common/components/index.js";
import { useGetMachinesQuery } from "./machineSlice.js";
import { useEffect, useState } from "react";
import { config } from "../../../../common/utils/index.js";
import { Link, useNavigate } from "react-router-dom";

export const MachineMaster = (props) => {
  const [lineId, setLineId] = useState(null);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const { data: machines = { data: [] }, refetch } =
    useGetMachinesQuery(lineId);

  useEffect(() => {
    refetch();
  }, [lineId]);

  useEffect(() => {
    async function refresh() {
      await refetch();
    }
    console.log(page);
    refresh();
  }, [page]);

  const pagination = () => {
    let arr = [];
    for (let i = 0; i < machines.totalPage; i++) {
      arr.push(
        <button
          disabled={page === i + 1}
          onClick={() => {
            setPage(i + 1);
          }}
          key={i}
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
      <div className="grid grid-flow-col auto-cols-min gap-6">
        <Dropdown list={["Maintenance", "QC", "RUN", "Material"]} />
        {/*  TODO : Implement date picker*/}
        <div className="bg-white-lightest flex gap-[11px] w-[190px] h-[44px] items-center rounded-lg py-2.5 px-3.5 ">
          <CalendarIcon />
          <div className="font-body font-normal text-gray-300">Date</div>
        </div>
      </div>
      <div className="bg-white-lightest px-[35px] py-[48px] rounded-[8px] shadow-[0_0_24px_rgba(12,47,57,0.08)] mt-6">
        <div className="flex justify-between">
          <Input
            type="text"
            placeholder="Search..."
            className="border border-[1px] border-neutral-100 w-[191px]"
          />
          <button className="py-[6px] px-3 bg-graphite-500 rounded text-white-lightest text-sm font-medium">
            <Link to={`${config.pathPrefix}machine/create`}>
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
          <table className="my-[28px] table-auto w-full">
            <thead className="bg-[#E2F1FF]">
              <tr className="font-inter text-xs font-[600] font-semibold uppercase h-[45px] text-ink-base border-y-[1px] border-gray-100">
                <td className="px-6 ">Code</td>
                <td>Machine No / Name</td>
                <td>Line Location</td>
                <td>Machine Part 1</td>
                <td>Machine Part 2</td>
                <td>Machine Part 3</td>
                <td>Device ID</td>
                <td>Option</td>
              </tr>
            </thead>
            <tbody className="font-inter text-sm font-medium  text-ink-lighter ">
              {machines.data.map((el, index) => (
                <tr
                  className="h-[45px] border-y-[1px] border-gray-100 bg-gray-50"
                  key={index}
                >
                  <td className="px-6 ">{el.code}</td>
                  <td>{el.number}</td>
                  <td>{el.line.name}</td>
                  <td>{el.parts[0].name}</td>
                  <td>{el.parts[1]?.name}</td>
                  <td>{el.parts[2]?.name}</td>
                  <td>{el.device?.name}</td>
                  <td>
                    <div className="flex gap-[9px]">
                      <EyeIcon />
                      <button
                        onClick={() => {
                          navigate(`${config.pathPrefix}machine/edit`, {
                            state: { edit: true, machines: el },
                          });
                        }}
                      >
                        <EditIcon />
                      </button>
                      <TrashIcon />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center">
            <div className="text-neutral-500 font-normal text-base">
              {`Showing ${(page - 1) * 10 + 1} to ${
                (page - 1) * 10 + machines.data.length
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
