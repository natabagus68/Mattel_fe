import React from "react";
import {
  AreaIcon,
  ArrowIcon,
  CompanyIcon,
  PitIcon,
  UsersIcon,
} from "../../../common/components/icons";
import { Input, Select } from "../../../common/components/input";
import { DashboardCard } from "./DashboardCard";
import { RevenueChart } from "./RevenueChart";
import { Dropdown } from "./Dropdown.jsx";
export const Dashboard = () => {
  return (
    <>
      <div className="flex gap-3 text-gray-500 font-body mb-6">
        <a>Home</a>/<div className="text-gray-700">Dashboard</div>
      </div>
      <Select placeholder="Test" />

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3 font-nunito-sans mb-6">
        <DashboardCard
          label={`Total Company`}
          content={43}
          icon={<CompanyIcon />}
        />
        <DashboardCard label={`Total Area`} content={43} icon={<AreaIcon />} />
        <DashboardCard label={`Total Pit`} content={123} icon={<PitIcon />} />
        <DashboardCard
          label={`Total User`}
          content={3223}
          icon={<UsersIcon />}
        />
      </div>
      <div className="flex flex-col rounded-lg shadow-[0px_2px_20px_rgba(0,_0,_0,_0.12)] px-6 py-4 bg-white">
        <div className="mb-2">Revenue</div>
        <div className="flex justify-between gap-3">
          <div className="flex items-center">
            <span className="mr-5">Rp. 173.000.000</span>
            <ArrowIcon />
            <span className="text-success">46%</span>
          </div>
          <Input type="date" placeholder={`2022`} />
        </div>
        <RevenueChart />
      </div>
    </>
  );
};
