import React from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useShowDrawingQuery } from '../../layoutApiSlice';

export default function useDrawingAndMachineDetailModel() {
    const {id} = useParams()
    const location = useLocation()
    const navigate = useNavigate();
    
    const {data : LayoutDataById = {data : [] }, isLoading, refetch} = useShowDrawingQuery(id)


    const onPageBack = () => navigate(`../layout-menu/drawing-and-machine/`);

    const onUpdate = () => {
        navigate(`../layout-menu/drawing-and-machine/${id}/add`)
    }

    useEffect(()=> {
        async function refresh() {
            await refetch();
          }

          setTimeout(() => {
            refresh()
          },200)
    },[])
    
    return {
        LayoutDataById,
        isLoading,
        onPageBack,
        onUpdate
    }
}
