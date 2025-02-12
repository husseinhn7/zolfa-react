import {
    DialogClose,
  } from "@/components/ui/dialog"
  import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
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
import useApiToast from "../../../hooks/apiToast"
import useLoading from "../../../hooks/loading"
import {  useGetApiQuery, useUpdateApiMutation } from "../../../store/apiSlice"









const EditSubjectModal = ({data}) => {
      console.log(data)
      const [updateApi] = useUpdateApiMutation()
      const { data: levels, isFetching : levelsFetching } = useGetApiQuery({url : "/level"})
      const { handleApiResponse } = useApiToast()
      const [setLoading] = useLoading()
      const {handleSubmit, handleChange, values, setFieldValue, errors, touched} = useFormik({
        initialValues :data,
        // validationSchema :examDetailsSchema ,
        onSubmit : async (values)=>{
          setLoading(true)
          const response = await updateApi({url:`/subject/${data._id}`, body:values, tag : "subject"})
          handleApiResponse("تعديل مادة", response)
 
        }
      })

  return (
     <div className="flex flex-col p-2 gap-4" dir="rtl">
                        <h1 className=" w-full text-center text-lg">  
                        تعديل مادة
                        </h1>
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
                        
                          <Separator />
                          
                  </div>
  )
}

export default EditSubjectModal
