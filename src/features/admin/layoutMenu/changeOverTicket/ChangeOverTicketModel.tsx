import React, { useEffect, useState } from 'react'
import { useGetLayoutsQuery } from '../layoutApiSlice';
import { useSearchParams } from 'react-router-dom';
import moment from 'moment'

export default function useChangeOverTicketModel() {
  const [searchParam, setSearchparam] = useSearchParams()
  const [layoutParam, setLayoutParam] = useState({
    page: Number(searchParam.get("page")) || 1,
    production_sch: searchParam.get("production_sch") || "",
    week_ending: moment().endOf('week').format('YYYY-MM-DD'),
    production_shift: searchParam.get("production_shift") || "",
    preparation_shift: searchParam.get("preparation_shift") || "",
  }
  )
  const handleProductionSchDate = (value) => {
    setLayoutParam(prev => ({ ...prev, production_sch: value }))
  }

  const handleProductionShift = (value) => {
    setLayoutParam(prev => ({ ...prev, production_shift: value }))
  }

  const handlePreparationShift = (value) => {
    setLayoutParam(prev => ({ ...prev, preparation_shift: value }))
  }

  const { data: LayoutData = { data: [] }, refetch } = useGetLayoutsQuery(layoutParam.page, layoutParam.week_ending, layoutParam.production_sch, layoutParam.production_shift, layoutParam.preparation_shift)

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
  return {
    LayoutData,
    layoutParam,
    handlePreparationShift,
    handleProductionSchDate,
    handleProductionShift,
    onNextPage,
    onPrevPage
  }
}
