import { config } from "../../../../common/utils/index.js";
import { useNavigate } from "react-router-dom";
import { Input, OptionMenu } from "../../../../common/components/index.js";

export const Access = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="pb-9 bg-white-lightest rounded-lg shadow-[0_0_24px_rgba(12,47,57,0.08)] h-[1197px]">
        <div className="flex justify-between px-12 py-6 bg-sky-lightest border-sky-light rounded-t-lg">
          <div className="text-2xl text-gray-foundation-800 font-semibold">
            Access
          </div>
          <button
            className="py-[6px] px-3 bg-ink-base rounded text-white-lightest text-sm font-medium"
            onClick={() => {
              navigate(`${config.pathPrefix}access/create`);
            }}
          >
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
          </button>
        </div>
        <div className="flex">
          <Input
            type="text"
            placeholder="Search..."
            className="border border-[1px] border-neutral-100 w-[191px] ml-auto mr-[44px] my-6"
          />
        </div>
        <div className="px-9">
          <table className="table-auto w-full">
            <thead className="bg-[#E2F1FF]">
              <tr
                className="font-inter text-xs font-[600] font-semibold
                uppercase h-[45px] text-ink-base border-y-[1px] border-gray-100
               "
              >
                <td align="left" className="px-9">
                  Role
                </td>
                <td align="right" className="px-9">
                  Action
                </td>
              </tr>
            </thead>
            <tbody className="font-inter text-sm font-medium  text-ink-lighter ">
              <tr className="h-[45px] border-y-[1px] border-gray-100 bg-gray-50">
                <td className="px-6 ">SuperAdmin</td>
                <td className="px-6" align="right">
                  <OptionMenu
                    options={[
                      {
                        label: "Mapping Menu",
                        fn: () => {
                          navigate(`${config.pathPrefix}access/mapping`);
                        },
                      },
                      {
                        label: "Edit",
                        fn: () => {
                          console.log("Edit Access");
                        },
                      },
                      {
                        label: "Delete",
                        fn: () => {
                          console.log("Delete Access");
                        },
                      },
                    ]}
                  />
                </td>
              </tr>
              <tr className="h-[45px] border-y-[1px] border-gray-100 bg-gray-50">
                <td className="px-6 ">Admin</td>
                <td className="px-6" align="right">
                  <OptionMenu
                    options={[
                      {
                        label: "Mapping Menu",
                        fn: () => {
                          navigate(`${config.pathPrefix}access/mapping`);
                        },
                      },
                      {
                        label: "Edit",
                        fn: () => {
                          console.log("Edit Access");
                        },
                      },
                      {
                        label: "Delete",
                        fn: () => {
                          console.log("Delete Access");
                        },
                      },
                    ]}
                  />
                </td>
              </tr>
              <tr className="h-[45px] border-y-[1px] border-gray-100 bg-gray-50">
                <td className="px-6 ">Manajemen</td>
                <td className="px-6" align="right">
                  <OptionMenu
                    options={[
                      {
                        label: "Mapping Menu",
                        fn: () => {
                          navigate(`${config.pathPrefix}access/mapping`);
                        },
                      },
                      {
                        label: "Edit",
                        fn: () => {
                          console.log("Edit Access");
                        },
                      },
                      {
                        label: "Delete",
                        fn: () => {
                          console.log("Delete Access");
                        },
                      },
                    ]}
                  />
                </td>
              </tr>
              <tr className="h-[45px] border-y-[1px] border-gray-100 bg-gray-50">
                <td className="px-6 ">User Produksi</td>
                <td className="px-6" align="right">
                  <OptionMenu
                    options={[
                      {
                        label: "Mapping Menu",
                        fn: () => {
                          navigate(`${config.pathPrefix}access/mapping`);
                        },
                      },
                      {
                        label: "Edit",
                        fn: () => {
                          console.log("Edit Access");
                        },
                      },
                      {
                        label: "Delete",
                        fn: () => {
                          console.log("Delete Access");
                        },
                      },
                    ]}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
