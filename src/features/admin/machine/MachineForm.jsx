import { InputLabel } from "../../../common/components/input/InputLabel";
import { SelectLabel } from "../../../common/components/input/SelectLabel";
import {
  useCreateMachineMutation,
  useGetLinesQuery,
  useGetPartsQuery,
} from "./machineSlice.js";
import { useEffect, useState } from "react";

export const MachineForm = () => {
  const linesQuery = useGetLinesQuery();
  const partsQuery = useGetPartsQuery();
  const [storeMachine, { isSuccess, error, isLoading }] =
    useCreateMachineMutation();
  const [lines, setLines] = useState([]);
  const [parts, setParts] = useState([]);

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
    console.log(isSuccess);
  }, [isSuccess]);

  function submitHandler(e) {
    e.preventDefault();
    const body = {
      code: e.target.code.value,
      number: e.target.number.value,
      machine_line_id: e.target.machine_line_id.value,
      part: [e.target.part1.value],
      machine_device_id: e.target.machine_device_id.value,
    };
    console.log(body);
    storeMachine(body);
    // console.log(formData.get("part[]"));
  }

  return (
    <>
      <div className="bg-white-lightest pl-[48px] pr-[135px] py-[48px] rounded-[8px]">
        <form onSubmit={submitHandler}>
          <div className="flex flex-col gap-4">
            <InputLabel
              label="Code"
              placeholder="Enter your machine code"
              name="code"
            />
            <InputLabel
              label="Machine name / no"
              placeholder="Enter your machine name / no"
              name="number"
            />
            <SelectLabel
              label="Line Location"
              name="machine_line_id"
              list={lines}
            />
            <SelectLabel label="Machine Part 1" name="part1" list={parts} />
            <SelectLabel label="Machine Part 2" name="part[]" list={parts} />
            <SelectLabel label="Machine Part 3" name="part[]" list={parts} />
            <InputLabel
              label="Device ID"
              name="machine_device_id"
              placeholder="Enter your device ID"
            />
          </div>
          <div className="mt-[40px] flex flex-row gap-4">
            <button
              className="py-3 px-[70.5px] bg-graphite-500 rounded text-white-lightest"
              type="submit"
            >
              Save
            </button>
            <button className="py-3 px-[70.5px] bg-neutral-200 rounded text-white-lightest">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
