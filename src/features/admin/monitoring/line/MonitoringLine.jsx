import { Dropdown } from "../../dashboard/Dropdown.jsx";
import { ConditionCard } from "./ConditionCard.jsx";
import React, { useEffect, useState } from "react";
import { useGetMonitoringDataQuery } from "./lineApiSlice.js";

export const MonitoringLine = () => {
  const [line, setLine] = useState("Line A");
  const {
    data: monitoringLines = { data: [] },
    isSuccess,
    refetch,
  } = useGetMonitoringDataQuery(line);

  useEffect(() => {
    if (isSuccess) {
      console.log(monitoringLines.data);
    }
  }, [isSuccess]);

  return (
    <>
      <Dropdown list={["Line A", "Line B", "Line C"]} />
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
