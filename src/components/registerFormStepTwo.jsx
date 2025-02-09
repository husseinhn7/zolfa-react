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


const RegisterFormStepTwo = ({stepOneData, setStep}) => {
    const initialValues = {
        gender : "", 
        level : "",
        intake :"",
        birthDate : "",
        personalImage :""
      }
    const {handleSubmit,setFieldValue, errors, touched} = useFormik({
        initialValues ,
        validationSchema :  registerSchemaStep2,
        onSubmit :(values)=>{  
          console.log({...values, ...stepOneData})
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
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="next">Next.js</SelectItem>
              <SelectItem value="sveltekit">SvelteKit</SelectItem>
              <SelectItem value="astro">Astro</SelectItem>
              <SelectItem value="nuxt">Nuxt.js</SelectItem>
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
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="next">Next.js</SelectItem>
            <SelectItem value="sveltekit">SvelteKit</SelectItem>
            <SelectItem value="astro">Astro</SelectItem>
            <SelectItem value="nuxt">Nuxt.js</SelectItem>
          </SelectContent>
        </Select>
        {touched.level && errors.level && <label className='text-red-500 text-sm'> {errors.level}</label>}

      </div>
      <div className="flex flex-col space-y-1.5" dir='rtl'>
      <Label htmlFor="framework">
      النوع
      </Label>
      <Select dir='rtl' name="gender" onValueChange={(value)=>{setFieldValue("gender", value)}}>
        <SelectTrigger id="framework">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="sveltekit">SvelteKit</SelectItem>
          <SelectItem value="astro">Astro</SelectItem>
          <SelectItem value="nuxt">Nuxt.js</SelectItem>
        </SelectContent>
      </Select>
      {touched.gender && errors.gender && <label className='text-red-500 text-sm'> {errors.gender}</label>}

    </div>
    <div className="flex flex-col space-y-1.5">
    <Label htmlFor="name" >
تاريخ الميلاد   

    </Label>
    <DatePickerDemo name="birthDate" onChange={setFieldValue}/>
    {touched.birthDate && errors.birthDate && <label className='text-red-500 text-sm'> {errors.birthDate}</label>}

  </div>
  <div className="flex flex-col space-y-1.5">
      <Label htmlFor="name" >كلمة المرور</Label>
      <Input type="file" id="name" placeholder="Name of your project"/>
      { errors.personalImage && <label className='text-red-500 text-sm'> {errors.personalImage}</label>}
  </div>
          
          
          </div>
          <div className='mt-4'>
          <div  className="flex justify-between w-full gap-2  " >
          <Button type="button" className="w-full flex justify-center items-center" variant="secondary" onClick={()=>setStep(1)} ><ArrowRight />عودة </Button>
          <Button type="submit" className="w-full">التالي</Button>
          
          </div>
         
          <Button  variant="link" className="self-start">لديك حساب بالفعل ؟ سجل الدخول</Button>
          </div>
      </form>
  )
}

export default RegisterFormStepTwo