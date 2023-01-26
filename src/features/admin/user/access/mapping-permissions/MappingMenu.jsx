import { config } from "../../../../../common/utils/index.js";
import { useNavigate, useParams } from "react-router-dom";
import { Checkbox } from "../../../../../common/components/input/Checkbox.jsx";
import {
  useGetPermissionsQuery,
  useGetPositionDetailQuery,
  useUpdatePositionMutation,
} from "../accessApiSlice.js";
import { useEffect, useState } from "react";

export const MappingMenu = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currPermissions, setCurrPermissions] = useState([]);

  const { data: permissions = { data: [] } } = useGetPermissionsQuery();
  const { data: position = { data: {} } } = useGetPositionDetailQuery(id, {
    skip: !id,
  });
  const [updatePositionPermission, result] = useUpdatePositionMutation();

  useEffect(() => {
    if (position.data?.permissions?.length > 0) {
      for (const permission of position.data.permissions) {
        setCurrPermissions((prev) => [...prev, permission.id]);
      }
    }
    return () => {
      setCurrPermissions([]);
    };
  }, [position]);

  const handleSubmit = () => {
    const data = {
      name: position.data.name,
      permission: currPermissions,
    };
    updatePositionPermission({ id: id, form: data });
  };

  useEffect(() => {
    if (result.isSuccess) {
      navigate(`${config.pathPrefix}access`);
    }
    return () => {};
  }, [result.isSuccess]);

  return (
    <>
      <div className="pb-9 bg-white-lightest rounded-lg shadow-[0_0_24px_rgba(12,47,57,0.08)]">
        <div className="flex justify-between px-12 py-6 bg-sky-lightest border-sky-light rounded-t-lg">
          <div className="text-2xl text-gray-foundation-800 font-semibold">
            Mapping Menu
          </div>
          <button
            className="py-[6px] px-3 bg-ink-base rounded text-white-lightest text-sm font-medium"
            onClick={() => {
              navigate(`${config.pathPrefix}access/permission/create`);
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
        <div className="px-12 py-6">
          <table className="border">
            <tbody>
              <tr className="border">
                <td className="border px-12 pt-4 pb-3">
                  <Checkbox />
                </td>
                <td className="border px-12 w-full font-bold text-black-700">
                  Name
                </td>
              </tr>
              {permissions.data.map((el, index) => (
                <tr key={index}>
                  <td className="border px-12 pt-4 pb-3">
                    <Checkbox
                      checked={currPermissions.includes(el.id)}
                      onClick={() => {
                        setCurrPermissions((prev) => {
                          const arr = [...prev];
                          if (arr.includes(el.id)) {
                            const index = arr.indexOf(el.id);
                            arr.splice(index, 1);
                            return arr;
                          } else {
                            return [...arr, el.id];
                          }
                        });
                      }}
                    />
                  </td>
                  <td className="border px-12 text-sm text-ink-base">
                    {el.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex flex-row gap-4 justify-end">
            <button
              className="py-3 px-[70.5px] bg-ink-base rounded text-white-lightest"
              type="submit"
              onClick={handleSubmit}
            >
              Save
            </button>
            <button
              className="py-3 px-[70.5px] bg-neutral-200 rounded text-white-lightest"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
