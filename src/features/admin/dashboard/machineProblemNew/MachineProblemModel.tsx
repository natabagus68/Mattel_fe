import React, { useEffect, useState } from 'react'
import { useGetFiveAvgDowntimeQuery, useGetFiveAvgSlowestRepairQuery, useGetFiveAvgSlowestResponseQuery, useGetFiveTotalDowntimeQuery } from '../../../../app/services/dashboardservice'

export default function useMachineProblemModel() {

    const { data: slowestRepair = { data: [] }, refetch : refetchSlowestRepair} =  useGetFiveAvgSlowestRepairQuery({})
    const { data: slowestResponse = { data: [] }, refetch : refetchSlowestResponse} =  useGetFiveAvgSlowestResponseQuery({})
    const { data: avgDowntime = { data: [] }, refetch : refetchAvgDowntime } =  useGetFiveAvgDowntimeQuery({})
    const { data: totalDowntime = { data: [] }, refetch : refetchTotalDowntime } =  useGetFiveTotalDowntimeQuery({})

    const [datasetSlowestRepair, setDatasetSlowestRepair] = useState<any>([])


    const insertToDatasetRepair = (data = slowestRepair?.data) => {
        setDatasetSlowestRepair([])
        data?.forEach((item,i) => {
            item.donwtime_duration.map(value => {
                setDatasetSlowestRepair(prev => [...prev,{
                    name : value.downtime_name,
                    val : value.avg_of_repair_time,
                    color : color[i]
                }])
            })
            data.length-1 !== i ?
                setDatasetSlowestRepair(prev => [...prev,{
                    name : '',
                    val : null,
                    color :''
                }])
            : null
        })
    }

    const dumyData = [
        {
            machine_name: "A1",
            donwtime_duration: [
                {
                    downtime_name: "Pin Panjang Pendek",
                    avg_of_repair_time: 1
                },
                {
                    downtime_name: "Pin Panjang Pendek",
                    avg_of_repair_time: 1
                },
                {
                    downtime_name: "Pin Panjang Pendek",
                    avg_of_repair_time: 2
                }
            ]
        },
        {
            machine_name: "A2",
            donwtime_duration: [
                {
                    downtime_name: "Over Heat",
                    avg_of_repair_time: 3
                },
                {
                    downtime_name: "Bla blaa",
                    avg_of_repair_time: 6
                },
                {
                    downtime_name: "Over Heat",
                    avg_of_repair_time: 3
                },
                {
                    downtime_name: "Over Heat",
                    avg_of_repair_time: 4
                },
                {
                    downtime_name: "Over Heat",
                    avg_of_repair_time: 5
                },
            ]
        },
        {
            machine_name: "A2",
            donwtime_duration: [
                {
                    downtime_name: "Over Heat",
                    avg_of_repair_time: 3
                },
                {
                    downtime_name: "Bla blaa",
                    avg_of_repair_time: 6
                },
                {
                    downtime_name: "Over Heat",
                    avg_of_repair_time: 3
                },
                {
                    downtime_name: "Over Heat",
                    avg_of_repair_time: 4
                },
                {
                    downtime_name: "Over Heat",
                    avg_of_repair_time: 5
                },
            ]
        },
        {
            machine_name: "A2",
            donwtime_duration: [
                {
                    downtime_name: "Over Heat",
                    avg_of_repair_time: 3
                },
            ]
        },
        {
            machine_name: "A2",
            donwtime_duration: [
                {
                    downtime_name: "Over Heat",
                    avg_of_repair_time: 3
                },
                {
                    downtime_name: "Over Heat",
                    avg_of_repair_time: 3
                },
            ]
        }
    ]


const arrDumy : any[] = []
const color = ['#4D74B2', "#F9A63A", "#43ADA2","#F36960", '#858D9D']


dumyData.forEach((item,i) => {
    item.donwtime_duration.map(value => {
        arrDumy.push({
            name : value.downtime_name,
            val : value.avg_of_repair_time,
            color : color[i]
        })
    })
    dumyData.length-1 !== i ?
        arrDumy.push({
            name : '',
            val : null,
            color :''
        })
    : null
})

useEffect(()=> {
    insertToDatasetRepair()
},[slowestRepair.data.length])

useEffect(()=> {
    async function refresh() {
        await refetchSlowestRepair()
        await refetchSlowestResponse()
        await refetchAvgDowntime()
        await refetchTotalDowntime()
      }
      refresh();
},[])

  return {
    slowestRepair,
    slowestResponse,
    avgDowntime,
    totalDowntime,
    dumyData,
    arrDumy,
    datasetSlowestRepair
  }
}
