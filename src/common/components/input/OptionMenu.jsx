import { CaretIcon } from "../icons";
import { useState } from "react";

export const OptionMenu = ({ options = [{ label: "Item", fn: () => {} }] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className="w-[88px] h-[32px] bg-ink-base rounded py-2 px-3
      flex gap-2 items-center text-sky-lightest inline-flex"
      >
        <div>Option</div>
        <div className="rotate-90">
          <CaretIcon width={16} height={12} />
        </div>
      </button>
      <div
        className={`mt-1 bg-white-lightest w-28 rounded py-2 px-[10px] text-xs absolute right-0 z-10 border ${
          !open && "hidden"
        }`}
        role="menu"
      >
        <div className="flex flex-col gap-2 ">
          {options.map((el, index) => (
            <button
              role="menuitem"
              className="text-gray-foundation-500 text-left"
              key={index}
              onClick={el.fn}
            >
              {el.label}
            </button>
          ))}

          {/*<button*/}
          {/*  role="menuitem"*/}
          {/*  className="text-gray-foundation-500 text-left"*/}
          {/*>*/}
          {/*  Edit*/}
          {/*</button>*/}
          {/*<button*/}
          {/*  role="menuitem"*/}
          {/*  className="text-gray-foundation-500 text-left"*/}
          {/*>*/}
          {/*  Delete*/}
          {/*</button>*/}
        </div>
      </div>
    </div>
  );
};
