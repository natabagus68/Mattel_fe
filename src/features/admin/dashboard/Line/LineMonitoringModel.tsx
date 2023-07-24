import React, { useEffect, useState } from "react";
import { useGetLineMonitoringQuery } from "../../../../app/services/dashboardservice";

export default function useLineMonitoringModel() {
    const [legen, setlegen] = useState({
        maintenance: false,
        material: false,
        material2: false,
        layout: false,
    });
    const { data: responLineMonitoring = { data: [] }, refetch } =
        useGetLineMonitoringQuery(legen);

    const filterHanlde = (props) => {
        setlegen(props);
    };
    useEffect(() => {
        async function refresh() {
            await refetch();
        }
        refresh();
    }, [legen]);

    return {
        filterHanlde,
        responLineMonitoring,
        legen,
    };
}
