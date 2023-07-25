import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCreateLineDeviceMutation, useGetLineDeviceDetailQuery, useUpdateLineDeviceMutation } from '../../../../../app/services/lineDeviceService'
import moment from 'moment'

export default function useLineDeviceFormModel() {
    let { id } = useParams()
    const navigate = useNavigate()
    const [modalConfirm, setModalConfirm] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)

    const { data: responDataLineDevice = { data: [] }, refetch } = useGetLineDeviceDetailQuery(id, { skip: id ? false : true })

    const [storeLine, resultStore] = useCreateLineDeviceMutation()
    const [updateLine, resultUpdate] = useUpdateLineDeviceMutation()

    const initialValue = {
        name: ''
    }

    const [formData, setFormData] = useState(initialValue)

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


    const handleChangeForm = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleBack = () => {
        navigate(-1)
    }
    const onConfirm = async () => {
        updateLine({ id: id, form: formData })
        await refetch()
        setModalConfirm(false)
        setModalSuccess(true)
    }
    const handleSave = async (e) => {
        e.preventDefault()
        id ? (
            setModalConfirm(true)
        ) : (
            storeLine(formData),
            setModalSuccess(true)
        )
    }
    const handleCloseModal = () => {
        setModalConfirm(false)
        setModalSuccess(false)
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
        responDataLineDevice ?
            setFormData({ "name": responDataLineDevice.data.name })
            : setFormData(initialValue)
    }, [responDataLineDevice.data.name])

    useEffect(() => {
        handleShift()
    }, [])

    return {
        id,
        modalConfirm,
        modalSuccess,
        handleBack,
        handleCloseModal,
        handleSave,
        formData,
        handleChangeForm,
        onConfirm,
        responDataLineDevice,
        shiftData
    }
}
