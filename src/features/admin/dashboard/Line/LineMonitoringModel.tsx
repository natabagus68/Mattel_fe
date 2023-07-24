import React, { useEffect } from "react";
import { useGetLineMonitoringQuery } from "../../../../app/services/dashboardservice";

export default function useLineMonitoringModel() {
    const { data: responLineMonitoring = { data: [] }, refetch } =
        useGetLineMonitoringQuery();


    useEffect(() => {
        async function refresh() {
            await refetch();
        }
        refresh();
    }, []);

    return {
        responLineMonitoring,
    };
}
