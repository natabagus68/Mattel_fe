import React, { useEffect, useState } from "react";
import {
    useGetManPowerQuery,
    useGetRealtimeWorkQuery,
    useGetTicketReleaseQuery,
} from "../../../../app/services/dashboardservice";
import { useSearchParams } from "react-router-dom";

export default function useManpowerModel() {
    const [modalFilter, setModalFilter] = useState({
        type: "",
        value: false,
    });

    const [searchParam, setSearchparam] = useSearchParams();
    const [paramData, setParamData] = useState({
        pageManPower: Number(searchParam.get("pageManPower")) || 1,
        searchManPower: searchParam.get("searchManPower") || "",
        sortManPower: searchParam.get("sortManPower") || "ASC",
        lineNameManPower: searchParam.get("lineIdManPower") || "",
        statusManPower: searchParam.get("ticketStatusManPower") || "",
        assignedManPower: searchParam.get("assignedManPower") || "",
        availabilityManPower: searchParam.get("availabilityManPower") || "",

        pageTicketRelease: Number(searchParam.get("pageTicketRelease")) || 1,
        searchTicketRelease: searchParam.get("searchTicketRelease") || "",
        sortTicketRelease: searchParam.get("sortTicketRelease") || "ASC",
        lineIdTicketRelease: searchParam.get("lineIdTicketRelease") || "",
        ticketStatusTicketRelease:
            searchParam.get("ticketStatusTicketRelease") || "",

        pageRealtimeWork: Number(searchParam.get("pageRealtimeWork")) || 1,
        searchRealtimeWork: searchParam.get("searchRealtimeWork") || "",
        sortRealtimeWork: searchParam.get("sortRealtimeWork") || "ASC",
        lineIdRealtimeWork: searchParam.get("lineIdRealtimeWork") || "",
        ticketStatusRealtimeWork:
            searchParam.get("ticketStatusRealtimeWork") || "",
    });

    const {
        data: responDataTicketRelease = { data: [] },
        isLoading: loadDataTicketRelease,
        refetch: refetchTicket,
    } = useGetTicketReleaseQuery({
        page: paramData.pageTicketRelease,
        search: paramData.searchTicketRelease,
        ticket_status: paramData.ticketStatusTicketRelease,
        line_id: paramData.lineIdTicketRelease,
        sort_val: paramData.sortTicketRelease,
    });
    const {
        data: responDataRealtimeWork = { data: [] },
        isLoading: loadDataRealtimeWork,
        refetch: refetchRealtimeWork,
    } = useGetRealtimeWorkQuery({
        page: paramData.pageRealtimeWork,
        search: paramData.searchRealtimeWork,
        ticket_status: paramData.ticketStatusRealtimeWork,
        line_id: paramData.lineIdRealtimeWork,
        sort_val: paramData.sortRealtimeWork,
    });

    const {
        data: responManPower = { data: [] },
        isLoading: loadDataManPower,
        refetch: refetchManPower,
    } = useGetManPowerQuery({
        page: paramData.pageManPower,
        search: paramData.searchManPower,
        status: paramData.statusManPower,
        line_name: paramData.lineNameManPower,
        sort_val: paramData.sortManPower,
        is_assigned: paramData.assignedManPower,
    });

    const handleChangeParam = (e) => {
        setParamData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const onNextPage = (table) => {
        table === "ticketRelease"
            ? setParamData((prev) => ({
                  ...prev,
                  pageTicketRelease: prev.pageTicketRelease + 1,
              }))
            : table === "realtimeWork"
            ? setParamData((prev) => ({
                  ...prev,
                  pageRealtimeWork: prev.pageRealtimeWork + 1,
              }))
            : table === "manPower"
            ? setParamData((prev) => ({
                  ...prev,
                  pageManPower: prev.pageManPower + 1,
              }))
            : null;
    };
    const onPrevPage = (table) => {
        table === "ticketRelease"
            ? setParamData((prev) => ({
                  ...prev,
                  pageTicketRelease: prev.pageTicketRelease - 1,
              }))
            : table === "realtimeWork"
            ? setParamData((prev) => ({
                  ...prev,
                  pageRealtimeWork: prev.pageRealtimeWork - 1,
              }))
            : table === "manPower"
            ? setParamData((prev) => ({
                  ...prev,
                  pageManPower: prev.pageManPower - 1,
              }))
            : null;
    };

    const handleOpenModalFilter = (type) => {
        setModalFilter({ type: type, value: true });
    };

    const handleCloseModalFilter = () => {
        setModalFilter({ type: "", value: false });
    };

    const handleClickFilter = (e) => {
        e.preventDefault();
        console.log(e.target.ticket_status.value);
        modalFilter.type === "RealtimeTicket"
            ? setParamData((prev) => ({
                  ...prev,
                  sortTicketRelease: e.target[0].value ?? "",
                  ticketStatusTicketRelease: e.target[1].value ?? "",
                  lineIdTicketRelease: e.target[2].value ?? "",
              }))
            : modalFilter.type === "RealtimeWork"
            ? setParamData((prev) => ({
                  ...prev,
                  sortRealtimeWork: e.target[0].value ?? "",
                  ticketStatusRealtimeWork: e.target[1].value ?? "",
                  lineIdRealtimeWork: e.target[2].value ?? "",
              }))
            : modalFilter.type === "manPower"
            ? setParamData((prev) => ({
                  ...prev,
                  sortManPower: e.target.sort.value,
                  lineNameManPower: e.target.line.value,
                  statusManPower: e.target.status.value,
                  assignedManPower: e.target.assigned.value,
                  availabilityManPower: e.target.availability.value,
              }))
            : null;
        setModalFilter({ type: "", value: false });
    };

    // useEffect(() => {
    //     async function refresh() {
    //         await refetchTicket();
    //         await refetchRealtimeWork();
    //     }

    //     refresh();
    //     setSearchparam((prev) => ({ ...prev, ...paramData }));
    // }, [paramData]);
    return {
        responDataTicketRelease,
        responDataRealtimeWork,
        responManPower,
        paramData,
        onNextPage,
        onPrevPage,
        handleChangeParam,
        loadDataManPower,
        loadDataTicketRelease,
        loadDataRealtimeWork,
        modalFilter,
        handleClickFilter,
        handleOpenModalFilter,
        handleCloseModalFilter,
    };
}
