import { Dropdown } from "../Dropdown";
import { ResponseChart } from "./ResponseChart";
import { QuantityChart } from "./QuantityChart";
import { ChartContainer } from "../ChartContainer.jsx";
import { TimeChart } from "./TimeChart";
import { useGetManPowerGraphQuery } from "./manpowerApiSlice.js";
import { useEffect, useState } from "react";
import moment from "moment";

export const ManPower = () => {
  const [manpowerParams, setManpowerParams] = useState({
    role: "",
    month: moment().month(),
    year: moment().year(),
  });

  const {
    data: manpowers = { data: [] },
    isSuccess,
    refetch,
  } = useGetManPowerGraphQuery(manpowerParams);

  useEffect(() => {
    refetch();
  }, [manpowerParams]);

  if (isSuccess)
    return (
      <>
        <div className="grid grid-flow-col auto-cols-min gap-6">
          <Dropdown
            list={["Maintenance", "QC", "RUN", "Material"].map((el) => ({
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
              value={manpowerParams.year}
              onChange={(val) => {
                setManpowerParams((prev) => ({
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
              value={manpowerParams.month}
              onChange={(val) => {
                setManpowerParams((prev) => ({
                  ...prev,
                  month: parseInt(val.target.value),
                }));
              }}
            />
          </div>
        </div>
        <div className="grid grid-rows-3 gap-[16px] mt-[24px]">
          <ChartContainer title="Manpower Response">
            <ResponseChart
              data={manpowers?.manpowerResponse}
              month={manpowerParams.month}
            />
          </ChartContainer>
          <ChartContainer title="Job Quantity">
            <QuantityChart
              data={manpowers?.jobQuantity}
              month={manpowerParams.month}
            />
          </ChartContainer>
          <ChartContainer title="Job Time">
            <TimeChart data={manpowers?.jobTime} month={manpowerParams.month} />
          </ChartContainer>
        </div>
      </>
    );
};
