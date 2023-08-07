import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useGetUserDetailQuery, useUpdateUserMutation } from '../accountApiSlice';
import moment from 'moment';
import { useGetDataAccessQuery } from '../../../../../app/services/userService';

export default function useAccountFormModel() {
    let { id } = useParams()
    const navigate = useNavigate();
    const [modalConfirm, setModalConfirm] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)
    const [chooseImage, setChooseImage] = useState(false);
    const [layoutName, setLayoutName] = useState(null);
    const [fileUrl, setFileUrl] = useState<any | null>(null);
    const [filesDraawing, setFileDrawing] = useState()
    const [fileData, setForm] = useState(new FormData())

    const { data: responDataUser = { data: [] }, refetch } = useGetUserDetailQuery(id, { skip: id ? false : true })
    const { data: responDataPosition = { data: [] }, refetchPosition } = useGetDataAccessQuery({ limit: 999 })


    const [updateUser, resultUpdate] = useUpdateUserMutation()
    const [storeUser, resultStore] = useUpdateUserMutation()

    const onPageBack = () => navigate(-1);

    const onImageChange = (e) => {

        fileData.append('file', e.target.files[0])
        setLayoutName(e.target.value);
        e.target.value != null ? setChooseImage(true) : null;
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            const url = e.target?.result;
            setFileUrl(url);
        };
        reader.readAsDataURL(file);
    };

    const initialValue = {
        name: '',
        email: '',
        kpk: '',
        password: '',
        role: '',
        position: '',
    }

    const [formData, setFormData] = useState(initialValue)
    const handleChangeForm = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

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

    const onConfirm = async () => {
        updateUser({ id: id, form: formData });
        await refetch()
        setModalConfirm(false)
        setModalSuccess(true)
    }
    const onSave = async (e) => {
        e.preventDefault()
        id ? (
            setModalConfirm(true)
        ) : (
            storeUser(formData),
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
        responDataUser ?
            setFormData({ 'name': responDataUser?.data.name, 'email': responDataUser?.data.email, 'kpk': responDataUser?.data.employee?.kpk, 'position': responDataUser?.data.position?.id ?? '', 'role': responDataUser?.data.roles?.id ?? '', 'password': '' })
            : setFormData(initialValue)
    }, [responDataUser.data.id])

    useEffect(() => {
        handleShift()
    }, [])


    return {
        id,
        filesDraawing,
        setFileDrawing,
        fileUrl,
        chooseImage,
        layoutName,
        onImageChange,
        onPageBack,
        onSave,
        formData,
        handleChangeForm,
        modalConfirm,
        modalSuccess,
        handleCloseModal,
        onConfirm,
        shiftData
    }
}
