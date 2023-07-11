import {useEffect, useState} from 'react'
import {StylesConfig } from 'react-select'
import { useGetLinesQuery } from '../../../../app/services/lineService'
import { useGetToysQuery } from '../../../../app/services/ToysServices'
import moment from 'moment'
import { useStoreLayoutMutation } from '../layoutApiSlice'
export default function useInputChangeOverModel() {
    
    
    const {data : responDataLine = { data : [] }, refetch : refecthLines}= useGetLinesQuery({page : 1, limit : 9999})
    const {data : responDataToys = { data : [] }, refetch : refetchToys} = useGetToysQuery({page : 1, limit : 9999})
    const [storeLayout, resultStoreLayout] = useStoreLayoutMutation()
    
    const [dataLine, setDataLine] = useState([{}]) 
    const [dataToys, setDataToys] = useState([{}]) 

    const [changeOverSchedule, setToyChangeOverSchedule] = useState({
        production_sch_date : moment().format('YYYY-MM-DD'),
        week_ending : moment().endOf('week').format('YYYY-MM-DD'),
        production_shift : 'Shift 1',
        preparation_shift : 'Shift 1',
        line_id : ''
    })

    const selectStyles: StylesConfig = {
        control: (styles, {isFocused}) => ({ ...styles, padding : '5px 14px 5px 14px' , backgroundColor: 'white', borderColor : isFocused? '#F04438' : undefined, boxShadow : '#F04438', ':hover' : {borderColor : '#F04438'}, caretColor : '#F04438' }),
        option : (styles, {isSelected}) => ({...styles, backgroundColor : isSelected ? "#FEECEB" : undefined , color : isSelected ? '#313030' : undefined,  borderRight: isSelected? '2px solid #F04438' : undefined,":hover" : { backgroundColor: 'rgba(254, 236, 235, 0.4)'}})
    }

    const [lineChangeOver, seLineChangeover] = useState({
        label : 'Search Line',
        value : ''
    })

    const [toyChangover, setToyChangeover] = useState([
        {
            id : 1,
            label : 'Choose Toy Number',
            value : ''
        }
    ])

    const handleChangeToyNumber = (id, value) => {
        const newState = toyChangover.map(obj => {
            // 👇️ if id equals 2 replace object
            if (obj.id === id) {
              return {id : id, label : value?.label, value : value?.value};
            }
      
            // 👇️ otherwise return the object as is
            return obj;
          });
        setToyChangeover(newState)
    }

    const handleAddAnotherToy = () => {
        setToyChangeover(prev => ([...prev, {id : !isNaN(prev[prev.length - 1]?.id) ? prev[prev.length - 1]?.id + 1 : 1, label : 'Choose Toy Number', value : ''}]))
    }

    const handleDeleteToyNumber = (id) => {
        setToyChangeover(prev => {
            return prev.filter(item => item.id !== id)
          })
    }

    const handleChangeScheduleFilter = (e) => {
        setToyChangeOverSchedule({...changeOverSchedule, [e.target.name] : e.target.value })
    }

    const handleChangeLineId = (value) => {
        seLineChangeover(value)
        setToyChangeOverSchedule({...changeOverSchedule, ['line_id'] : value.value})
    }

    const onSubmit = () => {

        // console.log(toyChangover)
        changeOverSchedule.line_id ? 
            toyChangover[0]?.value ? (
                storeLayout({
                    line_id : changeOverSchedule.line_id,
                    toy_id : toyChangover.map((item) => {return item.value}),
                    production_sch_date : changeOverSchedule.production_sch_date,
                    week_ending : changeOverSchedule.week_ending,
                    production_shift : changeOverSchedule.production_shift,
                    preparation_shift : changeOverSchedule.preparation_shift
                }),
                setToyChangeover([ {
                    id : 1,
                    label : 'Choose Toy Number',
                    value : ''
                }]),

                setToyChangeOverSchedule({
                    production_sch_date : moment().format('YYYY-MM-DD'),
                    week_ending : moment().endOf('week').format('YYYY-MM-DD'),
                    production_shift : 'Shift 1',
                    preparation_shift : 'Shift 1',
                    line_id : ''
                }),
                seLineChangeover({
                    label : 'Search Line',
                    value : ''
                })
            )
            : null
        : null
    }


    useEffect(()=>{
        async function refreshDataLine() {
            setTimeout(() => {
                setDataLine(
                  responDataLine?.data.map(item => {
                      return {
                          value : item.id,
                          label : item.name
                      }
                  })
                )
                
            }, 500);
          }
          refreshDataLine();
    },[responDataLine])

    useEffect(()=>{
        async function refreshDataToys() {
            setTimeout(() => {
                setDataToys(
                    responDataToys?.data.map(item => {
                        return {
                            value : item.id,
                            label : item.number
                        }
                    })
                )
                
            }, 500);
        
        }
        refreshDataToys();
    },[responDataToys])

    useEffect(() => {
        async function refresh() {
          await refecthLines();
          await refetchToys();
        }
        refresh();
      }, []);



  return {
    selectStyles,
    dataLine,
    dataToys,
    toyChangover,
    lineChangeOver,
    handleAddAnotherToy,
    handleDeleteToyNumber,
    handleChangeToyNumber,
    handleChangeScheduleFilter,
    handleChangeLineId,
    changeOverSchedule,
    onSubmit
  }
}
