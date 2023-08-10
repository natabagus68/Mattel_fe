
import React, { useEffect, useState } from 'react'
import { useDeleteLayoutMutation, useGetLayoutsQuery } from '../../layoutApiSlice';
import { useNavigate, useSearchParams } from 'react-router-dom';
import moment from 'moment'


export default function useChangeOverSummaryModel() {
  const navigate = useNavigate()

  const [searchParam, setSearchparam] = useSearchParams()
  const [layoutParam, setLayoutParam] = useState({
    page: Number(searchParam.get("page")) || 1,
    production_sch: searchParam.get("production_sch") || "",
    preparation_sch: searchParam.get("preparation_sch") || "",
    week_ending: moment().endOf('week').format('YYYY-MM-DD'),
    production_shift: searchParam.get("production_shift") || "",
    preparation_shift: searchParam.get("preparation_shift") || "",
    ticket_status: searchParam.get("ticket_status") || "",
  }
  )

  const [modalDelete, setModalDelete] = useState(false)
  const [deleteIdSelected, setDeleteIdSelected] = useState(null)
  const [deleteLayout, resultDelete] = useDeleteLayoutMutation()



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

  const handlePreparationSchDate = (value) => {
    setLayoutParam(prev => ({ ...prev, preparation_sch: value }))
  }
  const handleProductionShift = (value) => {
    setLayoutParam(prev => ({ ...prev, production_shift: value }))
  }
  const handleStatus = (value) => {
    setLayoutParam(prev => ({ ...prev, ticket_status: value }))
  }

  const handlePreparationShift = (value) => {
    setLayoutParam(prev => ({ ...prev, preparation_shift: value }))
  }

  const { data: LayoutData = { data: [] }, isLoading, refetch: refetch } = useGetLayoutsQuery({ page: layoutParam.page, production_sch: layoutParam.production_sch, week_ending: layoutParam.week_ending, production_shift: layoutParam.production_shift, preparation_shift: layoutParam.preparation_shift, ticket_status: layoutParam.ticket_status })

  const onPrevPage = () => {
    setLayoutParam(prev => ({ ...prev, page: prev.page - 1 }))
  }

  const onNextPage = () => {
    setLayoutParam(prev => ({ ...prev, page: prev.page + 1 }))
  }

  const handleEdit = (id) => {
    navigate(`${id}/edit`)
  }

  const handleAdd = () => {
    navigate(`add`)
  }

  const handleDelete = (id) => {
    setDeleteIdSelected(id)
    setModalDelete(true)
  }
  const handleCancelDelete = () => {
    setDeleteIdSelected(null)
    setModalDelete(false)
  }
  const onDelete = async () => {
    deleteLayout(deleteIdSelected)
    await refetch()
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
    isLoading,
    handlePreparationShift,
    handleProductionSchDate,
    handlePreparationSchDate,
    handleProductionShift,
    handleStatus,
    onNextPage,
    onPrevPage,
    handleAdd,
    handleEdit,
    handleDelete,
    onDelete,
    modalDelete,
    handleCancelDelete,
    shiftData
  }
}
