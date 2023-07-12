import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCreatePartMutation, useGetPartsDetailQuery, useUpdatePartMutation } from '../../../../../app/services/partService'

export default function useMachinePartFormModel() {
    let { id } = useParams()
    const navigate = useNavigate()
    const [modalConfirm, setModalConfirm] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)

    const { data: responDataMachinePart = { data: [] }, refetch} =  useGetPartsDetailQuery(id, {skip : id ? false : true})

    const [storePart, resultStore] = useCreatePartMutation()
    const [updatePart, resultUpdate] = useUpdatePartMutation()

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
        updatePart({id : id, form : formData})
        await refetch()
        setModalConfirm(false)
        setModalSuccess(true)
    }
    const handleSave = async (e) => {
        e.preventDefault()
        id ? (
            setModalConfirm(true)
        ) : (
            storePart(formData),
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
        responDataMachinePart? 
            setFormData({"name": responDataMachinePart.data.name})
        : setFormData(initialValue)
    },[responDataMachinePart.data.name])

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
        responDataMachinePart
    }
}
