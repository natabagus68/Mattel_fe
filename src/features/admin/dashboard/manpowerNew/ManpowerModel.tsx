import React, { useEffect, useState } from 'react'
import { useGetRealtimeWorkQuery, useGetTicketReleaseQuery } from '../../../../app/services/dashboardservice'
import { useSearchParams } from 'react-router-dom'

export default function useManpowerModel() {

  const [modalFilter, setModalFilter] = useState({
    type: '',
    value: false
  })
  const [searchParam, setSearchparam] = useSearchParams()
  const [paramData, setParamData] = useState({
    pageTicketRelease: Number(searchParam.get('pageTicketRelease')) || 1,
    searchTicketRelease: searchParam.get('searchTicketRelease') || '',
    sortTicketRelease: searchParam.get('sortTicketRelease') || 'ASC',
    lineIdTicketRelease: searchParam.get('lineIdTicketRelease') || '',
    ticketStatusTicketRelease: searchParam.get('ticketStatusTicketRelease') || '',


    pageRealtimeWork: Number(searchParam.get('pageRealtimeWork')) || 1,
    searchRealtimeWork: searchParam.get('searchRealtimeWork') || '',
    sortRealtimeWork: searchParam.get('sortRealtimeWork') || 'ASC',
    lineIdRealtimeWork: searchParam.get('lineIdRealtimeWork') || '',
    ticketStatusRealtimeWork: searchParam.get('ticketStatusRealtimeWork') || '',

  })

  const { data: responDataTicketRelease = { data: [] }, isLoading: loadDataTicketRelease, refetch: refetchTicket } = useGetTicketReleaseQuery({ page: paramData.pageTicketRelease, search: paramData.searchTicketRelease })
  const { data: responDataRealtimeWork = { data: [] }, isLoading: loadDataRealtimeWork, refetch: refetchRealtimeWork } = useGetRealtimeWorkQuery({ page: paramData.pageRealtimeWork, search: paramData.searchRealtimeWork })


  const handleChangeParam = (e) => {
    setParamData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onNextPage = (table) => {
    table === 'ticketRelease' ?
      setParamData(prev => ({ ...prev, pageTicketRelease: prev.pageTicketRelease + 1 }))
      : table === 'realtimeWork' ?
        setParamData(prev => ({ ...prev, pageRealtimeWork: prev.pageRealtimeWork + 1 }))
        : null
  }
  const onPrevPage = (table) => {
    table === 'ticketRelease' ?
      setParamData(prev => ({ ...prev, pageTicketRelease: prev.pageTicketRelease - 1 }))
      : table === 'realtimeWork' ?
        setParamData(prev => ({ ...prev, pageRealtimeWork: prev.pageRealtimeWork - 1 }))
        : null
  }

  const handleOpenModalFilter = (type) => {
    setModalFilter({ type: type, value: true })
  }

  const handleCloseModalFilter = () => {
    setModalFilter({ type: '', value: false })
  }

  const handleClickFilter = (e) => {
    e.preventDefault()

    modalFilter.type === 'RealtimeTicket' ?
      setParamData(prev => ({
        ...prev,
        sortTicketRelease: e.target[0].value ?? '',
        ticketStatusTicketRelease: e.target[1].value ?? '',
        lineIdTicketRelease: e.target[2].value ?? '',
      }))
      : modalFilter.type === 'RealtimeWork' ?
        setParamData(prev => ({
          ...prev,
          sortRealtimeWork: e.target[0].value ?? '',
          ticketStatusRealtimeWork: e.target[1].value ?? '',
          lineIdRealtimeWork: e.target[2].value ?? '',
        })) : null
    setModalFilter({ type: '', value: false })
  }

  useEffect(() => {
    async function refresh() {
      await refetchTicket();
      await refetchRealtimeWork();
    }
    refresh();

    setSearchparam((prev) => ({ ...prev, ...paramData }))
  }, [paramData])
  return {
    responDataTicketRelease,
    responDataRealtimeWork,
    paramData,
    onNextPage,
    onPrevPage,
    handleChangeParam,
    loadDataTicketRelease,
    loadDataRealtimeWork,
    modalFilter,
    handleClickFilter,
    handleOpenModalFilter,
    handleCloseModalFilter
  }
}
