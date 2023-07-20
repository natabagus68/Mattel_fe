import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCreateMachineCategoryMutation, useGetMachineCategoryDetailQuery, useUpdateMachineCategoryMutation } from '../../../../../app/services/machineCategoryService'

export default function useMachineCategoryFormModel() {
    let { id } = useParams()
    const navigate = useNavigate()
    const [modalConfirm, setModalConfirm] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)

    const { data: responDataMachineCategory = { data: [] }, refetch } = useGetMachineCategoryDetailQuery(id, { skip: id ? false : true })

    const [storeMachineCategory, resultStore] = useCreateMachineCategoryMutation()
    const [updateMachineCategory, resultUpdate] = useUpdateMachineCategoryMutation()

    const initialValue = {
        name: '',
        abbreviation: ''
    }

    const [formData, setFormData] = useState(initialValue)

    const handleChangeForm = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleBack = () => {
        navigate(-1)
    }
    const onConfirm = async () => {
        updateMachineCategory({ id: id, form: formData })
        await refetch()
        setModalConfirm(false)
        setModalSuccess(true)
    }
    const handleSave = async (e) => {
        e.preventDefault()
        id ? (
            setModalConfirm(true)
        ) : (
            storeMachineCategory(formData),
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
        responDataMachineCategory ?
            setFormData({
                "name": responDataMachineCategory.data.name,
                "abbreviation": responDataMachineCategory.data.abbreviation
            })
            : setFormData(initialValue)
    }, [responDataMachineCategory.data.name, responDataMachineCategory.data.abbreviation])

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
        responDataMachineCategory
    }
}
