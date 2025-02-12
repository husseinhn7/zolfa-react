import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Checkbox } from "@/components/ui/checkbox"
  import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
   SelectValue,
} from "@/components/ui/select"
import { useFormik } from 'formik'
import DatePicker from "../../../components/date"
import { examDetailsSchema } from '../../../validation/examValidation'
import { setExamDetails } from '../../../store/examSlice'
// import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

import useApiToast from "../../../hooks/apiToast"
import useLoading from "../../../hooks/loading"
import { usePostApiMutation,  useGetApiQuery, useUpdateApiMutation } from "../../../store/apiSlice"



const EditLevelModal = ({data}) => {
  const [updateApi] = useUpdateApiMutation()
  console.log(data)
   const { handleApiResponse } = useApiToast()
  const [setLoading] = useLoading()
     const {handleSubmit, handleChange, values, setFieldValue, errors, touched} = useFormik({
        initialValues :data,
        // validationSchema :examDetailsSchema ,
        onSubmit : async (values)=>{
          setLoading(true)
          const response = await updateApi({url:`/level/${data._id}`, body:values, tag : "level"})
          handleApiResponse("تعديل دفعة", response)


        }
      })

  return (
     <div className="flex flex-col p-2 gap-4" dir="rtl">
                        <h1 className=" w-full text-center text-lg">  
                        تعديل الدفعة
                        </h1>
                        
                          <Separator />
                          <form onSubmit={handleSubmit} className=' w-full    '>  
                                <div  className="flex flex-col gap-3 p-2 mb-2" dir="rtl">
                                <div className="flex flex-col w-full">
                                    <Label className="mb-2">اسم المستوى</Label>
                                    <Input
                                    placeholder="اسم المستوى" 
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange} />
                                    {touched.name && errors.name && <label className='text-red-500 text-sm'>{errors.name}</label>}
                                </div>
              <div className="flex flex-col  w-full items-center gap-4  justify-between">
            
              
                
                


              <div className="flex   w-full items-center gap-4   justify-between">
          
                    <div className="flex flex-col w-1/2 ">
                        <Label  className="mb-2" >تاريخ البدء</Label>
                        <DatePicker
                          value = {values.startDate}
                         placeHolder="تاريخ البدء" name="startDate"
                         onChange={setFieldValue}/>
                        {touched.startDate && errors.startDate && <label className='text-red-500 text-sm'>{errors.startDate}</label>}
                    </div>
                    <div className="flex flex-col w-1/2">
                      <Label  className="mb-2" > تاريخ الإنتهاء</Label>
                      <DatePicker
                        value = {values.endDate}

                       placeHolder="تاريخ الإنتهاء" name="endDate" onChange={setFieldValue}/>
                        {touched.endDate && errors.endDate && <label className='text-red-500 text-sm'>{errors.endDate}</label>}
                    </div> 
                    
                    
                    </div>  
                    
                    
                    
                    
                    
                                </div>
                        
                        <Separator />
                        <DialogClose  className=" w-full flex justify-between mt-2 "> 
                            <Button variant="outline" className="h-8 text-xs w-1/4"> 
                                   إلغاء
                            </Button>
                            <Button type="submit" className="w-1/4 h-8 text-xs bg-green-500 hover:bg-green-600">
                                  حفظ
                            </Button>
                        
                        </DialogClose>
            
                        
            
            
                        </div>
                  </form>
                  </div>
  )
}

export default EditLevelModal
