import { FaTelegram } from "react-icons/fa";
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { formatDate } from "../../../lib/commonUtils";
import { Separator } from "@/components/ui/separator"


const SaveExamModal = ({data}) => {
  return (
    <div className="flex flex-col p-4 gap-4" dir="rtl">
                <h1 className=" w-full text-center text-lg">  
                هل تود حفظ هذا الإختبار ؟
                  </h1>
                  <Separator />
                <div className=' w-full      '>  
                <h4 className=' text-sm'>
                              عنوان الإختبار
                </h4>
    
                        <h1 className=' text-xl'> {data.subject}</h1>
                </div>
                <div className=' w-full      '>  
                <h4 className=' text-sm'>المادة</h4>
    
                        <h1 className=' text-xl'> {data.subject}</h1>
                </div>
                <div className=" flex w-full">
    
                          <div className=' w-1/2 inline-block     '>
                          <h4 className=' text-sm'>تاريخ البدء</h4>
    
                      <h1 className=' text-xl'>{formatDate(data.startDate)}</h1>
                      </div>
                    <div className=' w-1/2  inline-block     '>  
                    <h4 className=' text-sm'>تاريخ الإنتهاء</h4>
    
                        <h1 className=' text-xl'> {formatDate(data.endDate)}</h1>
                  </div>
                
                </div>
    
                <div className=' w-full      '>
                <h4 className=' text-sm'>
                عدد الأسئلة
                  
                </h4>
    
                <h1 className=' text-xl'> {data.questions.length}</h1>
                </div>
                <div className=' w-full flex justify-between items-center '>
                    <span className=" flex items-center" >  
                    
                    <FaTelegram className=" w-6 h-6" />
                          <label className=" text-md">
    
    
                            هل تود إرسال رابط الإختبار عبر تليجرام ؟
                          </label>
                      </span>
                      
                    <Switch dir="ltr" />
    
                </div>
                    <Separator />
                <div  className=" w-ful flex justify-between  "> 
                    <Button variant="outline" className="w-1/4"> 
                           إلغاء
                    </Button>
                    <Button className="w-1/4 bg-green-500 hover:bg-green-600">
                          حفظ
                    </Button>
    
                
                </div>
    
                
    
    
    
          </div>
  )
}

export default SaveExamModal
