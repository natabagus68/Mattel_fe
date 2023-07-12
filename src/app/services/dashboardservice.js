import { apiSlice } from "../../features/api/apiSlice";

export const dashboardApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getLineMonitoring : builder.query({
            query : () => `admin/dashboard/line-monitoring`,
            providesTags : ['LineMonitor']
        }),
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
    }),
})

export const {
    useGetLineMonitoringQuery,
    useGetFiveAvgSlowestRepairQuery,
    useGetFiveAvgSlowestResponseQuery,
    useGetFiveAvgDowntimeQuery,
    useGetFiveTotalDowntimeQuery,
} = dashboardApiSlice