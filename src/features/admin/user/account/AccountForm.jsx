import { InputLabel } from "../../../../common/components/input/InputLabel";
import { useFormik } from "formik";
import { SelectLabel } from "../../../../common/components/input/SelectLabel";
import { useNavigate } from "react-router-dom";

export const AccountForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "",
      position: "",
      profile: "",
    },
    onSubmit: (val) => {
      console.log(val);
    },
  });

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
            <SelectLabel
              label="Role"
              name="role"
              placeholder="Select Role"
              value={formik.values.role}
              list={["MTC", "MTL"].map((el) => ({ key: el, value: el }))}
              onChange={formik.handleChange}
            />
            <SelectLabel
              label="Position"
              name="position"
              placeholder="Select Position"
              value={formik.values.position}
              onChange={formik.handleChange}
              list={["Admin", "Superadmin", "Staff"].map((el) => ({
                key: el,
                value: el,
              }))}
            />
            <div className="flex flex-col gap-2">
              <label
                htmlFor="profile"
                className="uppercase font-medium text-[22px] text-gray-foundation-500"
              >
                Profile Picture
              </label>
              <input
                name="profile"
                id="profile"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(val) => {
                  const str = val.target.value;
                  const ind = str.lastIndexOf("\\");
                  const splitted = str.slice(ind + 1);
                  formik.setFieldValue("profile", splitted);
                }}
              />
              <div className="border border-neutral-100 rounded-lg text-[#646566] flex items-center">
                <button
                  className="px-[19px] py-[8px] bg-black-400 text-black-700"
                  onClick={() => {
                    document.getElementById("profile").click();
                  }}
                >
                  Choose
                </button>
                <div className="py-2 px-4">
                  {formik.values.profile === ""
                    ? "no file choosen"
                    : formik.values.profile}
                </div>
              </div>
            </div>
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
