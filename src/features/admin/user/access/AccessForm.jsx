import { InputLabel } from "../../../../common/components/input/InputLabel.jsx";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export const AccessForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (val) => {
      console.log(val);
    },
  });

  return (
    <>
      <div className="pb-9 bg-white-lightest rounded-lg shadow-[0_0_24px_rgba(12,47,57,0.08)] h-screen">
        <div className="flex justify-between px-12 py-6 bg-sky-lightest border-sky-light rounded-t-lg">
          <div className="text-2xl text-gray-foundation-800 font-semibold">
            Add Data
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} className="px-[48px]">
          <div className="mt-[16px] flex flex-col gap-4">
            <InputLabel
              label="Role"
              placeholder="Input role"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
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
        </form>
      </div>
    </>
  );
};
