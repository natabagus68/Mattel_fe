import { Dropdown } from "../Dropdown";
import { Input } from "../../../../common/components/index.js";
import Chart from "../../../../common/components/Chart";
import { ChartJs } from "../../../sample/Chartjs";
import { ResponseChart } from "./ResponseChart";
import { QuantityChart } from "./QuantityChart";
import { ChartContainer } from "../ChartContainer.jsx";
import { TimeChart } from "./TimeChart";

export const ManPower = (props) => {
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
      <div className="grid grid-rows-3 gap-[16px] mt-[24px]">
        <ChartContainer title="Manpower Response">
          <ResponseChart />
        </ChartContainer>
        <ChartContainer title="Job Quantity">
          <QuantityChart />
        </ChartContainer>
        <ChartContainer title="Job Time">
          <TimeChart />
        </ChartContainer>
      </div>
    </>
  );
};
