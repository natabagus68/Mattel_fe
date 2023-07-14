import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetUserDetailQuery } from '../accountApiSlice'

export default function useAccountDetailModel() {
    let {id} = useParams()
    const navigate = useNavigate()
    const [modalChangePassword, setModalChangePassword] = useState(false)

    const { data: responDataUser = { data: [] }, refetch } = useGetUserDetailQuery(id, { skip: id ? false : true })

    const handleBack = () => {
        navigate(-1)
    }

    const handleEdit = () => {
        navigate(`../user/account/${id}/edit`)
    }

    const initialValue = {
        new_password : '',
        confirm_password : ''
    }
    const [formPassword, setFormPasswrod] = useState(initialValue)

    const handleOpenModal = () => {
        setModalChangePassword(true)
    }
    const handleCloseModal = () => {
        setModalChangePassword(false)
    }

    const handleChangeForm = (e) => {
        setFormPasswrod(prev => ({...prev, [e.target.name] : e.target.value}))
    }

    const onUpdatePassword = (e) => {
        e.preventDefault()
        alert(`berhasil`)
    }

    useEffect(() => {
        async function refresh() {
            id ?
                await refetch()
                : null
        }
        refresh();
    }, [id])
  return {
    responDataUser,
    modalChangePassword,
    formPassword,
    handleChangeForm,
    handleCloseModal,
    handleOpenModal,
    onUpdatePassword,
    handleBack,
    handleEdit
  }
}
