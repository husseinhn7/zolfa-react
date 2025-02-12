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
import { examDetailsSchema } from '../../../validation/examValidation'
import { useDispatch } from 'react-redux'
import { setExamDetails } from '../../../store/examSlice'
import { useSelector } from 'react-redux'
import DatePicker from '../../../components/date'
import { Checkbox } from "@/components/ui/checkbox"
import { useGetApiQuery } from "../../../store/apiSlice"
// import { Textarea } from "@/components/ui/textarea"




const ExamDetailsForm = ({setStep}) => {
  const selector = useSelector((state)=>state.exam)
  const {data, isFetching, isError} = useGetApiQuery({url:"/subject"})
  const dispatcher = useDispatch()
  const {handleSubmit, handleChange, values, setFieldValue, errors, touched} = useFormik({
    initialValues :{
      title : selector.title,
      subject : selector.subject,
      comment :selector.comment,
      startDate : selector.startDate, 
      endDate: selector.endDate, 
      isFinal : selector.isFinal
    },
    validationSchema :examDetailsSchema ,
    onSubmit : (values)=>{
      dispatcher(setExamDetails(values))
      setStep(2)
    }
  })
 
  return (
    <Card className="w-full shadow-none rounded-none h-full  border-none  m-0 p-0" dir="rtl">
      <CardHeader className=" text-center p-2 px-6">
      <CardTitle 
      className = " border-b p-5"
    >إضافة  تفاصيل الإختبار


      </CardTitle>
      </CardHeader>
      <CardContent className="  p-2  flex flex-col justify-center  ">
      <form onSubmit={handleSubmit} className=" " >
          <div className=' flex flex-col gap-2'> 
          <div className="flex flex-col w-full">
                    <Label className="mb-2">عنوان الإختبار</Label>
                    <Input
                    placeholder="عنوان الإختبار" 
                    name="title"
                    value={values.title}
                    onChange={handleChange} />
                    {touched.title && errors.title && <label className='text-red-500 text-sm'>{errors.title}</label>}
                </div>
              <div className="flex flex-col  w-full items-center gap-4  justify-between">
            
              
                
                <div className="flex flex-col w-full" dir='rtl'>
                    <Label   className="mb-2">المادة</Label>
                    <Select dir='rtl'
                        onValueChange={(value) => setFieldValue("subject", value)}
                        name="subject" 
                        value = {values.subject}
                        
                          >
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="المادة" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        {
                          (data && (!isFetching && !isError)) ? 
                          data.data.data.map((subject)=>{
                            return <SelectItem key={subject._id} value={subject._id}>{subject.name}</SelectItem>

                          }) : <SelectItem ></SelectItem>
                        }
                      </SelectContent>
                    </Select>
                    { touched.subject && errors.subject && <label className='text-red-500 text-sm'>{errors.subject}</label>}
                  </div>

                <div className="flex flex-col w-full">
                  <Label  className="mb-2" >تعليق</Label>
                  <Input id="name" name="comment" placeholder="تعليق" onChange={handleChange} />
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

                            <div className="flex items-center space-x-2 h-10 gap-4">
                            <Checkbox 
                                id="isFinal"
                                name="isFinal"
                                checked={values.isFinal}
                                onCheckedChange={(checked) => setFieldValue("isFinal", checked)} 
                              />
                              <label htmlFor="isFinal" className="text-sm font-medium leading-none">
                                الإختبار النهائي ؟
                              </label>
                      </div>
                    </div>
      
            
           
        </div>
       
              <Button disabled={false} type="submit" className="w-full mt-4" onClick={()=>{}}>التالي</Button>

      
       </form>
      </CardContent>
     
    </Card>
  )
}

export default ExamDetailsForm
