import { Dropdown } from "../dashboard/Dropdown.jsx";
import { Input } from "../../../common/components/index.js";
import {
  CalendarIcon,
  CaretIcon,
} from "../../../common/components/icons/index.js";
import { Status } from "./Status";

export const Report = (props) => {
  return (
    <>
      <div className="grid grid-flow-col auto-cols-min gap-6">
        <Dropdown list={["Maintenance", "QC", "RUN", "Material"]} />
        {/*  TODO : Implement date picker*/}
        <div className="bg-white-lightest flex gap-[11px] w-[190px] h-[44px] items-center rounded-lg py-2.5 px-3.5">
          <CalendarIcon />
          <div className="font-body font-normal text-gray-300">Date</div>
        </div>
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
            <tr className="font-inter text-xs font-[600] h-[45px] text-ink-base border-y-[1px] border-gray-100">
              <td className="px-6 ">NO</td>
              <td>MACHINE NO</td>
              <td>LINE</td>
              <td>STATUS</td>
              <td>PROBLEM</td>
              <td>TIME START</td>
              <td>TIME FINISHED</td>
              <td>TOTAL TIME</td>
              <td>PIC</td>
              <td>OPTION</td>
            </tr>
          </thead>
          <tbody>
            <tr className="font-inter text-sm font-medium h-[45px] text-ink-lighter border-y-[1px] border-gray-100 bg-gray-50">
              <td className="px-6 ">1</td>
              <td>Line A-01</td>
              <td>Line A</td>
              <td>
                <Status text="Finished" />
              </td>
              <td>
                <Status text="MTC" />
              </td>
              <td>09:03:00</td>
              <td>21:03:00</td>
              <td>8 Hours</td>
              <td>Emily</td>
              <td>
                <Dropdown list={["Action", "Handle"]} width="95px" />
              </td>
            </tr>
            <tr className="font-inter text-sm font-medium h-[45px] text-ink-lighter border-y-[1px] border-gray-100 bg-gray-50">
              <td className="px-6 ">2</td>
              <td>Line A-02</td>
              <td>Line A</td>
              <td>
                <Status text="On Progress" />
              </td>
              <td>
                <Status text="QC" />
              </td>
              <td>09:03:00</td>
              <td>21:03:00</td>
              <td>8 Hours</td>
              <td>Emily</td>
              <td>
                <Dropdown list={["Action", "Handle"]} width="95px" />
              </td>
            </tr>
            <tr className="font-inter text-sm font-medium h-[45px] text-ink-lighter border-y-[1px] border-gray-100 bg-gray-50">
              <td className="px-6 ">3</td>
              <td>Line A-03</td>
              <td>Line A</td>
              <td>
                <Status text="Waiting" />
              </td>
              <td>
                <Status text="Material" />
              </td>
              <td>09:03:00</td>
              <td>21:03:00</td>
              <td>8 Hours</td>
              <td>Emily</td>
              <td>
                <Dropdown list={["Action", "Handle"]} width="95px" />
              </td>
            </tr>
            <tr className="font-inter text-sm font-medium h-[45px] text-ink-lighter border-y-[1px] border-gray-100 bg-gray-50">
              <td className="px-6 ">3</td>
              <td>Line A-03</td>
              <td>Line A</td>
              <td>
                <Status text="Waiting" />
              </td>
              <td>
                <Status text="Material" />
              </td>
              <td>09:03:00</td>
              <td>21:03:00</td>
              <td>8 Hours</td>
              <td>Emily</td>
              <td>
                <Dropdown list={["Action", "Handle"]} width="95px" />
              </td>
            </tr>
            <tr className="font-inter text-sm font-medium h-[45px] text-ink-lighter border-y-[1px] border-gray-100 bg-gray-50">
              <td className="px-6 ">2</td>
              <td>Line A-02</td>
              <td>Line A</td>
              <td>
                <Status text="On Progress" />
              </td>
              <td>
                <Status text="QC" />
              </td>
              <td>09:03:00</td>
              <td>21:03:00</td>
              <td>8 Hours</td>
              <td>Emily</td>
              <td>
                <Dropdown list={["Action", "Handle"]} width="95px" />
              </td>
            </tr>{" "}
            <tr className="font-inter text-sm font-medium h-[45px] text-ink-lighter border-y-[1px] border-gray-100 bg-gray-50">
              <td className="px-6 ">2</td>
              <td>Line A-02</td>
              <td>Line A</td>
              <td>
                <Status text="On Progress" />
              </td>
              <td>
                <Status text="QC" />
              </td>
              <td>09:03:00</td>
              <td>21:03:00</td>
              <td>8 Hours</td>
              <td>Emily</td>
              <td>
                <Dropdown list={["Action", "Handle"]} width="95px" />
              </td>
            </tr>
            <tr className="font-inter text-sm font-medium h-[45px] text-ink-lighter border-y-[1px] border-gray-100 bg-gray-50">
              <td className="px-6 ">3</td>
              <td>Line A-03</td>
              <td>Line A</td>
              <td>
                <Status text="Waiting" />
              </td>
              <td>
                <Status text="Material" />
              </td>
              <td>09:03:00</td>
              <td>21:03:00</td>
              <td>8 Hours</td>
              <td>Emily</td>
              <td>
                <Dropdown list={["Action", "Handle"]} width="95px" />
              </td>
            </tr>
            <tr className="font-inter text-sm font-medium h-[45px] text-ink-lighter border-y-[1px] border-gray-100 bg-gray-50">
              <td className="px-6 ">3</td>
              <td>Line A-03</td>
              <td>Line A</td>
              <td>
                <Status text="Waiting" />
              </td>
              <td>
                <Status text="Material" />
              </td>
              <td>09:03:00</td>
              <td>21:03:00</td>
              <td>8 Hours</td>
              <td>Emily</td>
              <td>
                <Dropdown list={["Action", "Handle"]} width="95px" />
              </td>
            </tr>
            <tr className="font-inter text-sm font-medium h-[45px] text-ink-lighter border-y-[1px] border-gray-100 bg-gray-50">
              <td className="px-6 ">2</td>
              <td>Line A-02</td>
              <td>Line A</td>
              <td>
                <Status text="On Progress" />
              </td>
              <td>
                <Status text="QC" />
              </td>
              <td>09:03:00</td>
              <td>21:03:00</td>
              <td>8 Hours</td>
              <td>Emily</td>
              <td>
                <Dropdown list={["Action", "Handle"]} width="95px" />
              </td>
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
