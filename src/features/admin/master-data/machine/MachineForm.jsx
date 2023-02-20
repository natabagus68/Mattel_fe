import { InputLabel } from "../../../../common/components/input/InputLabel.jsx";
import { SelectLabel } from "../../../../common/components/input/SelectLabel.jsx";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  useCreateMachineMutation,
  useGetMachineQuery,
  useUpdateMachineMutation,
} from "../../../../app/services/machineService.js";
import { useGetMachineCategoriesQuery } from "../../../../app/services/machineCategoryService.js";
import { SaveConfirmationDialog } from "../../../../common/components/dialog/SaveConfirmationDialog.jsx";
import { SuccessDialog } from "../../../../common/components/dialog/SuccessDialog.jsx";
import { useGetLinesQuery } from "../../../../app/services/lineService.js";
import { useGetPartsQuery } from "../../../../app/services/partService.js";

export const MachineForm = () => {
  const linesQuery = useGetLinesQuery({ q: "", page: 1, limit: 100 });
  const partsQuery = useGetPartsQuery();
  const categoryQuery = useGetMachineCategoriesQuery({
    q: "",
    page: 1,
    limit: 100,
  });
  const [storeMachine, { isSuccess }] = useCreateMachineMutation();
  const [updateMachine, updateResult] = useUpdateMachineMutation();
  const [lines, setLines] = useState([]);
  const [parts, setParts] = useState([]);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  const { state } = useLocation();

  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [form, setForm] = useState({});

  const machineQuery = useGetMachineQuery(state?.data?.id, {
    skip: !state?.data?.id,
    keepUnusedDataFor: 0,
  });

  const formik = useFormik({
    initialValues: {
      code: "",
      number: "",
      line_id: "",
      part1: "",
      part2: "",
      part3: "",
      machine_category_id: "",
    },
    onSubmit: (values) => {
      let data = {
        code: values.code,
        number: values.number,
        line_id: values.line_id,
        part: [values.part1],
        machine_category_id: values.machine_category_id,
      };
      if (values.part2 !== "") {
        data.part = [...data.part, values.part2];
      }
      if (values.part3 !== "") {
        data.part = [...data.part, values.part3];
      }
      setForm(data);
      setOpenConfirmation(true);
    },
  });

  useEffect(() => {
    if (state?.edit) {
      if (machineQuery.isSuccess) {
        formik.setFieldValue("code", machineQuery.data.data.code);
        formik.setFieldValue("number", machineQuery.data.data.number);
        formik.setFieldValue("line_id", machineQuery.data.data.line?.id);
        formik.setFieldValue(
          "machine_category_id",
          machineQuery.data.data.machine_category.id
        );
        let i = 1;
        for (const part of machineQuery.data.data.parts) {
          formik.setFieldValue(`part${i}`, part.id);
          i++;
        }
      } else {
        machineQuery.refetch();
      }
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
    if (categoryQuery.isSuccess) {
      setCategories([]);
      categoryQuery.data.data.forEach((el) => {
        setCategories((prev) => [
          ...prev,
          {
            key: el.id,
            value: el.name,
          },
        ]);
      });
    }
  }, [categoryQuery.isSuccess]);

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
              label="Machine no"
              placeholder="Enter your machine no"
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
            />
            <SelectLabel
              label="Line Location"
              name="line_id"
              list={lines}
              value={formik.values.line_id}
              onChange={formik.handleChange}
            />
            <SelectLabel
              label="Machine Category"
              name="machine_category_id"
              list={categories}
              value={formik.values.machine_category_id}
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
            updateMachine({ id: state.data.id, form: form });
          } else {
            storeMachine(form);
          }
        }}
      />
      <SuccessDialog
        open={isSuccess || updateResult.isSuccess}
        navigate={() => {
          navigate(-1);
        }}
      />
    </>
  );
};
