import { Dropdown } from "../../dashboard/Dropdown.jsx";
import { Input } from "../../../../common/components/index.js";
import { Status } from "./Status.jsx";

export const Mechanic = (props) => {
  return (
    <>
      <div className="grid grid-flow-col auto-cols-min gap-3 items-center">
        <div className="font-medium text-neutral-B200">Availability</div>
        <Dropdown list={["Available", "Unavailable", "Busy"]} />
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
              <td>STATUS</td>
              <td>AVAILABILITY</td>
              <td>LAST LOCATION</td>
              <td>TIMESTAMP</td>
            </tr>
          </thead>
          <tbody>
            <tr className="font-inter text-sm font-medium h-[45px] text-ink-lighter border-y-[1px] border-gray-100 bg-gray-50">
              <td className="px-6 ">26318321</td>
              <td>Akur Jurniawan</td>
              <td>
                <Status text="In" />
              </td>
              <td>
                <Status text="Available" bgColor="success" />
              </td>
              <td>B05</td>
              <td>12/12/2022 17:15</td>
            </tr>
            <tr className="font-inter text-sm font-medium h-[45px] text-ink-lighter border-y-[1px] border-gray-100 bg-gray-50">
              <td className="px-6 ">26318321</td>
              <td>Akur Jurniawan</td>
              <td>
                <Status text="Out" />
              </td>
              <td>
                <Status text="Unavailable" />
              </td>
              <td>B05</td>
              <td>12/12/2022 17:15</td>
            </tr>{" "}
            <tr className="font-inter text-sm font-medium h-[45px] text-ink-lighter border-y-[1px] border-gray-100 bg-gray-50">
              <td className="px-6 ">26318321</td>
              <td>Akur Jurniawan</td>
              <td>
                <Status text="Out" />
              </td>
              <td>
                <Status text="Unavailable" />
              </td>
              <td>B05</td>
              <td>12/12/2022 17:15</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-between items-center">
          <div className="text-neutral-500 font-normal text-base">
            Showing 1 to 10 of 57 entries
          </div>
          <div className="flex justify-center">
            <nav>
              <ul className="flex list-style-none">
                <li className="px-[12px] py-[8px] border border-neutral-100 rounded-l text-neutral-500">
                  Previous
                </li>
                <li className="px-[12px] py-[8px] border border-neutral-100  bg-graphite-500 text-white-lightest">
                  1
                </li>
                <li className="px-[12px] py-[8px] border border-neutral-100 text-neutral-500">
                  2
                </li>
                <li className="px-[12px] py-[8px] border border-neutral-100  text-neutral-500">
                  3
                </li>
                <li className="px-[12px] py-[8px] border border-neutral-100  text-neutral-500">
                  ...
                </li>
                <li className="px-[12px] py-[8px] border border-neutral-100 rounded-r text-neutral-500">
                  Next
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
