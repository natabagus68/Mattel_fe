import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetToyDetailQuery, useStoreToyNumberMutation, useUpdateToyNumberMutation } from '../../../../../app/services/ToysServices'

export default function useToyFormModel() {
    let { id } = useParams()
    const navigate = useNavigate()
    const [modalConfirm, setModalConfirm] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)

    const { data: responDataToys = { data: [] }, refetch} =  useGetToyDetailQuery(id, {skip : id ? false : true})

    const [storeToy, resultStore] = useStoreToyNumberMutation()
    const [updateToy, resultUpdate] = useUpdateToyNumberMutation()

    const initialValue = {
        number: ''
    }

    const [formData, setFormData] = useState(initialValue)

    const handleChangeForm = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleBack = () => {
        navigate(-1)
    }
    const onConfirm = async() => {
        updateToy({id : id, form : formData})
        await refetch()
        setModalConfirm(false)
        setModalSuccess(true)
    }
    const handleSave = async (e) => {
        e.preventDefault()
        id ? (
            setModalConfirm(true)
        ) : (
            storeToy(formData),
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
        responDataToys? 
            setFormData({"number": responDataToys.data.number})
        : setFormData(initialValue)
    },[responDataToys.data.number])

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
        responDataToys
    }
}
