import React, { useEffect, useState } from 'react'
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"


const AddOptions = ({options, handler, correctOption, reset, setRest}) => {
    const [innerOptions, setInnerOptions] = useState(options)
    useEffect(()=>{
        if(reset){
            setInnerOptions([])
            setRest(false)
        }
    }, [reset])

    useEffect(()=>{
        handler("options",innerOptions);
    }, [innerOptions])


    const handelChange = (event, index) =>{

        const newOption = event.target.value == ""? " " :event.target.value ;
        const updatedOptions = [...innerOptions];
        updatedOptions[index] = { ...updatedOptions[index], option: newOption };
        setInnerOptions(updatedOptions);
    }
    const handelAdd = () =>{
        if (innerOptions.length == 0){
            setInnerOptions([{id:1, option : " "}])

        }
        else {
            const newId = innerOptions[innerOptions.length - 1].id + 1 
            setInnerOptions((prev)=>{
            return [...prev, {id:newId, option : " "}]
        })


        }
        

    }
    const handelDelete = (event, option) =>{
        if(option.id == correctOption){
            handler("correctOption", undefined)
        }
        const result = innerOptions.filter(item => item !== option);
        setInnerOptions(result)

    }

  return (
    <div className='p-2 border-2 rounded-sm max-h-[30vh] overflow-y-scroll'>
    {
        innerOptions.map((option, index)=>{
            return <div key={option.id} className="flex gap-2 my-2  items-center justify-center">
                        <Button
                         variant="outline" size="icon" className="w-11 h-10 border-red-600"
                         onClick={(e)=>{handelDelete(e, option)}}
                         >
                        <Trash2 className=" text-red-600"/>  
                    </Button>
                        <Input
                            id="name"  
                            placeholder="Name of your project" 
                            value = {option.option}
                            onChange={(event)=>handelChange(event, index)} />
                        <button 
                            type='button'
                            className={` hover:cursor-pointer rounded-md flex items-center justify-center border-2 w-11 h-10 ${correctOption == option.id?" border-green-500" :" border-gray-200" }`}
                            onClick={()=>{handler("correctOption", option.id)}}
                        > 
                        <span className={` w-3 h-3  rounded-full ${correctOption == option.id?" bg-green-500" :"bg-gray-200  " }`}  ></span>  
                        </button>
                    </div>
        })
    
  }
  <Button type="button" className="w-full flex justify-center items-center text-xs h-8" variant="outline" onClick={()=>handelAdd()} >إضافة اختيار</Button>
  </div>
    
  )
}

export default AddOptions
