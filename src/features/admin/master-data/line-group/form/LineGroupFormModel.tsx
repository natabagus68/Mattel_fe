import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCreateLineGroupMutation, useGetLineGroupDetailQuery, useUpdateLineGroupMutation } from '../../../../../app/services/lineGroupService'

export default function useLineGroupFormModel() {
    let { id } = useParams()
    const navigate = useNavigate()
    const [modalConfirm, setModalConfirm] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)

    const { data: responDataLineGroup = { data: [] }, refetch} =  useGetLineGroupDetailQuery(id, {skip : id ? false : true})

    const [storeLine, resultStore] = useCreateLineGroupMutation()
    const [updateLine, resultUpdate] = useUpdateLineGroupMutation()

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
        responDataLineGroup? 
            setFormData({"name": responDataLineGroup.data.name})
        : setFormData(initialValue)
    },[responDataLineGroup.data.name])

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
        responDataLineGroup
    }
}
