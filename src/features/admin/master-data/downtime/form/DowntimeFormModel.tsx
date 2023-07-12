import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDeleteDowntimeMutation, useGetDowntimeDetailQuery, useStoreDowntimeMutation, useUpdateDowntimeMutation } from '../../../../../app/services/downtimeServices'

export default function useDowntimeFormModel() {
    let { id } = useParams()
    const navigate = useNavigate()
    const [modalConfirm, setModalConfirm] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)

    const { data: responDataDowntime = { data: [] }, refetch} =  useGetDowntimeDetailQuery(id, {skip : id ? false : true})

    const [storeDowntime, resultStore] = useStoreDowntimeMutation()
    const [updateDowntime, resultUpdate] = useUpdateDowntimeMutation()

    const initialValue = {
        downtime_reason: '',
        standard_repair_time : ''
    }

    const [formData, setFormData] = useState(initialValue)

    const handleChangeForm = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleBack = () => {
        navigate(-1)
    }
    const onConfirm = async() => {
        updateDowntime({id : id, form : formData})
        await refetch()
        setModalConfirm(false)
        setModalSuccess(true)
    }
    const handleSave = async (e) => {
        e.preventDefault()
        id ? (
            setModalConfirm(true)
        ) : (
            storeDowntime(formData),
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
        responDataDowntime? 
            setFormData({"downtime_reason": responDataDowntime.data.downtime_reason, "standard_repair_time" : responDataDowntime.data.standard_repair_time})
        : setFormData(initialValue)
    },[responDataDowntime.data.downtime_reason])

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
        responDataDowntime
    }
}
