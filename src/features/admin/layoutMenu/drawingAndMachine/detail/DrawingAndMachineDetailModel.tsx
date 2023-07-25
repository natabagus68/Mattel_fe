import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useShowDrawingQuery } from '../../layoutApiSlice';
import moment from 'moment';

export default function useDrawingAndMachineDetailModel() {
    const { id } = useParams()
    const location = useLocation()
    const navigate = useNavigate();

    const { data: LayoutDataById = { data: [] }, isLoading, refetch } = useShowDrawingQuery(id)

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

    const onPageBack = () => navigate(`../layout-menu/drawing-and-machine/`);

    const onUpdate = () => {
        navigate(`../layout-menu/drawing-and-machine/${id}/add`)
    }

    useEffect(() => {
        async function refresh() {
            await refetch();
        }

        setTimeout(() => {
            refresh()
        }, 200)
    }, [])

    useEffect(() => {
        handleShift()
    }, [])

    return {
        LayoutDataById,
        isLoading,
        onPageBack,
        onUpdate,
        shiftData
    }
}
