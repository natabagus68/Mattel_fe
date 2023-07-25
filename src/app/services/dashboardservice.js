import { apiSlice } from "../../features/api/apiSlice";

export const dashboardApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // general
        getHourlytrend: builder.query({
            query: () => `admin/dashboard/general/downtime-trend`
        }),
        getTopFiveResponseSUM: builder.query({
            query: ({ startDate = new Date(), endDate = new Date() }) => `admin/dashboard/general/top-5-sum-slowest-response?startDate=${startDate}&endDate=${endDate}`
        }),
        getTopFiveResponseAVG: builder.query({
            query: ({ startDate = new Date(), endDate = new Date() }) => `dashboard/general/top-5-avg-slowest-response?startDate=${startDate}&endDate=${endDate}`
        }),
        getTopFiveRepairSum: builder.query({
            query: ({ startDate = new Date(), endDate = new Date() }) => `admin/dashboard/general/top-5-sum-slowest-repair?startDate=${startDate}&endDate=${endDate}`
        }),
        getFiveTopRepairAVG: builder.query({
            query: ({ startDate = new Date(), endDate = new Date() }) => `admin/dashboard/general/top-5-avg-slowest-repair?startDate=${startDate}&endDate=${endDate}`
        }),
        // Line
        getLineMonitoring: builder.query({
            query: ({
                maintenance = false,
                material = false,
                material2 = false,
                layout = false,
            }) => `admin/dashboard/line-monitoring?maintenance=${maintenance ? '1' : '0'}&material=${material ? '1' : '0'}&material2=${material2 ? '1' : '0'}&layout=${layout ? '1' : '0'}`
        }),

        // Machine Problem
        getFiveAvgSlowestRepair: builder.query({
            query: ({ line_id = '', machine_id = '', year = '', month = '' }) => `admin/dashboard/machine-problem/top-5-avg-slowest-repair?line_id=${line_id}&machine_id=${machine_id}&year=${year}&month=${month}`,
            providesTags: ['fiveAvgRespose']
        }),
        getFiveAvgSlowestResponse: builder.query({
            query: ({ line_id = '', machine_id = '', year = '', month = '' }) => `admin/dashboard/machine-problem/top-5-avg-slowest-response?line_id=${line_id}&machine_id=${machine_id}&year=${year} & month=${month}`,
            providesTags: ['fiveAvgRespose']
        }),
        getFiveAvgDowntime: builder.query({
            query: ({ line_id = '', machine_id = '', year = '', month = '' }) => `admin/dashboard/machine-problem/top-5-avg-downtime?line_id=${line_id}&machine_id=${machine_id}&year=${year}&month=${month}`,
            providesTags: ['fiveAvgRespose']
        }),
        getFiveTotalDowntime: builder.query({
            query: ({ line_id = '', machine_id = '', year = '', month = '' }) => `admin/dashboard/machine-problem/top-5-total-downtime?line_id=${line_id}&machine_id=${machine_id}&year=${year}&month=${month}`,
            providesTags: ['fiveAvgRespose']
        }),

        // Manpower
        getTicketRelease: builder.query({
            query: ({ page = 1, limit = 10, search = '', ticket_status = '', line_id = '', table_name = 'UpdatedAt', sort_val = 'DESC' }) => `admin/dashboard/manpower/real-time-ticket?page=${page}&limit=${limit}&search=${search}&ticket_status=${ticket_status}&line_id=${line_id}&table_name=${table_name}& sort_val=${sort_val}`,
            providesTags: ['TikcetRelease']
        }),
        getRealtimeWork: builder.query({
            query: ({ page = 1, limit = 10, search = '', ticket_status = '', line_id = '', table_name = 'UpdatedAt', sort_val = 'DESC' }) => `admin/dashboard/manpower/real-time-work-order?page=${page}&limit=${limit}&search=${search}&ticket_status=${ticket_status}&line_id=${line_id}&table_name=${table_name}&sort_val=${sort_val}`,
            providesTags: ['Realtime']
        }),
        getManPower: builder.query({
            query: ({ page = 1, limit = 10, search = '', status = '', is_assigned = '', line_name = '', availability = '', table_name = 'UpdatedAt', sort_val = 'DESC' }) => `admin/dashboard/manpower/employee?page=${page}&limit=${limit}&search=${search}&status=${status}&line_name=${line_name}&is_assigned=${is_assigned}&table_name=${table_name}&sort_val=${sort_val}&availability=${availability}`,
            providesTags: ['ManPower']
        }),
        getManPowerCount: builder.query({
            query: () => `admin/dashboard/manpower/count`,
            providesTags: ["ManPowerCount"]
        })
    }),
})

export const {
    useGetLineMonitoringQuery,
    useGetFiveAvgSlowestRepairQuery,
    useGetFiveAvgSlowestResponseQuery,
    useGetFiveAvgDowntimeQuery,
    useGetFiveTotalDowntimeQuery,
    useGetTicketReleaseQuery,
    useGetRealtimeWorkQuery,
    useGetManPowerQuery,
    useGetManPowerCountQuery,
    useGetTopFiveResponseSUMQuery,
    useGetTopFiveResponseAVGQuery,
    useGetTopFiveRepairSumQuery,
    useGetFiveTopRepairAVGQuery,
} = dashboardApiSlice