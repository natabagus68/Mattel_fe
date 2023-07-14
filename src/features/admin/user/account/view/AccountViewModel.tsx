import React, { useEffect, useState } from 'react'
import { useGetUsersQuery, useVerifyUserMutation } from '../accountApiSlice'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function useAccountViewModel() {
    const navigate = useNavigate()
    const [modalDelete, setModalDelete] = useState(false)
    const [deleteIdSelected, setDeleteIdSelected] = useState(null)

    const [searchParam, setSearchparam] = useSearchParams()
    const [paramData, setParamData] = useState({
        page : Number(searchParam.get('page')) || 1,
        search : searchParam.get('search') || '',
        sort : searchParam.get('sort') || 'Name_ASC',
        role : searchParam.get('role') || ''
    })

    const {data : responDataUser = { data : [] }, isLoading, refetch : refetchUser} = useGetUsersQuery({page : paramData.page, limit : 10, q : paramData.search, sort_val : paramData.sort.split('_')[1], table_name : paramData.sort.split('_')[0]})
    const [verifyUser, resultVerify] = useVerifyUserMutation()
    // const [deleteMachineCategory, resultDelete] = useDeleteU()

    const handleChangeParam = (e) => {
        setParamData(prev => ({...prev, [e.target.name] : e.target.value}))
    }

    const onNextPage = () => {
        setParamData(prev => ({...prev, page : prev.page + 1}))
    }
    const onPrevPage = () => {
        setParamData(prev => ({...prev, page : prev.page - 1}))
    }

    const handleDetail = (id) => {
        navigate(`${id}/detail`)
    } 

    const handleEdit = (id) => {
        navigate(`${id}/edit`)
    } 

    const handleAdd = () => {
        navigate(`add`)
    }

    const handleVerifiedUser = async(id) => {
        await verifyUser(id)
        await refetchUser()
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
        // deleteMachineCategory(deleteIdSelected)
        alert(`delete`)
        await refetchUser()
    }

    useEffect(()=> {
        async function refresh() {
            await refetchUser();
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
        responDataUser,
        refetchUser,
        handleChangeParam,
        paramData,
        onNextPage,
        onPrevPage,
        isLoading,
        handleVerifiedUser,
        handleDetail
      }
}
