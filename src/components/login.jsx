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
import { usePostApiMutation } from "../store/apiSlice"
import { login } from "../store/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import useApiToast from "../hooks/apiToast"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [postApi] = usePostApiMutation()
  const { handleApiResponse } = useApiToast()
  const {handleSubmit, handleChange, values, errors} = useFormik({
    initialValues : {
      email : "",
      password : ""
    },
    validationSchema : loginSchema,
    onSubmit:async (values)=>{
      const response = await postApi({url:"/auth/login",body:values})
      console.log(response.data)
      if (response.data){
          dispatch(login(response.data.token))
          navigate("/")
      }
      handleApiResponse("تسجيل الدخول", response)
    }
  })
  return (
    <Card className=" w-[90vw]  md:w-[40vw] xl:w-[30vw] customShadow rounded-lg" dir="rtl">
    <CardHeader>
      <CardTitle>تسجيل الدخول</CardTitle>
    </CardHeader>
    <CardContent>
      <form onSubmit={handleSubmit}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input
             id="email" 
             onChange={handleChange}
             value = {values.email}
             placeholder="البريد الإلكتروني" 
              />
              {errors.email && <label className='text-red-500 text-sm'> {errors.email}</label>}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password" >كلمة المرور</Label>
            <Input
             id="password" 
             placeholder="كلمة المرور" 
             onChange={handleChange}
             value = {values.password}
             />
             {errors.password && <label className='text-red-500 text-sm'> {errors.password}</label>}
          </div>
           
        </div>

          <Button onClick = {()=>{navigate("/forgotPassword")}} type="button" variant="link" className="self-start" > هل نسيت كلمة المرور ؟ </Button>
          <Button type="submit" className="w-full">تسجيل الدخول</Button>
          <Button onClick = {()=>{navigate("/signup")}} type="button" variant="link" className="self-start" > إنشاء حساب جديد</Button>
          
      </form>
    </CardContent>
   
  </Card>
  )
}

export default Login
