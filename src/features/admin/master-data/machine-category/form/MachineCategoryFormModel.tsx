import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCreateMachineCategoryMutation, useGetMachineCategoryDetailQuery, useUpdateMachineCategoryMutation } from '../../../../../app/services/machineCategoryService'
import moment from 'moment'

export default function useMachineCategoryFormModel() {
    let { id } = useParams()
    const navigate = useNavigate()
    const [modalConfirm, setModalConfirm] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)
    const [modalFailed, setModalFailed] = useState(false);
    const [failedMessage, setFailedMessage] = useState("Something went terribly wrong");

    const { data: responDataMachineCategory = { data: [] }, refetch } = useGetMachineCategoryDetailQuery(id, { skip: id ? false : true })

    const [storeMachineCategory, resultStore] = useCreateMachineCategoryMutation()
    const [updateMachineCategory, resultUpdate] = useUpdateMachineCategoryMutation()

    const initialValue = {
        name: '',
        abbreviation: ''
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
            storeMachineCategory(formData).then((result) => {
                console.log({ result })
                if (result && result.error) {
                    const errorMessage = result.error.data.message || "Something went terribly wrong"
                    setModalFailed(true)
                    setFailedMessage(errorMessage)
                } else {

                    setModalSuccess(true)
                }
            }).catch((err) => {
                setModalFailed(true)
            }));
    }
    const handleCloseModal = () => {
        setModalConfirm(false)
        setModalSuccess(false)
        setModalFailed(false)
    }

    const handleValidation = async (e) => {
        e.preventDefault();

        if (formData.name == undefined) {
            setModalFailed(true)
            setFailedMessage("Name must be inputted")
        }
        else if (formData.abbreviation == undefined) {
            setModalFailed(true)
            setFailedMessage("Abbreviation must be inputted")
        }
        else if (formData.abbreviation.length > 3) {
            setModalFailed(true)
            setFailedMessage("Abbreviation length Not More Than 3")
        } else {
            handleSave(e);
        }
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

    useEffect(() => {
        handleShift()
    }, [])

    return {
        id,
        modalConfirm,
        modalSuccess,
        modalFailed,
        failedMessage,
        handleBack,
        handleCloseModal,
        handleSave,
        handleValidation,
        formData,
        handleChangeForm,
        onConfirm,
        responDataMachineCategory,
        shiftData
    }
}
