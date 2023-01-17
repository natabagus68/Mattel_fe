import { Dropdown } from "../Dropdown.jsx";
import { Input } from "../../../../common/components/index.js";
import { ChartContainer } from "../ChartContainer.jsx";
import { ProblemDailyChart } from "../machine-problem/ProblemDailyChart.jsx";
import { MachineProblemChart } from "../machine-problem/MachineProblemChart.jsx";
import { ProblemQuantityChart } from "../machine-problem/ProblemQuantityChart.jsx";
import { ProblemTimeChart } from "../machine-problem/ProblemTimeChart.jsx";
import { useLocation } from "react-router-dom";
import { QtyProblemChart } from "../machine/QtyProblemChart.jsx";
import { TimeProblemChart } from "../machine/TimeProblemChart.jsx";

export const MachineDetail = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div className="grid grid-flow-col auto-cols-min gap-6">
        <Dropdown list={["Maintenance", "QC", "RUN", "Material"]} />
        <Dropdown list={["Line A", "Line B", "Line C", "Line D"]} />
        <div className="grid grid-flow-col auto-cols-min gap-2 items-center justify-center">
          <div className="text-neutral-500">Year</div>
          <Input type="text" placeholder="2022" className={"w-[114px]"} />
          <div className="text-neutral-500">Month</div>
          <Input type="text" placeholder="June" className={"w-[114px]"} />
        </div>
      </div>

      <div className="grid grid-rows-5 gap-[24px]  mt-[24px]">
        <div className="grid grid-cols-2 gap-[25px]">
          <ChartContainer title="Machine Qty Problem">
            <QtyProblemChart />
          </ChartContainer>
          <ChartContainer title="Machine Time Problem">
            <TimeProblemChart />
          </ChartContainer>
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
