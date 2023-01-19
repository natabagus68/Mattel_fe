import { Dropdown } from "../../dashboard/Dropdown.jsx";
import { Input } from "../../../../common/components/index.js";
import { Status } from "./Status.jsx";
import { useGetMechanicsQuery } from "./mechanicApiSlice.js";
import { useEffect, useState } from "react";
import { useDeleteMachineMutation } from "../../master-data/machine/machineSlice.js";

export const Mechanic = () => {
  const [page, setPage] = useState(1);
  const [availability, setAvailability] = useState("Available");

  const { data: mechanics = { data: [] }, refetch } = useGetMechanicsQuery({
    page: page,
    availability: availability,
  });

  useEffect(() => {
    refetch();
  }, [page, availability]);

  const pagination = () => {
    let arr = [];
    for (let i = 0; i < mechanics.totalPage; i++) {
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

  return (
    <>
      <div className="grid grid-flow-col auto-cols-min gap-3 items-center">
        <div className="font-medium text-neutral-B200">Availability</div>
        <Dropdown
          value={availability}
          onChange={(val) => {
            setAvailability(val.target.value);
          }}
          list={["Available", "Busy"].map((el) => ({ key: el, value: el }))}
        />
      </div>
      <div
        className="mt-6 bg-white-lightest rounded-lg shadow-[0_0_24px_rgba(12, 47, 57, 0.08)]
      px-9 pt-9 pb-6"
      >
        <Input
          type="text"
          placeholder="Search..."
          className="border border-[1px] border-neutral-100 w-[191px]"
        />
        <table className="my-[28px] table-auto w-full">
          <thead className="bg-[#E2F1FF]">
            <tr className="font-inter text-xs font-[600] h-[45px] text-ink-base border-y-[1px] border-gray-100 uppercase">
              <td className="px-6 ">KPK</td>
              <td>NAME</td>
              <td>AVAILABILITY</td>
              <td>LAST LOCATION</td>
              <td>TIMESTAMP</td>
            </tr>
          </thead>
          <tbody>
            {mechanics.data.map((el) => (
              <tr
                className="font-inter text-sm font-medium h-[45px] text-ink-lighter border-y-[1px] border-gray-100 bg-gray-50"
                key={el.id}
              >
                <td className="px-6 ">{el.kpk}</td>
                <td>{el.name}</td>
                <td>
                  <Status text={el.availability} bgColor="success" />
                </td>
                <td>{el.last_location}</td>
                <td>{el.last_location_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center">
          <div className="text-neutral-500 font-normal text-base">{`Showing ${
            (page - 1) * mechanics.limit + 1
          } to ${(page - 1) * mechanics.limit + mechanics.data.length} of ${
            mechanics.totalRows
          } entries`}</div>
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
                  disabled={page === mechanics.totalPage}
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
