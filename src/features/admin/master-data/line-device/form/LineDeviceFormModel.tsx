import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCreateLineDeviceMutation, useGetLineDeviceDetailQuery, useUpdateLineDeviceMutation } from '../../../../../app/services/lineDeviceService'

export default function useLineDeviceFormModel() {
    let { id } = useParams()
    const navigate = useNavigate()
    const [modalConfirm, setModalConfirm] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)

    const { data: responDataLineDevice = { data: [] }, refetch} =  useGetLineDeviceDetailQuery(id, {skip : id ? false : true})

    const [storeLine, resultStore] = useCreateLineDeviceMutation()
    const [updateLine, resultUpdate] = useUpdateLineDeviceMutation()

    const initialValue = {
        name: ''
    }

    const [formData, setFormData] = useState(initialValue)

    const handleChangeForm = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleBack = () => {
        navigate(-1)
    }
    const onConfirm = async() => {
        updateLine({id : id, form : formData})
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

    useEffect(()=> {
        async function refresh() {
            id ?
            await refetch()
            : null
          }
          refresh();
    },[id])

    useEffect(() => {
        responDataLineDevice? 
            setFormData({"name": responDataLineDevice.data.name})
        : setFormData(initialValue)
    },[responDataLineDevice.data.name])

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
        responDataLineDevice
    }
}
