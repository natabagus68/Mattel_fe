import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useGetUserDetailQuery, useUpdateUserMutation } from '../accountApiSlice';

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


    const onConfirm = async() => {
        alert(`Berhasil`)
        await refetch()
        setModalConfirm(false)
        setModalSuccess(true)
    }
    const onSave = async (e) => {
        e.preventDefault()
        id ? (
            setModalConfirm(true)
        ) : (
            alert(`Berhasil`),
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
    onConfirm
    }
}