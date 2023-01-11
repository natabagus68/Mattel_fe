import { Dropdown } from "../Dropdown.jsx";
import { Input } from "../../../../common/components/index.js";
import { ChartContainer } from "../ChartContainer.jsx";
import { ResponseChart } from "../manpower/ResponseChart.jsx";
import { QuantityChart } from "../manpower/QuantityChart.jsx";
import { TimeChart } from "../manpower/TimeChart.jsx";
import { QtyProblemChart } from "./QtyProblemChart";
import { TimeProblemChart } from "./TimeProblemChart";

export const Machine = (props) => {
  return (
    <>
      <div className="grid grid-flow-col auto-cols-min gap-6">
        <Dropdown list={["Maintenance", "QC", "RUN", "Material"]} />
        <div className="grid grid-flow-col auto-cols-min gap-2 items-center justify-center">
          <div className="text-neutral-500">Year</div>
          <Input type="text" placeholder="2022" />
          <div className="text-neutral-500">Month</div>
          <Input type="text" placeholder="June" />
        </div>
      </div>
      <div className="grid grid-rows-2 gap-[16px] mt-[24px]">
        <ChartContainer title="Machine Qty Problem">
          <QtyProblemChart />
        </ChartContainer>
        <ChartContainer title="Machine Time Problem">
          <TimeProblemChart />
        </ChartContainer>
      </div>
    </>
  );
};
