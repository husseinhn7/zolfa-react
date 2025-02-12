import { DialogClose } from "@/components/ui/dialog"
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
import DatePicker from "../../../components/date"
import { examDetailsSchema } from '../../../validation/examValidation'
import useApiToast from "../../../hooks/apiToast"
import useLoading from "../../../hooks/loading"
import { usePostApiMutation,  useGetApiQuery } from "../../../store/apiSlice"
// import { Checkbox } from "@/components/ui/checkbox"





const AddIntakeModal = () => {
  const [postApi] = usePostApiMutation()
  const { data: levels, isFetching : levelsFetching } = useGetApiQuery({url : "/level"})
  
  const { handleApiResponse } = useApiToast()
  const [setLoading] = useLoading()
     const {handleSubmit, handleChange, values, setFieldValue, errors, touched} = useFormik({
        initialValues :{
          name : "",
          level : "",
          description :"",
          startDate : "", 
          endDate:"", 
          telegramLinkMan : "",
          telegramLinkWoman : ""

        },
        // validationSchema :examDetailsSchema ,
        onSubmit : async (values)=>{
          setLoading(true)
          const response = await postApi({url:"/intake", body:values, tag : "intake"})
          handleApiResponse("إضافة دفعة", response)

        }
      })

  return (
     <div className="flex flex-col p-2 gap-4" dir="rtl">
                        <h1 className=" w-full text-center text-lg">  
                        إضافة دفعة
                        </h1>
                        
                          <Separator />
                        <form onSubmit={handleSubmit} className=' w-full    '>  
                                <div  className="flex flex-col gap-3 p-2 mb-2" dir="rtl">
                                <div className="flex flex-col w-full">
                                    <Label className="mb-2">اسم الدفعة</Label>
                                    <Input
                                    placeholder="اسم الدفعة" 
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

                <div className="flex flex-col w-full">
                  <Label  className="mb-2" >
                  وصف الدفعة
                  </Label>
                  <Input   name="description" placeholder="وصف الدفعة" onChange={()=>console.log("========")} />
                </div>
              </div>

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
                    <div className="flex flex-col w-full  ">

                                <div className="flex flex-col w-full">
                                    <Label className="mb-2"> رابط التليجرام رجال </Label>
                                    <Input
                                    type = "link"
                                    placeholder=" رابط التليجرام رجال " 
                                    name="telegramLinkMan"
                                    value={values.telegramLinkMan}
                                    onChange={handleChange} />
                                    {touched.telegramLinkMan && errors.telegramLinkMan && <label className='text-red-500 text-sm'>{errors.telegramLinkMan}</label>}
                                </div>

                                <div className="flex flex-col w-full">
                                    <Label className="mb-2"> رابط التليجرام نساء </Label>
                                    <Input
                                    placeholder=" رابط التليجرام نساء " 
                                    name="telegramLinkWoman"
                                    value={values.telegramLinkWoman}
                                    onChange={handleChange} />
                                    {touched.telegramLinkWoman && errors.telegramLinkWoman && <label className='text-red-500 text-sm'>{errors.telegramLinkWoman}</label>}
                                </div>
                    </div>
                    
                    
                    
                    
                                </div>
                        
                        <Separator />
                        <DialogClose  className=" w-full flex justify-between mt-2 "> 
                            <Button variant="outline" className="h-8 text-xs w-1/4"> 
                                   إلغاء
                            </Button>
                            <Button
                            onClick = {()=>{console.log}}
                             className="w-1/4 h-8 text-xs bg-green-500 hover:bg-green-600">
                                  حفظ
                            </Button>
                        
                        </DialogClose>
            
                        
            
            
                        </form>
                  </div>
  )
}

export default AddIntakeModal
