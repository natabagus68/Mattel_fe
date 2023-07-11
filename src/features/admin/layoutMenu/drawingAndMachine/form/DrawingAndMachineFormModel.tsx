import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useUpdateDrawingMutation } from '../../layoutApiSlice';
import { config } from '../../../../../common/utils';

export default function useDrawingAndMachineFormModel() {
    let {id} = useParams()
    const navigate = useNavigate();
    const [chooseImage, setChooseImage] = useState(false);
    const [layoutName, setLayoutName] = useState(null);
    const [fileUrl, setFileUrl] = useState<any | null>(null);
    const [filesDraawing, setFileDrawing] = useState()
    const [form, setForm] = useState(new FormData())
    
    const [updateDrawing, drawingResult] = useUpdateDrawingMutation()
    
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
        updateDrawing({id : id, value :  form})
        drawingResult && navigate(`/layout-menu/drawing-and-machine/${id}/show`)
      }


    return {
      filesDraawing,
      setFileDrawing,
        fileUrl,
        chooseImage,
        layoutName,
        onImageChange,
        onPageBack,
        onSave
  }
}
