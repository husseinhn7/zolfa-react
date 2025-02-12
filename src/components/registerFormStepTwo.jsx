import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormik } from 'formik'
import { registerSchemaStep2 } from '../validation/auth'
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
     SelectValue,
  } from "@/components/ui/select"
import DatePickerDemo from './date'
import {ArrowRight} from "lucide-react"
import useUpload from '../hooks/upload'
import { usePostApiMutation, useGetApiQuery} from '../store/apiSlice'
import useApiToast from '../hooks/apiToast'
import { login } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Loading from './loading'




const RegisterFormStepTwo = ({stepOneData, setStep}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [upload] = useUpload() 
    const { handleApiResponse } = useApiToast();
    const { data : intakes, isFetching:intakeFetching } = useGetApiQuery({url : "/intake"})
    const { data: levels, isFetching : levelsFetching } = useGetApiQuery({url : "/level"})
    const [ postApi, {isFetching}  ] = usePostApiMutation()
    const initialValues = {
        gender : "", 
        level : "",
        intake :"",
        birthDate : "",
        personalImage :""
      }
    const {handleSubmit,setFieldValue, errors, touched, values} = useFormik({
        initialValues ,
        validationSchema :  registerSchemaStep2,
        onSubmit : async (values)=>{  
            if (values.personalImage) {
                const path = await upload(values.personalImage)
                values.personalImage = path
            }
            const response = await postApi({url : "/auth/register", body:{...values, ...stepOneData}})
            if (response.data){
              dispatch(login(response.data.token))
              navigate("/exams")              
         }
         handleApiResponse("إنشاء حساب", response )
        }
      })
  return (
    <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5" dir='rtl'>
          <Label htmlFor="intake">
            الدفعة
          </Label>
          <Select dir='rtl' name="intake" onValueChange={(value)=>{setFieldValue("intake", value)}}>
            <SelectTrigger id="intake">
              <SelectValue placeholder="الدفعة" />
            </SelectTrigger>
            <SelectContent position="popper">
            {
              intakes && !intakeFetching ? intakes.data.data.map((intake)=>{
                return  <SelectItem key={intake._id} value={intake._id}>{intake.name}</SelectItem>

              }) : <SelectItem >load</SelectItem>
            }
            </SelectContent>
          </Select>
          {touched.intake && errors.intake && <label className='text-red-500 text-sm'> {errors.intake}</label>}

        </div>
        <div className="flex flex-col space-y-1.5" dir='rtl'>
        <Label htmlFor="level">
        المستوي
        </Label>
        <Select dir='rtl' name="level" onValueChange={(value)=>{setFieldValue("level", value)}}>
          <SelectTrigger id="level">
            <SelectValue placeholder="المستوي" />
          </SelectTrigger>
          <SelectContent position="popper">
            {
              levels && !levelsFetching ? levels.data.data.map((level)=>{
                return  <SelectItem key={level._id} value={level._id}>{level.name}</SelectItem>

              }) : <SelectItem >load</SelectItem>
            }

          </SelectContent>
        </Select>
        {touched.level && errors.level && <label className='text-red-500 text-sm'> {errors.level}</label>}

      </div>
      <div className="flex flex-col space-y-1.5" dir='rtl'>
      <Label htmlFor="framework">
      النوع
      </Label>
      <Select dir='rtl' name="gender" onValueChange={(value)=>{setFieldValue("gender", value)}}>
        <SelectTrigger >
          <SelectValue placeholder="النوع" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="male">ذكر</SelectItem>
          <SelectItem value="female">انثي</SelectItem>
          <SelectItem value="astro">فضائي</SelectItem>

        </SelectContent>
      </Select>
      {touched.gender && errors.gender && <label className='text-red-500 text-sm'> {errors.gender}</label>}

    </div>
    <div className="flex flex-col space-y-1.5">
    <Label htmlFor="name" >
تاريخ الميلاد   

    </Label>
    <DatePickerDemo value={values.birthDate} name="birthDate" onChange={setFieldValue}/>
    {touched.birthDate && errors.birthDate && <label className='text-red-500 text-sm'> {errors.birthDate}</label>}

  </div>
  <div className="flex flex-col space-y-1.5">
      <Label htmlFor="name" 
      >
      الصورة الشخصية        
      </Label>
      <Input type="file" id="name" placeholder="Name of your project" 
      onChange={(e)=>{console.log(e);setFieldValue("personalImage", e.target.files[0])}}
      
       />
      { errors.personalImage && <label className='text-red-500 text-sm'> {errors.personalImage}</label>}
  </div>
          
          
          </div>
          <div className='mt-4'>
          <div  className="flex justify-between w-full gap-2  " >
          <Button type="button" className="w-full flex justify-center items-center" variant="secondary" onClick={()=>setStep(1)} ><ArrowRight />عودة </Button>
          <Button disabled={isFetching} type="submit" className="w-full">
            {
              isFetching ? <Loading /> : "إنشاء الحساب"
              
            }

           
          </Button>
          
          </div>
         
          <Button type="button"  onClick= {()=>{navigate("/login")}}  variant="link" className="self-start">لديك حساب بالفعل ؟ سجل الدخول</Button>
          </div> 
      </form>
  )
}

export default RegisterFormStepTwo