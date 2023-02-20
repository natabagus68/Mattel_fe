import { Dropdown } from "../dashboard/Dropdown.jsx";
import { Input } from "../../../common/components/index.js";
import { Status } from "./Status";
import { useGetReportsQuery } from "./reportApiSlice.js";
import { useState } from "react";
import moment from "moment";

export const Report = () => {
  const [params, setParams] = useState({
    role: "",
    date: moment().format("YYYY-MM-DD"),
  });

  const [page, setPage] = useState(1);

  const { data: reports = { data: [] } } = useGetReportsQuery({
    ...params,
    page: page,
  });

  const pagination = () => {
    let arr = [];
    for (let i = 0; i < reports.totalPage; i++) {
      arr.push(
        <button
          key={i}
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
          >
            {i + 1}
          </li>
        </button>
      );
    }
    return arr;
  };

  const splitDateTime = (dateTime) => {
    if (!dateTime) {
      return "";
    } else {
      return dateTime.split(" ");
    }
  };

  return (
    <>
      <div className="grid grid-flow-col auto-cols-min gap-6">
        <Dropdown
          value={params.role}
          onChange={(e) => {
            setParams((prev) => ({ ...prev, role: e.target.value }));
          }}
          list={["MTC", "QC", "MTL"].map((el) => ({
            key: el,
            value: el,
          }))}
        />
        <div className="bg-white-lightest flex gap-[11px] w-fit h-[44px] items-center rounded-lg py-2.5 px-3.5 ">
          <input
            type="date"
            value={params.date}
            onChange={(val) => {
              setParams((prev) => ({ ...prev, date: val.target.value }));
            }}
            className="font-body font-normal text-gray-300"
          />
        </div>
      </div>
      <div
        className="mt-6 bg-white-lightest rounded-lg shadow-[0_0_24px_rgba(12,47,57,0.08)]
      px-9 pt-9 pb-6"
      >
        <Input
          type="text"
          placeholder="Search..."
          className="border border-[1px] border-neutral-100 w-[191px]"
        />
        <table className="my-[28px] table-auto w-full">
          <thead className="bg-[#E2F1FF]">
            <tr className="font-inter text-xs font-[600] h-[45px] text-ink-base border-y-[1px] border-gray-100">
              <td className="px-6 ">NO</td>
              <td>MACHINE NO</td>
              <td>LINE</td>
              <td align="center">STATUS</td>
              <td align="center">PROBLEM</td>
              <td>TIME START</td>
              <td>TIME FINISHED</td>
              <td>TOTAL TIME</td>
              <td>PIC</td>
              <td>OPTION</td>
            </tr>
          </thead>
          <tbody>
            {reports.data.length === 0 && (
              <tr>
                <td
                  colSpan={10}
                  align="center"
                  className="font-inter text-sm font-medium h-[45px] text-ink-lighter border-y-[1px] border-gray-100 bg-gray-50"
                >
                  Empty...
                </td>
              </tr>
            )}
            {reports.data.map((el, index) => (
              <tr
                className="font-inter text-sm font-medium h-[45px] text-ink-lighter border-y-[1px] border-gray-100 bg-gray-50"
                key={index}
              >
                <td className="px-6 ">{index + 1}</td>
                <td>{el.machine?.id}</td>
                <td>{el.line.name}</td>
                <td align="center">
                  <Status text={el.status} />
                </td>
                <td align="center">
                  <Status text={el.ticket_type} />
                </td>
                <td>
                  {splitDateTime(el.start_at)[0]} <br />{" "}
                  {splitDateTime(el.start_at)[1]}
                </td>
                <td>
                  {splitDateTime(el.finished_at)[0]} <br />{" "}
                  {splitDateTime(el.finished_at)[1]}
                </td>
                <td>
                  {`${el.total_time.days * 24 + el.total_time.hours} Hours`}
                  <br />
                  {`${el.total_time.minutes ?? "-"} Minutes`}
                  <br />
                  {`${el.total_time.seconds ?? "-"} Seconds`}
                </td>
                <td>{el.ticket_users[0]?.user?.name}</td>
                <td>
                  <Dropdown
                    list={["Action", "Handle"].map((el) => ({
                      key: el,
                      value: el,
                    }))}
                    width="95px"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center">
          <div className="text-neutral-500 font-normal text-base">
            {`Showing ${(page - 1) * 10 + 1} to ${
              (page - 1) * 10 + reports.data.length
            } of ${reports.totalRows} entries`}
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
                  disabled={page === reports.totalPage}
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
    </>
  );
};
