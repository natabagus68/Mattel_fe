import { Dropdown } from "../../dashboard/Dropdown.jsx";
import { ConditionCard } from "./ConditionCard.jsx";
import React, { useEffect, useState } from "react";
import { useGetMonitoringDataQuery } from "./lineApiSlice.js";
import { useGetLinesQuery } from "../../master-data/line-location/lineLocationApiSlice.js";

export const MonitoringLine = () => {
  const [line, setLine] = useState("Line A");
  const {
    data: monitoringLines = { data: [] },
    isSuccess,
    refetch,
  } = useGetMonitoringDataQuery(line);

  const { data: lines = { data: [] } } = useGetLinesQuery();

  useEffect(() => {
    if (isSuccess) {
      console.log(monitoringLines.data);
    }
  }, [isSuccess]);

  return (
    <>
      <Dropdown
        list={lines.data.map((el) => ({
          key: el.name,
          value: el.name,
        }))}
        value={line}
        onChange={(val) => {
          setLine(val.target.value);
        }}
      />
      <div className="mt-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-[29px]">
          {isSuccess &&
            monitoringLines.data.map((el, index) => (
              <ConditionCard
                key={index}
                lineNum={`${line + el.number}`}
                status={el.condition}
              />
            ))}
        </div>
      </div>
    </>
  );
};
