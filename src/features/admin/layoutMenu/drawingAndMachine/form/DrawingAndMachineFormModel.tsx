import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useUpdateDrawingMutation } from '../../layoutApiSlice';
import { config } from '../../../../../common/utils';
import moment from 'moment';

export default function useDrawingAndMachineFormModel() {
  let { id } = useParams()
  const navigate = useNavigate();
  const [chooseImage, setChooseImage] = useState(false);
  const [layoutName, setLayoutName] = useState(null);
  const [fileUrl, setFileUrl] = useState<any | null>(null);
  const [filesDraawing, setFileDrawing] = useState()
  const [form, setForm] = useState(new FormData())

  const [updateDrawing, drawingResult] = useUpdateDrawingMutation()

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


  const onPageBack = () => navigate(-1);

  const onImageChange = (e) => {

    form.append('file', e.target.files[0])
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


  const onSave = () => {
    updateDrawing({ id: id, value: form })
    drawingResult && navigate(`/layout-menu/drawing-and-machine/${id}/show`)
  }

  useEffect(() => {
    handleShift()
  }, [])


  return {
    filesDraawing,
    setFileDrawing,
    fileUrl,
    chooseImage,
    layoutName,
    onImageChange,
    onPageBack,
    onSave,
    shiftData
  }
}
