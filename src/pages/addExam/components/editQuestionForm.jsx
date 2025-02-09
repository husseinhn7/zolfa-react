import React, { useState } from 'react'
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Pencil } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormik } from 'formik'
import { questionSchema } from '../../../validation/examValidation'
import { addQuestion, editQuestion } from '../../../store/examSlice'
import { useDispatch, useSelector } from 'react-redux'
import AddOptions from '../../../components/addOptions'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const EditQuestionForm = ({data, index}) => {
  const { toast } = useToast()
  const [resetOptions, setResetOptions] = useState(false)
  const dispatcher = useDispatch() 
  const selector = useSelector((state)=>state.exam)

  const {handleSubmit, handleChange, values, setFieldValue, errors, resetForm, touched} = useFormik({
    initialValues :data,
    validationSchema :questionSchema ,
    onSubmit : (values)=>{
      console.log(values)
      dispatcher(editQuestion({index: index , question: values}))
      toast({
        title: "Scheduled: Catch up ",
        description: "Friday, February 10, 2023 at 5:57 PM",
        action: (
          <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        ),
      })
    }
  })

 
  return (

<>
    <Dialog className="">
    <DialogTrigger asChild>
    <Button variant="outline" size="icon" className=" border-green-600 w-8 h-8">
   <Pencil className=" text-green-600" />
  </Button>
        </DialogTrigger> 
        <div className=' '>
          <DialogContent className="   mr-3 p-2    rounded-lg"  dir="rtl">    
             

        <DialogHeader>
          <DialogTitle>
          <h1 className='w-full text-2xl  flex  justify-end' dir='ltr'>
           تعديل السؤال
          </h1>
          </DialogTitle>

        </DialogHeader>


            
    <div className="w-full  flex flex-col   " >
    <Card className="  " dir="rtl">
  
    <CardContent className=" px-2 md:px-6">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-1.5 my-4 ">
          <Label htmlFor="name" className="text-xl">عنوان الإختبار</Label>
            <Input 
            id="name" 
            className="text-xl"
            placeholder="Name of your project" 
            onChange={handleChange}
            name='question'
            value = {values.question} 
            />
            {touched.question && errors.question && <label className='text-red-500 text-sm'>{errors.question}</label>}


            </div>
            <div className="flex flex-col space-y-1.5 my-4 ">
              <Label htmlFor="mark" className="text-sm"> الدرجة</Label>
                <Input 
                id="mark" 
                className="text-sm"
                placeholder="Name of your project" 
                onChange={handleChange}
                name='mark'
                type="number"
                value = {values.mark} 
                />
          {touched.mark && errors.mark && <label className='text-red-500 text-sm'>{errors.mark}</label>}


          </div>
                <div className="grid w-full items-center gap-4">
              
                <AddOptions 
                  options={values.options} 
                  handler={setFieldValue} 
                  correctOption={values.correctOption}
                  reset={resetOptions}
                  setRest={setResetOptions}
                />
                {touched.options && errors.options && <label className='text-red-500 text-sm'>{errors.options}</label>}
                {touched.correctOption && errors.correctOption && <label className='text-red-500 text-sm'>{errors.correctOption}</label>}

               

        
                     </div> 
                    <DialogClose className=" w-full flex item   justify-start mt-2"  >
 
                          <Button type="submit" className="ml-2"   
                               
                          >حفظ 
                          
                          </Button>
                       
                              
                        

                        <Button type="button" variant="secondary">
                            إلغاء
                        </Button>
                          </DialogClose>
        

          
    </form>
    </CardContent>
  
    </Card>

</div>






       
              </DialogContent>
                       </div>

  </Dialog>

    </>
  )
}

export default EditQuestionForm

