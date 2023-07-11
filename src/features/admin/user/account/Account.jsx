import { Input } from "../../../../common/components/index.js";
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
import { useNavigate } from "react-router-dom";
import { config } from "../../../../common/utils/index.js";

export const Account = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const { data: users = { data: [] }, refetch } = useGetUsersQuery(page);
  const [verifyUser, result] = useVerifyUserMutation();

  useEffect(() => {
    async function refresh() {
      await refetch();
    }
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
          key={i}
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

  console.log(users)

  return (
    <>
      <div className="pb-9 bg-white-lightest rounded-lg shadow-[0_0_24px_rgba(12,47,57,0.08)]">
        <div className="flex justify-between px-12 py-6 bg-sky-lightest border-sky-light rounded-t-lg">
          <div className="text-2xl text-gray-foundation-800 font-semibold">
            Account
          </div>
          <div className="flex gap-4">
            <button
              className="py-[6px] px-[31px] bg-ink-base rounded text-white-lightest text-sm font-medium"
              onClick={() => {
                navigate(`${config.pathPrefix}user/account/trash`);
              }}
            >
              Trash
            </button>
            <button
              className="py-[6px] px-3 bg-ink-base rounded text-white-lightest text-sm font-medium"
              onClick={() => {
                navigate(`${config.pathPrefix}user/account/create`);
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
              <tr className="font-inter text-xs font-[600] font-semibold uppercase h-[45px] text-ink-base border-y-[1px] border-gray-100">
                <td className="px-6 ">Status</td>
                <td>Name</td>
                <td>NPK</td>
                <td>Role</td>
                <td>Access</td>
                <td align="right" className="pr-9">
                  Action
                </td>
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
                    <td>{el.roles.length > 0 && el.roles[0].name}</td>
                    <td>{el.positions?.[0]?.name}</td>
                    <td align="right" className="pr-3">
                      <div className="flex justify-end gap-[9px]">
                        <button
                          onClick={() => {
                            navigate(
                              `${config.pathPrefix}user/account/${el.id}/detail`
                            );
                          }}
                        >
                          <EyeIcon />
                        </button>
                        <button
                          onClick={() => {
                            navigate(
                              `${config.pathPrefix}user/account/${el.id}/edit`
                            );
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
              {`Showing ${(page - 1) * users.limit + 1} to ${
                (page - 1) * users.limit + users.data.length
              } of ${users.totalRows} entries`}
            </div>
            <div className="flex justify-center mt-12">
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
                    disabled={page === users.totalPage}
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
