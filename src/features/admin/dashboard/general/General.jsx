import { ChartContainer } from "../ChartContainer";
import { DowntimeTrendChart } from "./DowntimeTrendChart";
import { GeneralList } from "./GeneralList.jsx";
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
            <GeneralList />
            <SideBarChart />
          </DoubleChartContainer>
          <DoubleChartContainer
            title="Top 5 Line Downtime"
            toggleList={["List", "Graphic"]}
          >
            <GeneralList />
            <SideBarChart />
          </DoubleChartContainer>
        </div>
        <div className="grid grid-cols-2 gap-3.5">
          <DoubleChartContainer
            title="Top 5 Fastest Respond Time"
            toggleList={["List", "Graphic"]}
          >
            <GeneralList />
            <SideBarChart />
          </DoubleChartContainer>
          <DoubleChartContainer
            title="Top 5 Fastest Repair Time"
            toggleList={["List", "Graphic"]}
          >
            <GeneralList />
            <SideBarChart />
          </DoubleChartContainer>
        </div>
      </div>
    </>
  );
};
