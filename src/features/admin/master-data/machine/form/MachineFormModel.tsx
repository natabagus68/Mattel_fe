import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCreateMachineMutation, useGetMachineQuery, useUpdateMachineMutation } from '../../../../../app/services/machineService'
import { useGetLinesQuery } from '../../../../../app/services/lineService'
import { useGetMachineCategoriesQuery } from '../../../../../app/services/machineCategoryService'
import { useGetPartsQuery } from '../../../../../app/services/partService'

export default function useMachineFormModel() {
    let { id } = useParams()
    const navigate = useNavigate()
    const [modalConfirm, setModalConfirm] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)

    const { data: responLine, isLoading: loadLine } = useGetLinesQuery({ limit: 999 })
    const { data: responMachineCategory, isLoading: loadMachineCategory } = useGetMachineCategoriesQuery({ limit: 999 })
    const { data: responMachineParts, isLoading: loadMachineParts } = useGetPartsQuery({ limit: 999 })
    const { data: responDataMachine = { data: [] }, refetch } = useGetMachineQuery(id, { skip: id ? false : true })

    const [storeLine, resultStore] = useCreateMachineMutation()
    const [updateLine, resultUpdate] = useUpdateMachineMutation()

    const initialValue = {
        code: "",
        number: 0,
        line_id: "",
        machine_category_id: "",
    }

    const [formData, setFormData] = useState(initialValue)

    const [machineParts, setMachineParts] = useState([{
        id: 1,
        value: ''
    }])

    const handleChangeMachinePart = (id, value) => {
        const newState = machineParts.map(obj => {
            // 👇️ if id equals 2 replace object
            if (obj.id === id) {
                return { id: id, value: value };
            }

            // 👇️ otherwise return the object as is
            return obj;
        });
        setMachineParts(newState)
    }

    const handleAddMachineParts = () => {
        setMachineParts(prev => ([...prev, { id: !isNaN(prev[prev.length - 1]?.id) ? prev[prev.length - 1]?.id + 1 : 1, value: '' }]))
    }

    const handleDeleteMachineParts = (id) => {
        setMachineParts(prev => {
            return prev.filter(item => item.id !== id)
        })
    }

    const handleChangeForm = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleBack = () => {
        navigate(-1)
    }
    const onConfirm = async () => {
        updateLine({ id: id, form:  {...formData, part : machineParts.map(item => {return item.value})} })
        await refetch()
        setModalConfirm(false)
        setModalSuccess(true)
    }
    const handleSave = async (e) => {
        e.preventDefault()
        id ? (
            setModalConfirm(true)
        ) : (
            storeLine({form : {...formData, part : machineParts.map(item => {return item.value})}}),
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
        responDataMachine ?
            (
                setFormData({
                    "code": responDataMachine?.data.code,
                    "number": responDataMachine?.data.number,
                    "line_id": responDataMachine?.data.line_id,
                    "machine_category_id": responDataMachine?.data.machine_category_id,
                }),
                responDataMachine?.data.machine_parts?
                    setMachineParts(responDataMachine?.data.machine_parts?.map((item, i) => {
                        return {
                            id: i ,
                            value: item.id
                        }
                    }))
                : setMachineParts([{id : 1, value : ''}])
            )
            : null
    }, [responDataMachine.data.code])

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
        responDataMachine,
        responMachineCategory,
        loadMachineCategory,
        responLine,
        loadLine,
        responMachineParts,
        loadMachineParts,
        machineParts,
        handleDeleteMachineParts,
        handleAddMachineParts,
        handleChangeMachinePart
    }
}
