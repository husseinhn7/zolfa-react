import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormik } from 'formik'
import loginSchema from '../validation/auth'

const Login = () => {
  const {handleSubmit, handleChange, values, errors} = useFormik({
    initialValues : {
      email : "",
      password : ""
    },
    validationSchema : loginSchema,
    onSubmit:(values)=>{
      console.log(values)
    }
  })
  return (
    <Card className="w-[450px] " dir="rtl">
    <CardHeader>
      <CardTitle>تسجيل الدخول</CardTitle>
    </CardHeader>
    <CardContent>
      <form onSubmit={handleSubmit}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">الاسم</Label>
            <Input
             id="email" 
             onChange={handleChange}
             value = {values.email}
             placeholder="Name of your project" 
              />
              {errors.email && <label className='text-red-500 text-sm'> {errors.email}</label>}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password" >كلمة المرور</Label>
            <Input
             id="password" 
             placeholder="Name of your project" 
             onChange={handleChange}
             value = {values.password}
             />
             {errors.password && <label className='text-red-500 text-sm'> {errors.password}</label>}
          </div>
           
        </div>

          <Button type="button" variant="link" className="self-start" > هل نسيت كلمة المرور ؟ </Button>
          <Button type="submit" className="w-full">تسجيل الدخول</Button>
          <Button type="button" variant="link" className="self-start" > إنشاء حساب جديد</Button>
          
      </form>
    </CardContent>
   
  </Card>
  )
}

export default Login
