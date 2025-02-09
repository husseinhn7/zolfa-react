import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormik } from 'formik'
import { registerSchemaStep1 } from '../validation/auth'
import { Button } from "@/components/ui/button"



const RegisterFormStepOne = ({setValues, setStep, initialValues }) => {
    
      const {handleChange, handleSubmit, values, errors, touched} = useFormik({
        initialValues ,
        validationSchema :  registerSchemaStep1,
        onSubmit :(values)=>{
            setValues(values)
            setStep(2)
           
          console.log(values)
        }
      })
  return (
    <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
        
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="firstName">الإسم الأول</Label>
                    <Input
                      id="firstName" 
                      name = "firstName"
                      placeholder="Name of your project" 
                      onChange={handleChange} 
                      value = {values.firstName}
                      />
                      {touched.firstName && errors.firstName && <label className='text-red-500 text-sm'> {errors.firstName}</label>}

                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="lastName">الإسم الثاني</Label>
                    <Input
                      id="lastName"
                      placeholder="Name of your project"
                      onChange={handleChange}
                      value = {values.lastName}
                      />
                      {touched.lastName && errors.lastName && <label className='text-red-500 text-sm'> {errors.lastName}</label>}

                </div>
                        <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email" >البريد الإليكتروني</Label>
                    <Input 
                    id="email" 
                    placeholder="Name of your project" 
                    onChange={handleChange}
                    value = {values.email}

                    />
                    {touched.email && errors.email && <label className='text-red-500 text-sm'> {errors.email}</label>}

                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password" >كلمة المرور</Label>
                    <Input 
                      id="password" 
                      placeholder="Name of your project"
                      onChange={handleChange} 
                      value = {values.password}

                      />
                      {touched.password && errors.password && <label className='text-red-500 text-sm'> {errors.password}</label>}

                </div>
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="confirmPassword" >اعادة كلمة المرور </Label>
                    <Input 
                      id="confirmPassword" 
                      placeholder="Name of your project" 
                      onChange={handleChange} 
                      value = {values.confirmPassword}

                      />
                      {touched.confirmPassword && errors.confirmPassword && <label className='text-red-500 text-sm'> {errors.confirmPassword}</label>}

                 </div>
      
          
          </div>
      
          <div className=' mt-4'>
      
     
          <Button type="submit" className="w-full" >التالي</Button>
          <Button  variant="link" className="self-start" >لديك حساب بالفعل ؟ سجل الدخول</Button> 
        </div>
      </form>
  )
}

export default RegisterFormStepOne
