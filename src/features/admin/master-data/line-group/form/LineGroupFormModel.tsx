import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCreateLineGroupMutation, useGetLineGroupDetailQuery, useUpdateLineGroupMutation } from '../../../../../app/services/lineGroupService'
import moment from 'moment'

export default function useLineGroupFormModel() {
    let { id } = useParams()
    const navigate = useNavigate()
    const [modalConfirm, setModalConfirm] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)
    const [modalFailed, setModalFailed] = useState(false);
    const [failedMessage, setFailedMessage] = useState("Something went terribly wrong");

    const { data: responDataLineGroup = { data: [] }, refetch } = useGetLineGroupDetailQuery(id, { skip: id ? false : true })

    const [storeLine, resultStore] = useCreateLineGroupMutation()
    const [updateLine, resultUpdate] = useUpdateLineGroupMutation()

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
            storeLine(formData).then((result) => {
                if (result && result.error) {
                    const errorMessage = result.error.data.message || "Something went terribly wrong"
                    setModalFailed(true)
                    setFailedMessage(errorMessage)
                } else {

                    setModalSuccess(true)
                }
            }).catch((err) => {
                setModalFailed(true)

            })

        )
    }

    const handleValidation = async (e) => {
        e.preventDefault();
        if (formData.name == undefined) {
            setModalFailed(true)
            setFailedMessage("Line Group Name must be inputted")
        }
        else {
            handleSave(e);
        }
    }

    const handleCloseModal = () => {
        setModalConfirm(false)
        setModalSuccess(false)
        setModalFailed(false)
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
        responDataLineGroup ?
            setFormData({ "name": responDataLineGroup.data.name })
            : setFormData(initialValue)
    }, [responDataLineGroup.data.name])

    useEffect(() => {
        handleShift()
    }, [])

    return {
        id,
        modalConfirm,
        modalSuccess,
        modalFailed,
        failedMessage,
        handleValidation,
        handleBack,
        handleCloseModal,
        handleSave,
        formData,
        handleChangeForm,
        onConfirm,
        responDataLineGroup,
        shiftData

    }
}
