import React from 'react'
import DatePickerDemo from './date'
import {ArrowRight} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { examSettingsSchema } from '../validation/examValidation'
import { useDispatch } from 'react-redux'
import { setExamSettings } from '../store/examSlice'


const ExamSettingForm = ({setStep}) => {
  const selector = useSelector((state)=>state.exam)
  const dispatcher = useDispatch()
  console.log(selector)
  const {handleSubmit, handleChange, values, setFieldValue, errors, touched} = useFormik({
    initialValues :{
      startDate : "", 
      endDate: ""
    },
    validationSchema :examSettingsSchema ,
    onSubmit : (values)=>{
      console.log(values)
      dispatcher(setExamSettings(values))
      setStep(3)
    }
  })
  return (

    <Card className="w-full  rounded-none " dir="rtl">
    <CardHeader>
    <CardTitle>إنشاء حساب جديد</CardTitle>
    </CardHeader>
    <CardContent>
    
    <form onSubmit={handleSubmit}>
        <div className="grid w-full items-center gap-4">
      
        <div className="flex flex-col space-y-1.5">
        <Label htmlFor="name" >كلمة المرور</Label>
        <DatePickerDemo name="startDate" onChange={setFieldValue}/>
        {touched.startDate && errors.startDate && <label className='text-red-500 text-sm'>{errors.startDate}</label>}
      </div>
      <div className="flex flex-col space-y-1.5">
      <Label htmlFor="name" >كلمة المرور</Label>
      <DatePickerDemo name="endDate" onChange={setFieldValue}/>
      {touched.endDate && errors.endDate && <label className='text-red-500 text-sm'>{errors.endDate}</label>}
    </div>
        <div className="flex flex-col space-y-1.5">
        <div className="flex items-center space-x-2 gap-4">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="  text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
         الإختبار النهائي ؟ 
        </label>
      </div>
  </div>
  
        
        </div> 
        
        <div  className="flex justify-between w-full gap-2 " >
            <Button className="w-full flex justify-center items-center" variant="secondary" onClick={()=>setStep(1)} ><ArrowRight />عودة </Button>
            <Button type="submit" className="w-full" onClick={()=>{console.log(selector)}}>التالي</Button>
            </div>
    </form>
    </CardContent>
    <CardFooter className="flex justify-between flex-col -mt-2">
          
           
            
            </CardFooter>
  </Card>
  )
}

export default ExamSettingForm
