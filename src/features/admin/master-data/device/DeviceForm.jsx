import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  useCreateDeviceMutation,
  useUpdateDeviceMutation,
} from "./deviceApiSlice.js";
import { useEffect } from "react";
import { InputLabel } from "../../../../common/components/input/InputLabel.jsx";

export const DeviceForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [storeDevice, { isSuccess }] = useCreateDeviceMutation();
  const [updateDevice, updateResult] = useUpdateDeviceMutation();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      let data = {
        name: values.name,
      };
      if (state?.edit) {
        updateDevice({ deviceId: state.data.id, form: data });
      } else {
        storeDevice(data);
      }
    },
  });

  useEffect(() => {
    if (isSuccess || updateResult.isSuccess) {
      navigate(-1);
    }
  }, [isSuccess, updateResult]);

  useEffect(() => {
    if (state && state.edit) {
      formik.setFieldValue("name", state.data.name);
    }
  }, [state]);

  return (
    <>
      <div className="bg-white-lightest pl-[48px] pr-[135px] py-[48px] rounded-[8px] shadow-[0_0_24px_rgba(12,47,57,0.08)]">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-4">
            <InputLabel
              label="Name"
              placeholder="Enter Machine Device"
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
              onClick={(event) => {
                event.preventDefault();
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