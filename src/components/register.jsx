import React, { useState, memo } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Wizard from './wizzard'
import RegisterFormStepOne from './registerFormStepOne'
import RegisterFormStepTwo from './registerFormStepTwo'


const Register = () => {
  const [step, SetStep] = useState(1)
  const stepOneInitialValues = {
    firstName : "",
    lastName : "",
    email : "",
    password:"", 
    confirmPassword : "",
  }
  const [stepOneData, setStepOneData] = useState(stepOneInitialValues)

  
  return (
    <Card className="w-[90vw]  md:w-[40vw] xl:w-[30vw] customShadow rounded-lg" dir="rtl">

      <CardHeader>
         <CardTitle>إنشاء حساب جديد</CardTitle>
      </CardHeader>

      <CardContent>
      
        <Wizard step={step} 
          tab1={<RegisterFormStepOne setStep={SetStep} setValues={setStepOneData} initialValues={stepOneData} />} 
          tab2={<RegisterFormStepTwo setStep={SetStep} stepOneData={stepOneData} />} />
      </CardContent>
    </Card>
  )
}

export default Register
