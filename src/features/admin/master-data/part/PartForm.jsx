import { useFormik } from "formik";
import { InputLabel } from "../../../../common/components/input/InputLabel.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreatePartMutation, useEditPartMutation } from "./partApiSlice.js";
import { useEffect } from "react";

export const PartForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [storePart, { isSuccess }] = useCreatePartMutation();
  const [updatePart, updateResult] = useEditPartMutation();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      let data = {
        name: values.name,
      };
      if (state?.edit) {
        updatePart({ partId: state.part.id, form: data });
      } else {
        storePart(data);
      }
    },
  });

  useEffect(() => {
    if (state?.edit) {
      formik.setFieldValue("name", state.part.name);
    }
  }, [state]);

  useEffect(() => {
    if (isSuccess || updateResult.isSuccess) {
      navigate(-1);
    }
  }, [isSuccess, updateResult]);

  return (
    <>
      <div className="bg-white-lightest pl-[48px] pr-[135px] py-[48px] rounded-[8px] shadow-[0_0_24px_rgba(12,47,57,0.08)]">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-4">
            <InputLabel
              label="Name"
              placeholder="Enter Machine Part Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mt-[40px] flex flex-row gap-4">
            <button
              className="py-3 px-[70.5px] bg-graphite-500 rounded text-white-lightest"
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
