import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import useApiToast from "../hooks/apiToast"
import useLoading from "../hooks/loading"
import { usePostApiMutation } from "../store/apiSlice";
import {
    DialogClose,
  } from "@/components/ui/dialog"
import { useNavigate } from "react-router";
const ConfirmSubmission = ({data, num}) => {
    const navigate = useNavigate()
    const { handleApiResponse } = useApiToast()
     const [postApi] = usePostApiMutation()
    const [setLoading] = useLoading()
    const handelPostAnswer = async () =>{
        setLoading(true)
        console.log(data)
        const response = await postApi({url : `/answer`, body : data  })
        if (response.data){
            navigate("/next-exams")
        }
        handleApiResponse("", response)

        }
  return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4" dir="rtl">
          <Card className="max-w-md w-full bg-white shadow-lg">
            <CardHeader className="text-center">
              <h2 className="text-xl font-bold text-gray-800">إنهاء الإختبار</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg mb-2">
                لقد قمت بالإجابة علي  <strong>{num.answered}</strong> من <strong>{num.all}</strong> سؤال
              </p>
              <p className="text-gray-600">هل تريد بالفعل إنهاء الإختبار</p>
            </CardContent>
            <CardFooter className="flex justify-between">
            <DialogClose className="w-1/3">
              <Button className="w-full" variant="secondary">إلغاء</Button>         
           </DialogClose>
           <DialogClose className="w-1/3">
              <Button className="bg-red-600 text-white w-full" onClick={handelPostAnswer}>إنهاء الاختبار</Button>
            </DialogClose>
            </CardFooter>
          </Card>
        </div>
  )
}

export default ConfirmSubmission
