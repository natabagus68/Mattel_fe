
import React, { useEffect, useState } from 'react'
import { useGetLayoutsQuery } from '../layoutApiSlice';
import { useSearchParams } from 'react-router-dom';
import moment from 'moment'


export default function useChangeOverSummaryModel() {

  const [searchParam, setSearchparam] = useSearchParams()
  const [layoutParam, setLayoutParam] = useState({
    page: Number(searchParam.get("page")) || 1,
    production_sch: searchParam.get("production_sch") || "",
    week_ending: moment().endOf('week').format('YYYY-MM-DD'),
    production_shift: searchParam.get("production_shift") || "",
    preparation_shift: searchParam.get("preparation_shift") || "",
  }
  )

  const [shiftData, setShiftData] = useState("")

  const handleShift = () => {
    const currentTime = moment();
    const shift1Start = moment().set({ hour: 22, minute: 40 });
    const shift1Continues = moment().set({ hour: 0, minute: 0 });
    const shift2Start = moment().set({ hour: 7, minute: 10 });
    const shift3Start = moment().set({ hour: 15, minute: 40 });


    if (currentTime.isAfter(shift1Start) && currentTime.isBefore(shift2Start) || currentTime.isAfter(shift1Continues) && currentTime.isBefore(shift2Start) || currentTime.isSame(shift1Start)) {
      setShiftData("Shift 1");
    } else if (currentTime.isAfter(shift2Start) && currentTime.isBefore(shift3Start) || currentTime.isSame(shift2Start)) {
      setShiftData("Shift 2");
    } else if (currentTime.isAfter(shift3Start) && currentTime.isBefore(shift1Start) || currentTime.isSame(shift3Start)) {
      setShiftData("Shift 3");
    } else {
      // If none of the shifts match, return a default value
      setShiftData("Unknown Shift");
    }
  };

  const handleProductionSchDate = (value) => {
    setLayoutParam(prev => ({ ...prev, production_sch: value }))
  }

  const handleProductionShift = (value) => {
    setLayoutParam(prev => ({ ...prev, production_shift: value }))
  }

  const handlePreparationShift = (value) => {
    setLayoutParam(prev => ({ ...prev, preparation_shift: value }))
  }

  const { data: LayoutData = { data: [] }, refetch } = useGetLayoutsQuery({ page: layoutParam.page, production_sch: layoutParam.production_sch, week_ending: layoutParam.week_ending, production_shift: layoutParam.production_shift, preparation_shift: layoutParam.preparation_shift })

  const onPrevPage = () => {
    setLayoutParam(prev => ({ ...prev, page: prev.page - 1 }))
  }

  const onNextPage = () => {
    setLayoutParam(prev => ({ ...prev, page: prev.page + 1 }))
  }

  useEffect(() => {
    async function refresh() {
      await refetch();
    }
    refresh();
    setSearchparam((prev) => ({ ...prev, ...layoutParam }))
  }, [layoutParam]);

  useEffect(() => {
    handleShift()
  }, [])

  return {
    LayoutData,
    layoutParam,
    handlePreparationShift,
    handleProductionSchDate,
    handleProductionShift,
    onNextPage,
    onPrevPage,
    shiftData
  }
}
