import { Input, Loader } from "../../../../common/components/index.js";
import {
  InactiveToggleIcon,
  ActiveToggleIcon,
} from "../../../../common/components/icons/index.js";
import {
  EditIcon,
  EyeIcon,
  TrashIcon,
} from "../../../../common/components/icons";
import { useGetUsersQuery, useVerifyUserMutation } from "./accountApiSlice.js";
import { useEffect, useState } from "react";

export const Account = () => {
  const [page, setPage] = useState(1);

  const { data: users = { data: [] }, refetch } = useGetUsersQuery(page);
  const [verifyUser, result] = useVerifyUserMutation();

  useEffect(() => {
    async function refresh() {
      await refetch();
    }
    console.log(page);
    refresh();
  }, [page]);

  useEffect(() => {
    if (result.isSuccess) {
      refetch();
    }
  }, [result.isSuccess]);

  //TODO : add global loader

  const pagination = () => {
    let arr = [];
    for (let i = 0; i < users.totalPage; i++) {
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
      <div className="p-9 bg-white-lightest rounded-lg">
        <div className="flex justify-between">
          <Input
            type="text"
            placeholder="Search..."
            className="border border-[1px] border-neutral-100 w-[191px]"
          />
          <div className="flex gap-4">
            <button className="py-[6px] px-[31px] bg-graphite-500 rounded text-white-lightest text-sm font-medium">
              Trash
            </button>
            <button className="py-[6px] px-3 bg-graphite-500 rounded text-white-lightest text-sm font-medium">
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
        </div>
        <div className="mt-[22px]">
          <table className="my-[28px] table-auto w-full">
            <thead className="bg-[#E2F1FF]">
              <tr className="font-inter text-xs font-[600] font-semibold uppercase h-[45px] text-ink-base border-y-[1px] border-gray-100">
                <td className="px-6 ">Status</td>
                <td>Name</td>
                <td>NPK</td>
                <td>Department</td>
                <td>Role</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody className="font-inter text-sm font-medium  text-ink-lighter ">
              {users.data.length > 0 &&
                users.data.map((el) => (
                  <tr
                    className="h-[45px] border-y-[1px] border-gray-100 bg-gray-50"
                    key={el.id}
                  >
                    <td className="px-6 ">
                      <div className="flex gap-2 items-center">
                        <button
                          onClick={() => {
                            // setUserId(el.id);
                            verifyUser(el.id);
                          }}
                        >
                          {el.is_verified ? (
                            <ActiveToggleIcon />
                          ) : (
                            <InactiveToggleIcon />
                          )}
                        </button>
                        <div className="text-center">
                          {el.is_verified ? "Active" : "Inactive"}
                        </div>
                      </div>
                    </td>
                    <td>{el.name}</td>
                    <td>{el.employee?.kpk}</td>
                    <td>Put department</td>
                    <td>{el.roles.length > 0 && el.roles[0].name}</td>
                    <td>
                      <div className="flex gap-[9px]">
                        <EyeIcon />
                        <EditIcon />
                        <TrashIcon />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center">
            <div className="text-neutral-500 font-normal text-base">
              Showing 1 to 10 of {users.totalRows} entries
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
