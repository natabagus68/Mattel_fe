import { InputLabel } from "../../../../common/components/input/InputLabel";
import { useFormik } from "formik";
import { SelectLabel } from "../../../../common/components/input/SelectLabel";
import { useNavigate, useParams } from "react-router-dom";
import {
  useCreateUserMutation,
  useGetUserDetailQuery,
  useUpdateUserMutation,
} from "./accountApiSlice.js";
import {
  useGetPositionsQuery,
  useGetRolesQuery,
} from "../access/accessApiSlice.js";
import { useEffect } from "react";

export const AccountForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [createUser, result] = useCreateUserMutation();
  const { data: roles = { data: [] } } = useGetRolesQuery();
  const { data: positions = { data: [] } } = useGetPositionsQuery();
  const { data: detail = { data: {} }, isSuccess } = useGetUserDetailQuery(id, {
    skip: !id,
  });
  const [updateUser, updateResult] = useUpdateUserMutation();
  const initial = {
    name: "",
    kpk: "",
    email: "",
    password: "",
    phone: "",
    role: "",
    position: "",
  };
  const formik = useFormik({
    initialValues: initial,
    onSubmit: (val) => {
      const formData = new FormData();
      formData.append("name", val.name);
      formData.append("kpk", val.kpk);
      formData.append("email", val.email);
      formData.append("password", val.password);
      formData.append("phone", val.phone);
      formData.append("role", val.role);
      formData.append("position", val.position);
      if (id) {
        updateUser({ id: id, form: formData });
      } else {
        createUser(formData);
      }
    },
  });

  useEffect(() => {
    if (id && isSuccess) {
      formik.setValues({
        name: detail.data.name,
        kpk: detail.data.employee.kpk,
        email: detail.data.email,
        password: "",
        phone: detail.data.employee.phone,
        role: detail.data.roles?.[0]?.id ?? "",
        position: detail.data.positions?.[0]?.id ?? "",
      });
    }
    return () => {
      formik.setValues(initial);
    };
  }, [id, isSuccess]);

  useEffect(() => {
    if (result.isSuccess || updateResult.isSuccess) {
      navigate(-1);
    }
    return () => {};
  }, [result.isSuccess, updateResult.isSuccess]);

  return (
    <>
      <div className="pb-9 bg-white-lightest rounded-lg shadow-[0_0_24px_rgba(12,47,57,0.08)]">
        <div className="flex justify-between px-12 py-6 bg-sky-lightest border-sky-light rounded-t-lg">
          <div className="text-2xl text-gray-foundation-800 font-semibold">
            Add Data
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-[16px] px-[48px] flex flex-col gap-4">
            <InputLabel
              label="Name"
              placeholder="Input name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <InputLabel
              label="KPK"
              placeholder="Input kpk"
              name="kpk"
              value={formik.values.kpk}
              onChange={formik.handleChange}
            />
            <InputLabel
              label="Email"
              placeholder="Input Email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <InputLabel
              label="Password"
              placeholder="Input password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <InputLabel
              label="Phone"
              placeholder="Input phone number"
              name="phone"
              type="text"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            <SelectLabel
              label="Role"
              name="role"
              placeholder="Select Role"
              value={formik.values.role}
              list={roles.data.map((el) => ({ key: el.id, value: el.name }))}
              onChange={formik.handleChange}
            />
            <SelectLabel
              label="Position"
              name="position"
              placeholder="Select Position"
              value={formik.values.position}
              onChange={formik.handleChange}
              list={positions.data.map((el) => ({
                key: el.id,
                value: el.name,
              }))}
            />
            {/*<div className="flex flex-col gap-2">*/}
            {/*  <label*/}
            {/*    htmlFor="profile"*/}
            {/*    className="uppercase font-medium text-[22px] text-gray-foundation-500"*/}
            {/*  >*/}
            {/*    Profile Picture*/}
            {/*  </label>*/}
            {/*  <input*/}
            {/*    name="profile"*/}
            {/*    id="profile"*/}
            {/*    type="file"*/}
            {/*    className="hidden"*/}
            {/*    accept="image/*"*/}
            {/*    onChange={(val) => {*/}
            {/*      const str = val.target.value;*/}
            {/*      const ind = str.lastIndexOf("\\");*/}
            {/*      const splitted = str.slice(ind + 1);*/}
            {/*      formik.setFieldValue("profile", splitted);*/}
            {/*    }}*/}
            {/*  />*/}
            {/*  <div className="border border-neutral-100 rounded-lg text-[#646566] flex items-center">*/}
            {/*    <button*/}
            {/*      className="px-[19px] py-[8px] bg-black-400 text-black-700"*/}
            {/*      onClick={() => {*/}
            {/*        document.getElementById("profile").click();*/}
            {/*      }}*/}
            {/*    >*/}
            {/*      Choose*/}
            {/*    </button>*/}
            {/*    <div className="py-2 px-4">*/}
            {/*      {formik.values.profile === ""*/}
            {/*        ? "no file choosen"*/}
            {/*        : formik.values.profile}*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className="mt-4 flex flex-row gap-4">
              <button
                className="py-3 px-[70.5px] bg-ink-base rounded text-white-lightest"
                type="submit"
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
        </form>
      </div>
    </>
  );
};
