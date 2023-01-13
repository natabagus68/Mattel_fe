import { ChartContainer } from "../ChartContainer";
import { DowntimeTrendChart } from "./DowntimeTrendChart";

export const General = (props) => {
  return (
    <>
      <div className="grid grid-rows-3">
        <ChartContainer title="24-Hr Trend Downtime">
          <DowntimeTrendChart />
        </ChartContainer>
      </div>
    </>
  );
};
