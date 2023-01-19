import { InputLabel } from "../../../../common/components/input/InputLabel.jsx";
import { SelectLabel } from "../../../../common/components/input/SelectLabel.jsx";
import {
  useCreateMachineMutation,
  useGetMachineQuery,
  useUpdateMachineMutation,
} from "./machineSlice.js";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useGetDevicesQuery } from "../device/deviceApiSlice.js";
import { useGetLinesQuery } from "../line-location/lineLocationApiSlice.js";
import { useGetPartsQuery } from "../part/partApiSlice.js";

export const MachineForm = () => {
  const linesQuery = useGetLinesQuery();
  const partsQuery = useGetPartsQuery();
  const devicesQuery = useGetDevicesQuery();
  const [storeMachine, { isSuccess, error, isLoading }] =
    useCreateMachineMutation();
  const [updateMachine, updateResult] = useUpdateMachineMutation();
  const [lines, setLines] = useState([]);
  const [parts, setParts] = useState([]);
  const [devices, setDevices] = useState([]);
  const navigate = useNavigate();

  const { state } = useLocation();

  const machineQuery = useGetMachineQuery(state.machines.id, {
    skip: !state?.machines?.id,
    keepUnusedDataFor: 0,
  });

  const formik = useFormik({
    initialValues: {
      code: "",
      number: "",
      machine_line_id: "",
      part1: "",
      part2: "",
      part3: "",
      machine_device_id: "",
    },
    onSubmit: (values) => {
      let data = {
        code: values.code,
        number: values.number,
        machine_line_id: values.machine_line_id,
        part: [values.part1],
        machine_device_id: values.machine_device_id,
      };
      if (values.part2 !== "") {
        data.part = [...data.part, values.part2];
      }
      if (values.part3 !== "") {
        data.part = [...data.part, values.part3];
      }
      if (state?.edit) {
        updateMachine({ id: state.machines.id, form: data });
      } else {
        storeMachine(data);
      }
    },
  });

  useEffect(() => {
    if (state?.edit) {
      if (machineQuery.isSuccess) {
        formik.setFieldValue("code", machineQuery.data.data.code);
        formik.setFieldValue("number", machineQuery.data.data.number);
        formik.setFieldValue(
          "machine_line_id",
          machineQuery.data.data.line?.id
        );
        formik.setFieldValue(
          "machine_device_id",
          machineQuery.data.data.device?.id
        );
        let i = 1;
        for (const part of machineQuery.data.data.parts) {
          formik.setFieldValue(`part${i}`, part.id);
          i++;
        }
      } else {
        machineQuery.refetch();
      }

      // console.log(formik.values);
      //  TODO: Edit Machine?
    }
  }, [state, machineQuery]);

  useEffect(() => {
    if (linesQuery.isSuccess) {
      setLines([]);
      linesQuery.data.data.forEach((el) => {
        setLines((prev) => [
          ...prev,
          {
            key: el.id,
            value: el.name,
          },
        ]);
      });
    }
  }, [linesQuery.isSuccess]);

  useEffect(() => {
    if (partsQuery.isSuccess) {
      setParts([]);
      partsQuery.data.data.forEach((el) => {
        setParts((prev) => [
          ...prev,
          {
            key: el.id,
            value: el.name,
          },
        ]);
      });
    }
  }, [partsQuery.isSuccess]);

  useEffect(() => {
    if (devicesQuery.isSuccess) {
      setDevices([]);
      devicesQuery.data.data.forEach((el) => {
        setDevices((prev) => [...prev, { key: el.id, value: el.name }]);
      });
    }
  }, [devicesQuery.isSuccess]);

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
              label="Code"
              placeholder="Enter your machine code"
              name="code"
              value={formik.values.code}
              onChange={formik.handleChange}
            />
            <InputLabel
              label="Machine name / no"
              placeholder="Enter your machine name / no"
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
            />
            <SelectLabel
              label="Line Location"
              name="machine_line_id"
              list={lines}
              value={formik.values.machine_line_id}
              onChange={formik.handleChange}
            />
            <SelectLabel
              label="Machine Part 1"
              name="part1"
              list={parts}
              value={formik.values.part1}
              onChange={formik.handleChange}
            />
            <SelectLabel
              label="Machine Part 2"
              name="part2"
              list={parts}
              value={formik.values.part2}
              onChange={formik.handleChange}
            />
            <SelectLabel
              label="Machine Part 3"
              name="part3"
              list={parts}
              value={formik.values.part3}
              onChange={formik.handleChange}
            />
            <SelectLabel
              label="Device ID"
              name="machine_device_id"
              list={devices}
              value={formik.values.machine_device_id}
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
