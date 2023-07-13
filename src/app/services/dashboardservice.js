import { apiSlice } from "../../features/api/apiSlice";

export const dashboardApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        // Line
        getLineMonitoring : builder.query({
            query : () => `admin/dashboard/line-monitoring`,
            providesTags : ['LineMonitor']
        }),

        // Machine Problem
        getFiveAvgSlowestRepair : builder.query({
            query : ({line_id = '', machine_id = '', year = '', month = ''}) => `admin/dashboard/machine-problem/top-5-avg-slowest-repair?line_id=${line_id}&machine_id=${machine_id}&year=${year}&month=${month}`,
            providesTags : ['fiveAvgRespose']
        }),
        getFiveAvgSlowestResponse : builder.query({
            query : ({line_id = '', machine_id = '', year = '', month = ''}) => `admin/dashboard/machine-problem/top-5-avg-slowest-response?line_id=${line_id}&machine_id=${machine_id}&year=${year}&month=${month}`,
            providesTags : ['fiveAvgRespose']
        }),
        getFiveAvgDowntime : builder.query({
            query : ({line_id = '', machine_id = '', year = '', month = ''}) => `admin/dashboard/machine-problem/top-5-avg-downtime?line_id=${line_id}&machine_id=${machine_id}&year=${year}&month=${month}`,
            providesTags : ['fiveAvgRespose']
        }),
        getFiveTotalDowntime : builder.query({
            query : ({line_id = '', machine_id = '', year = '', month = ''}) => `admin/dashboard/machine-problem/top-5-total-downtime?line_id=${line_id}&machine_id=${machine_id}&year=${year}&month=${month}`,
            providesTags : ['fiveAvgRespose']
        }),

        // Manpower
        getTicketRelease : builder.query({
            query : ({page = 1, limit = 10, search = '', ticket_status = '', line_id = '', table_name = 'UpdatedAt', sort_val = 'DESC'}) => `admin/dashboard/manpower/real-time-ticket?page=${page}&limit=${limit}&search=${search}&ticket_status=${ticket_status}&line_id=${line_id}&table_name=${table_name}&sort_val=${sort_val}`,
            providesTags : ['TikcetRelease']
        }),
        getRealtimeWork : builder.query({
            query : ({page = 1, limit = 10, search = '', ticket_status = '', line_id = '', table_name = 'UpdatedAt', sort_val = 'DESC'}) => `admin/dashboard/manpower/real-time-work-order?page=${page}&limit=${limit}&search=${search}&ticket_status=${ticket_status}&line_id=${line_id}&table_name=${table_name}&sort_val=${sort_val}`,
            providesTags : ['Realtime']
        }),
    }),
})

export const {
    useGetLineMonitoringQuery,
    useGetFiveAvgSlowestRepairQuery,
    useGetFiveAvgSlowestResponseQuery,
    useGetFiveAvgDowntimeQuery,
    useGetFiveTotalDowntimeQuery,
    useGetTicketReleaseQuery,
    useGetRealtimeWorkQuery
} = dashboardApiSlice