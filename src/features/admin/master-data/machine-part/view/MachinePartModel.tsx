import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDeletePartMutation, useGetPartsQuery } from '../../../../../app/services/partService'

export default function useMachinePartModel() {
    const navigate = useNavigate()
    const [modalDelete, setModalDelete] = useState(false)
    const [deleteIdSelected, setDeleteIdSelected] = useState(null)

    const [searchParam, setSearchparam] = useSearchParams()
    const [paramData, setParamData] = useState({
        page : Number(searchParam.get('page')) || 1,
        search : searchParam.get('search') || '',
        sort : searchParam.get('sort') || 'Name_ASC',
    })

    const {data : responDataMachinePart = { data : [] }, isLoading, refetch : refetchMachinePart} = useGetPartsQuery({page : paramData.page, limit : 10, q : paramData.search, sort_val : paramData.sort.split('_')[1], table_name : paramData.sort.split('_')[0]})
    const [deleteMachinePart, resultDelete] = useDeletePartMutation()

    const handleChangeParam = (e) => {
        setParamData(prev => ({...prev, [e.target.name] : e.target.value}))
    }

    const onNextPage = () => {
        setParamData(prev => ({...prev, page : prev.page + 1}))
    }
    const onPrevPage = () => {
        setParamData(prev => ({...prev, page : prev.page - 1}))
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
    const onDelete = async() => {
        deleteMachinePart(deleteIdSelected)
        await refetchMachinePart()
    }

    useEffect(()=> {
        async function refresh() {
            await refetchMachinePart();
          }
          refresh();
        
        //   @ts-ignore
          setSearchparam((prev) => ({...prev, ...paramData}))
    }, [paramData])

  return {
    modalDelete,
    handleAdd,
    handleEdit,
    handleDelete,
    handleCancelDelete,
    onDelete,
    responDataMachinePart,
    refetchMachinePart,
    handleChangeParam,
    paramData,
    onNextPage,
    onPrevPage,
    isLoading
  }
}
