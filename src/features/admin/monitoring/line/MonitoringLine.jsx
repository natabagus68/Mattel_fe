import { Dropdown } from "../../dashboard/Dropdown.jsx";
import { ConditionCard } from "./ConditionCard.jsx";
import React, { useEffect, useState } from "react";
import { useGetMonitoringDataQuery } from "./lineApiSlice.js";
import { useGetLineGroupsQuery } from "../../../../app/services/lineGroupService.js";

export const MonitoringLine = () => {
  const [line, setLine] = useState("Line A");
  const {
    data: monitoringLines = { data: [] },
    isSuccess,
    refetch,
  } = useGetMonitoringDataQuery(line);

  const { data: lines = { data: [] } } = useGetLineGroupsQuery();

  useEffect(() => {
    if (isSuccess) {
      console.log(monitoringLines.data);
    }
  }, [isSuccess]);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

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
                lineNum={`${el.name}`}
                condition={el.condition}
                isMtc={el.is_maintenance}
                isMtr={el.is_material}
                isQc={el.is_quality_control}
              />
            ))}
        </div>
      </div>
    </>
  );
};
