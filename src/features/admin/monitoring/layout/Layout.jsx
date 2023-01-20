import { Dropdown } from "../../dashboard/Dropdown.jsx";
import MachineLayoutSVG from "./MachineLayout.svg";

export const Layout = () => {
  return (
    <>
      <div className="grid grid-flow-col auto-cols-min gap-3 items-center">
        <div className="font-medium text-neutral-B200">Availability</div>
        <Dropdown
          value={"Available"}
          onChange={(val) => {
            // setAvailability(val.target.value);
          }}
          list={["Available", "Busy"].map((el) => ({ key: el, value: el }))}
        />
      </div>
      {/*<div*/}
      {/*  className="mt-6 bg-white-lightest rounded-lg shadow-[0_0_24px_rgba(12, 47, 57, 0.08)]*/}
      {/*px-9 pt-9 pb-6"*/}
      {/*>*/}
      {/*<MachineLayoutSVG />*/}
      <img src={MachineLayoutSVG} alt="" />
      {/*</div>*/}
    </>
  );
};
