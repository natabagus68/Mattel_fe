import { Dropdown } from "../Dropdown.jsx";
import { ChartContainer } from "../ChartContainer.jsx";
import { QtyProblemChart } from "../machine/QtyProblemChart.jsx";
import { TimeProblemChart } from "../machine/TimeProblemChart.jsx";
import { ProblemDailyChart } from "./ProblemDailyChart.jsx";
import { MachineProblemChart } from "./MachineProblemChart.jsx";
import { ProblemQuantityChart } from "./ProblemQuantityChart.jsx";
import { ProblemTimeChart } from "./ProblemTimeChart.jsx";
import moment from "moment";
import { useState } from "react";

export const MachineProblem = () => {
  const [machineParams, setMachineParams] = useState({
    role: "",
    line: "",
    month: moment().month(),
    year: moment().year(),
  });
  return (
    <>
      <div className="grid grid-flow-col auto-cols-min gap-6">
        <Dropdown
          list={["Maintenance", "QC", "RUN", "Material"].map((el) => ({
            key: el,
            value: el,
          }))}
        />
        <Dropdown
          list={["Line A", "Line B", "Line C", "Line D"].map((el) => ({
            key: el,
            value: el,
          }))}
        />
        <div className="grid grid-flow-col auto-cols-min gap-2 items-center justify-center">
          <div className="text-neutral-500">Year</div>
          <Dropdown
            list={["2022", "2023"].map((el) => ({
              key: el,
              value: el,
            }))}
            value={machineParams.year}
            onChange={(val) => {
              setMachineParams((prev) => ({
                ...prev,
                year: val.target.value,
              }));
            }}
            width="144px"
          />
          <div className="text-neutral-500">Month</div>
          <Dropdown
            list={moment
              .months()
              .map((el, index) => ({ key: index, value: el }))}
            width="144px"
            value={machineParams.month}
            onChange={(val) => {
              setMachineParams((prev) => ({
                ...prev,
                month: parseInt(val.target.value),
              }));
            }}
          />
        </div>
      </div>

      <div className="grid grid-rows-5 gap-[24px]  mt-[24px]">
        <ChartContainer title="Machine Qty Problem">
          <QtyProblemChart />
        </ChartContainer>
        <ChartContainer title="Machine Time Problem">
          <TimeProblemChart />
        </ChartContainer>
        <div className="grid grid-cols-2 gap-[25px]">
          <ChartContainer title="Problem Daily">
            <ProblemDailyChart />
          </ChartContainer>
          <ChartContainer title="Machine Problem">
            <MachineProblemChart />
          </ChartContainer>
        </div>
        <ChartContainer title="Problem Quantity">
          <ProblemQuantityChart />
        </ChartContainer>
        <ChartContainer title="Problem Time">
          <ProblemTimeChart />
        </ChartContainer>
      </div>
    </>
  );
};
