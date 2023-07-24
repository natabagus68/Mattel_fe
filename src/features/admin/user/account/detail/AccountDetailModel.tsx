import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetUserDetailQuery } from '../accountApiSlice'
import moment from 'moment'

export default function useAccountDetailModel() {
    let { id } = useParams()
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
        new_password: '',
        confirm_password: ''
    }
    const [formPassword, setFormPasswrod] = useState(initialValue)


    const [shiftData, setShiftData] = useState("")

    const handleShift = () => {
        const currentTime = moment();
        const shift1Start = moment().set({ hour: 22, minute: 40 });
        const shift2Start = moment().set({ hour: 7, minute: 10 });
        const shift3Start = moment().set({ hour: 15, minute: 40 });

        if (currentTime.isAfter(shift1Start) && currentTime.isBefore(shift2Start) || currentTime.isSame(shift1Start)) {
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

    const handleOpenModal = () => {
        setModalChangePassword(true)
    }
    const handleCloseModal = () => {
        setModalChangePassword(false)
    }

    const handleChangeForm = (e) => {
        setFormPasswrod(prev => ({ ...prev, [e.target.name]: e.target.value }))
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

    useEffect(() => {
        handleShift()
    }, [])

    return {
        responDataUser,
        modalChangePassword,
        formPassword,
        handleChangeForm,
        handleCloseModal,
        handleOpenModal,
        onUpdatePassword,
        handleBack,
        handleEdit,
        shiftData
    }
}
