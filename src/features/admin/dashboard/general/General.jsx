import { Dropdown } from "../Dropdown.jsx";
import React from "react";
import { ConditionCard } from "./ConditionCard";

export const General = (props) => {
  return (
    <>
      <Dropdown list={["Line A", "Line B", "Line C"]} />
      <div className="mt-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-[29px]">
          <ConditionCard lineNum="Line A1" status="RUN" />
          <ConditionCard lineNum="Line A1" status="QC" />
          <ConditionCard lineNum="Line A1" status="Material" />
          <ConditionCard lineNum="Line A1" status="RUN" />
          <ConditionCard lineNum="Line A1" status="QC" />
          <ConditionCard lineNum="Line A1" status="RUN" />
          <ConditionCard lineNum="Line A1" status="Maintenance" />
          <ConditionCard lineNum="Line A1" status="QC" />
          <ConditionCard lineNum="Line A1" status="Material" />
          <ConditionCard lineNum="Line A1" status="RUN" />
          <ConditionCard lineNum="Line A1" status="QC" />
          <ConditionCard lineNum="Line A1" status="RUN" />
          <ConditionCard lineNum="Line A1" status="Maintenance" />
        </div>
      </div>
    </>
  );
};
