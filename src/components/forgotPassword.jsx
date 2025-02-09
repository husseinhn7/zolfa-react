import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const ForgotPassword = () => {
  return (
    <Card className="w-[450px] " dir="rtl">
    <CardHeader>
      <CardTitle>تسجيل الدخول</CardTitle>
     
    </CardHeader>
    <CardContent>
      <form>
        <div className="grid w-full items-center gap-4">
      
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" >كلمة المرور</Label>
            <Input id="name" placeholder="Name of your project" onChange={()=>console.log("========")} />
          </div>
           
        </div>
      </form>
    </CardContent>
    <CardFooter className="flex justify-between flex-col -mt-4">
      <Button className="w-full">إرسال الرمز</Button>
      <Button  variant="link" className="self-start" > إنشاء حساب جديد</Button>
      
    </CardFooter>
  </Card>
  )
}

export default ForgotPassword
