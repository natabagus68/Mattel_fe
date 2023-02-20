import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { InputLabel } from "../../../../common/components/input/InputLabel.jsx";
import { SaveConfirmationDialog } from "../../../../common/components/dialog/SaveConfirmationDialog.jsx";
import { SuccessDialog } from "../../../../common/components/dialog/SuccessDialog.jsx";
import {
  useCreateLineMutation,
  useUpdateLineMutation,
} from "../../../../app/services/lineService.js";
import { useGetLineGroupsQuery } from "../../../../app/services/lineGroupService.js";
import { useGetLineDevicesQuery } from "../../../../app/services/lineDeviceService.js";
import { SelectLabel } from "../../../../common/components/input/SelectLabel.jsx";

export const LineLocationForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const lineGroupQuery = useGetLineGroupsQuery();
  const lineDeviceQuery = useGetLineDevicesQuery({
    q: "",
    limit: 100,
    page: 1,
  });

  const [groups, setGroups] = useState([]);
  const [devices, setDevices] = useState([]);

  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [form, setForm] = useState({});

  const [storeLine, storeResult] = useCreateLineMutation();
  const [updateLine, updateResult] = useUpdateLineMutation();

  const formik = useFormik({
    initialValues: {
      name: "",
      line_group_id: "",
      line_device_id: "",
    },
    onSubmit: (values) => {
      let data = {
        name: values.name,
        line_group_id: values.line_group_id,
        line_device_id: values.line_device_id,
      };
      setForm(data);
      setOpenConfirmation(true);
    },
  });

  useEffect(() => {
    if (state?.edit) {
      formik.setFieldValue("name", state.data.name);
    }
  }, [state]);

  useEffect(() => {
    if (lineGroupQuery.isSuccess) {
      setGroups([]);
      lineGroupQuery.data.data.forEach((el) => {
        setGroups((prev) => [
          ...prev,
          {
            key: el.id,
            value: el.name,
          },
        ]);
      });
    }
  }, [lineGroupQuery.isSuccess]);

  useEffect(() => {
    if (lineDeviceQuery.isSuccess) {
      setDevices([]);
      lineDeviceQuery.data.data.forEach((el) => {
        setDevices((prev) => [
          ...prev,
          {
            key: el.id,
            value: el.name,
          },
        ]);
      });
    }
  }, [lineDeviceQuery.isSuccess]);

  return (
    <>
      <div className="bg-white-lightest pl-[48px] pr-[135px] py-[48px] rounded-[8px] shadow-[0_0_24px_rgba(12,47,57,0.08)]">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-4">
            <InputLabel
              label="Name"
              placeholder="Enter Line Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <SelectLabel
              label="Line Group"
              name="line_group_id"
              list={groups}
              value={formik.values.line_group_id}
              onChange={formik.handleChange}
            />
            <SelectLabel
              label="Line Device"
              name="line_device_id"
              list={devices}
              value={formik.values.line_device_id}
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
      <SaveConfirmationDialog
        open={openConfirmation}
        setOpen={setOpenConfirmation}
        form={form}
        mutationFn={() => {
          if (state?.edit) {
            updateLine({ lineId: state.data.id, form: form });
          } else {
            storeLine(form);
          }
        }}
      />
      <SuccessDialog
        open={storeResult.isSuccess || updateResult.isSuccess}
        navigate={() => {
          navigate(-1);
        }}
      />
    </>
  );
};
