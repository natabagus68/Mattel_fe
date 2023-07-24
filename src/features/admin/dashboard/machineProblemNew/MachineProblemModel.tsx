import React, { useEffect, useState } from "react";
import {
    useGetFiveAvgDowntimeQuery,
    useGetFiveAvgSlowestRepairQuery,
    useGetFiveAvgSlowestResponseQuery,
    useGetFiveTotalDowntimeQuery,
} from "../../../../app/services/dashboardservice";
import { useGetLinesQuery } from "../../../../app/services/lineService";
import { useGetMachinesQuery } from "../../../../app/services/machineService";
import { useSearchParams } from "react-router-dom";

export default function useMachineProblemModel() {
    const {
        data: responDataLine = { data: [] },
        isLoading: loadLine,
        refetch: refetchLine,
    } = useGetLinesQuery({ page: 1, limit: 99 });
    const {
        data: responDataMachine = { data: [] },
        isLoading: loadMachine,
        refetch: refetchMachine,
    } = useGetMachinesQuery({ page: 1, limit: 99 });

    const [searchParam, setSearchparam] = useSearchParams();

    const [paramData, setParamData] = useState({
        line_id: searchParam.get("line_id") || "",
        machine_id: searchParam.get("machine_id") || "",
        year: searchParam.get("year") || "",
        month: searchParam.get("month") || "",
    });

    const {
        data: slowestRepair = { data: [] },
        refetch: refetchSlowestRepair,
    } = useGetFiveAvgSlowestRepairQuery({
        line_id: paramData.line_id,
        machine_id: paramData.machine_id,
        year: paramData.year,
        month: paramData.month,
    });
    const {
        data: slowestResponse = { data: [] },
        refetch: refetchSlowestResponse,
    } = useGetFiveAvgSlowestResponseQuery({});
    const { data: avgDowntime = { data: [] }, refetch: refetchAvgDowntime } =
        useGetFiveAvgDowntimeQuery({
            line_id: paramData.line_id,
            machine_id: paramData.machine_id,
            year: paramData.year,
            month: paramData.month,
        });
    const {
        data: totalDowntime = { data: [] },
        refetch: refetchTotalDowntime,
    } = useGetFiveTotalDowntimeQuery({
        line_id: paramData.line_id,
        machine_id: paramData.machine_id,
        year: paramData.year,
        month: paramData.month,
    });

    const [datasetSlowestRepair, setDatasetSlowestRepair] = useState<any>([]);
    const color = ["#4D74B2", "#F9A63A", "#43ADA2", "#F36960", "#858D9D"];

    const insertToDatasetRepair = (data = slowestRepair?.data) => {
        setDatasetSlowestRepair([]);
        data?.forEach((item, i) => {
            item.donwtime_duration.map((value) => {
                setDatasetSlowestRepair((prev) => [
                    ...prev,
                    {
                        name: value.downtime_name,
                        val: value.avg_of_repair_time,
                        color: color[i],
                    },
                ]);
            });
            data.length - 1 !== i
                ? setDatasetSlowestRepair((prev) => [
                      ...prev,
                      {
                          name: "",
                          val: null,
                          color: "",
                      },
                  ])
                : null;
        });
    };

    const handleChangeParam = (e) => {
        setParamData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    useEffect(() => {
        async function refresh() {
            await refetchLine();
            await refetchMachine();
        }
        refresh();
    }, []);

    useEffect(() => {
        insertToDatasetRepair();
    }, [slowestRepair.data.length]);

    useEffect(() => {
        async function refresh() {
            await refetchSlowestRepair();
            await refetchSlowestResponse();
            await refetchAvgDowntime();
            await refetchTotalDowntime();
        }
        refresh();

        setSearchparam((prev) => ({ ...prev, ...paramData }));
    }, [paramData]);

    return {
        slowestRepair,
        slowestResponse,
        avgDowntime,
        totalDowntime,
        datasetSlowestRepair,
        responDataLine,
        loadLine,
        responDataMachine,
        loadMachine,
        paramData,
        handleChangeParam,
    };
}
