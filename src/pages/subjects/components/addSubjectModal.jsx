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
import { usePostApiMutation,  useGetApiQuery } from "../../../store/apiSlice"




const AddSubjectModal = () => {
  const [postApi] = usePostApiMutation()
  const { data: levels, isFetching : levelsFetching } = useGetApiQuery({url : "/level"})
  
  const { handleApiResponse } = useApiToast()
  const [setLoading] = useLoading()
     const {handleSubmit, handleChange, values, setFieldValue, errors, touched} = useFormik({
        initialValues :{
          name :  "",
          level : "",
           
        },
        // validationSchema :examDetailsSchema ,
        onSubmit :async (values)=>{
          setLoading(true)
          const response = await postApi({url:"/subject", body:values, tag : "subject"})
          handleApiResponse("إضافة مادة", response)
          
 
        }
      })

  return (
     <div className="flex flex-col p-2 gap-4" dir="rtl">
                        <h1 className=" w-full text-center text-lg">  
                        إضافة مادة
                        </h1>
                        
                          <Separator />
                        <form onSubmit={handleSubmit} className=' w-full    '>  
                                <div  className="flex flex-col gap-3 p-2 mb-2" dir="rtl">
                                <div className="flex flex-col w-full">
                                    <Label className="mb-2">اسم المادة</Label>
                                    <Input
                                    placeholder="اسم المادة" 
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange} />
                                    {touched.name && errors.name && <label className='text-red-500 text-sm'>{errors.name}</label>}
                                </div>
              <div className="flex flex-col  w-full items-center gap-4  justify-between">
            
              
                
                <div className="flex flex-col w-full" dir='rtl'>
                    <Label   className="mb-2">المستوى</Label>
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
                    { touched.level && errors.level && <label className='text-red-500 text-sm'>{errors.level}</label>}
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

export default AddSubjectModal
