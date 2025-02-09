import { useState } from 'react'
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,

} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormik } from 'formik'
import { questionSchema } from '../../../validation/examValidation'
import { addQuestion } from '../../../store/examSlice'
import { useDispatch, useSelector } from 'react-redux'
import AddOptions from '../../../components/addOptions'
import { Textarea } from "@/components/ui/textarea"
import useModal from '../../../hooks/modal'


const AddQuestionModal = () => {
    const [_,closeModal] = useModal()
  const { toast } = useToast()
  const [resetOptions, setResetOptions] = useState(false)
  const dispatcher = useDispatch() 
//   const selector = useSelector((state)=>state.exam)

  const {handleSubmit, handleChange, values, setFieldValue, errors, resetForm, touched} = useFormik({
    initialValues :{
      question :"" ,
      options :[],
      correctOption: undefined,
      mark :0
    },
    validationSchema :questionSchema ,
    onSubmit : (values)=>{
      dispatcher(addQuestion(values))
      resetForm()
      setResetOptions(true)
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
        <Card className="p-2 m-0 " dir="rtl">
      
        <CardContent className=" px-2  ">
          <form onSubmit={handleSubmit}>
                  <div className="flex flex-col space-y-1.5 my-2 grow ">
                    <Label   className="text-sm">السؤال</Label>
                      <Textarea 
                        className="text-sm  "
                        placeholder="السؤال" 
                        onChange={handleChange}
                        name='question'
                        value = {values.question} 
                      />
                      {touched.question && errors.question && <label className='text-red-500 text-sm'>{errors.question}</label>}


                  </div>
                  <div className="flex flex-col space-y-1.5 mb-2  w-full">
                      <Label  className="text-sm"> الدرجة</Label>
                        <Input 
                          className="text-sm"
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

                    <div className="flex flex-col space-y-1.5">
                  
              </div>

            
            </div> 
            <div className=' flex justify-between'>

            <Button variant="outline" type="button" className="text-xs h-8 w-1/4 m-0 border-red-500 text-red-500" onClick={()=>{resetForm();closeModal()}} >
                إلغاء

            </Button>
            <Button variant="outline" type="submit" className="text-xs h-8 w-1/4 m-0 border-green-500 text-green-500" onClick={()=>{}} >

                حفظ وإضافة 

            </Button>
            {/* <Button variant="outline" type="submit" className="text-xs h-8 w-1/4 m-0 border-green-500 text-green-500" onClick={()=>{console.log(errors);if(!errors){console.log("------"); closeModal()}}} >

                                حفظ ومتابعة
            </Button> */}


            </div>
        </form>
        </CardContent>
      
        </Card>

  )
}

export default AddQuestionModal
