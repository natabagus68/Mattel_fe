import { ChartContainer } from "../ChartContainer";
import { DowntimeTrendChart } from "./DowntimeTrendChart";
import { MachineDowntimeList } from "./MachineDowntimeList";
import { DoubleChartContainer } from "./DoubleChartContainer";
import { SideBarChart } from "./SideBarChart";

export const General = (props) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <ChartContainer title="24-Hr Trend Downtime">
          <DowntimeTrendChart />
        </ChartContainer>
        <div className="grid grid-cols-2 gap-3.5">
          <DoubleChartContainer
            title="Top 5 Machine Downtime"
            toggleList={["List", "Graphic"]}
          >
            <MachineDowntimeList />
            <SideBarChart />
          </DoubleChartContainer>
          <DoubleChartContainer
            title="Top 5 Line Downtime"
            toggleList={["List", "Graphic"]}
          >
            <MachineDowntimeList />
            <SideBarChart />
          </DoubleChartContainer>
        </div>
        <div className="grid grid-cols-2 gap-3.5">
          <DoubleChartContainer
            title="Top 5 Fastest Respond Time"
            toggleList={["List", "Graphic"]}
          >
            <MachineDowntimeList />
            <SideBarChart />
          </DoubleChartContainer>
          <DoubleChartContainer
            title="Top 5 Fastest Repair Time"
            toggleList={["List", "Graphic"]}
          >
            <MachineDowntimeList />
            <SideBarChart />
          </DoubleChartContainer>
        </div>
      </div>
    </>
  );
};
