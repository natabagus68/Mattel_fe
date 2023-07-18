import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import moment from 'moment'
import { useGetLayoutsQuery } from '../../layoutApiSlice';

export default function useDrawingAndMachineModel() {
    const navigate = useNavigate()
    const [searchParam, setSearchparam] = useSearchParams()
    const [layoutParam, setLayoutParam] = useState({
        page: Number(searchParam.get("page")) || 1,
        production_sch: searchParam.get("production_sch") || "",
        week_ending: moment().endOf('week').format('YYYY-MM-DD'),
        production_shift: searchParam.get("production_shift") || "",
        preparation_shift: searchParam.get("preparation_shift") || "",
    }
    )

    const handleChangeParam = (e) => {
        setLayoutParam(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleProductionSchDate = (value) => {
        setLayoutParam(prev => ({ ...prev, production_sch: value }))
    }

    const handleProductionShift = (value) => {
        setLayoutParam(prev => ({ ...prev, production_shift: value }))
    }

    const handlePreparationShift = (value) => {
        setLayoutParam(prev => ({ ...prev, preparation_shift: value }))
    }

    const { data: LayoutData = { data: [] }, isLoading, refetch: refetchLayout } = useGetLayoutsQuery({ page: layoutParam.page, production_sch: layoutParam.production_sch, production_shift: layoutParam.production_shift, preparation_shift: layoutParam.preparation_shift })

    const handleInputDrawing = (id) => {
        navigate(`${id}/add`)
    }
    const handleShowDrawing = (id) => {
        navigate(`${id}/show`)
    }

    const onPrevPage = () => {
        setLayoutParam(prev => ({ ...prev, page: prev.page - 1 }))
    }

    const onNextPage = () => {
        setLayoutParam(prev => ({ ...prev, page: prev.page + 1 }))
    }

    useEffect(() => {
        async function refresh() {
            await refetchLayout();
        }
        refresh();
        setSearchparam((prev) => ({ ...prev, ...layoutParam }))
    }, [layoutParam]);

    return {
        handleInputDrawing,
        handleShowDrawing,
        LayoutData,
        layoutParam,
        handlePreparationShift,
        handleProductionSchDate,
        handleProductionShift,
        onNextPage,
        onPrevPage,
        handleChangeParam,
        isLoading
    }
}
