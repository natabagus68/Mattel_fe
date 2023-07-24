import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useDeleteMachineCategoryMutation, useGetMachineCategoriesQuery } from "../../../../../app/services/machineCategoryService"
import moment from "moment"

export default function useMachineCategoryModel() {
    const navigate = useNavigate()
    const [modalDelete, setModalDelete] = useState(false)
    const [deleteIdSelected, setDeleteIdSelected] = useState(null)

    const [searchParam, setSearchparam] = useSearchParams()
    const [paramData, setParamData] = useState({
        page: Number(searchParam.get('page')) || 1,
        search: searchParam.get('search') || '',
        sort: searchParam.get('sort') || 'Name_ASC',
    })

    const { data: responDataMachineCategory = { data: [] }, isLoading, refetch: refetchMachineCategory } = useGetMachineCategoriesQuery({ page: paramData.page, limit: 10, q: paramData.search, sort_val: paramData.sort.split('_')[1], table_name: paramData.sort.split('_')[0] })
    const [deleteMachineCategory, resultDelete] = useDeleteMachineCategoryMutation()

    const [shiftData, setShiftData] = useState("")

    const handleShift = () => {
        const currentTime = moment();
        const shift1Start = moment().set({ hour: 22, minute: 40 });
        const shift2Start = moment().set({ hour: 7, minute: 10 });
        const shift3Start = moment().set({ hour: 15, minute: 40 });

        if (currentTime.isAfter(shift1Start) && currentTime.isBefore(shift2Start) || currentTime.isSame(shift1Start)) {
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

    const handleChangeParam = (e) => {
        setParamData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const onNextPage = () => {
        setParamData(prev => ({ ...prev, page: prev.page + 1 }))
    }
    const onPrevPage = () => {
        setParamData(prev => ({ ...prev, page: prev.page - 1 }))
    }

    const handleEdit = (id) => {
        navigate(`${id}/edit`)
    }

    const handleAdd = () => {
        navigate(`add`)
    }

    const handleDelete = (id) => {
        setDeleteIdSelected(id)
        setModalDelete(true)
    }
    const handleCancelDelete = () => {
        setDeleteIdSelected(null)
        setModalDelete(false)
    }
    const onDelete = async () => {
        deleteMachineCategory(deleteIdSelected)
        await refetchMachineCategory()
    }

    useEffect(() => {
        async function refresh() {
            await refetchMachineCategory();
        }
        refresh();

        //   @ts-ignore
        setSearchparam((prev) => ({ ...prev, ...paramData }))
    }, [paramData])

    useEffect(() => {
        handleShift()
    }, [])

    return {
        modalDelete,
        handleAdd,
        handleEdit,
        handleDelete,
        handleCancelDelete,
        onDelete,
        responDataMachineCategory,
        refetchMachineCategory,
        handleChangeParam,
        paramData,
        onNextPage,
        onPrevPage,
        isLoading,
        shiftData
    }
}
