import React from 'react'

import {ArrowRight} from "lucide-react"
import { Button } from "@/components/ui/button"
import AddQuestionForm from './addQuestionForm'
import QuestionsPreview from './questionsPreview'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSelector } from 'react-redux'
import useModal from '../../../hooks/modal'
import { formatDate } from '../../../lib/commonUtils'

const ExamQuestionsForm = ({setStep}) => {
  const [setModal] = useModal()
  const selector = useSelector((state)=>state.exam)

  
  return (
    <div className="w-full h-full    border-t-2  flex flex-col     " dir="rtl">

  



      <div  className="w-full md:flex  bg flex-col md:flex-row  h-full pb-4"  >

     <div className=' h-full hidden md:flex flex-col gap-2 p-5  w-1/3'>
      <div className=' w-full bg-gray-100  p-2 text-center rounded-lg'> 
      {selector.title}
      </div>



          <div className=' w-full   bg-gray-100  p-3 rounded-lg'>  
              <h1 className=' text-xl'> {selector.subject}</h1>
              <h4 className=' text-sm'>المادة</h4>
            </div>

            <div className=' w-full   bg-gray-100  p-3 rounded-lg'>

            <h1 className=' text-xl'>{formatDate(selector.startDate)}</h1>
            <h4 className=' text-sm'>تاريخ البدء</h4>
            </div>
          <div className=' w-full   bg-gray-100  p-3 rounded-lg'>  
              <h1 className=' text-xl'> {formatDate(selector.endDate)}</h1>
              <h4 className=' text-sm'>تاريخ الإنتهاء</h4>
            </div>

            <div className=' w-full   bg-gray-100  p-3 rounded-lg'>

            <h1 className=' text-xl'> {selector.questions.length}</h1>
            <h4 className=' text-sm'>الأسئلة</h4>
            </div>

     
     </div>
      <QuestionsPreview /> 
      
      
      
      
      </div>
      
     
              <div  className="flex justify-between w-full  items-center px-5 border-t-2 pt-2" >
              <Button className="w-1/4 text-sm h-8  flex justify-center items-center" variant="secondary" onClick={()=>setStep(1)} >
    
              عودة 
              
              </Button>
              <Button className="w-1/4 text-sm h-8 bg-blue-500 hover:bg-blue-600 " onClick={() => { setModal({type: "addQuestion",open: true})  }}
              >
              إضافة سؤال
              </Button>
              <Button className="w-1/4 text-sm h-8 bg-green-500 hover:bg-green-600 " onClick={()=>{
                
                setModal({type:"saveExam", open:true, props:{data : selector}})
              }}
              >
              حفظ الإختبار


              </Button>

              </div>
             
              
    </div>
  )
}

export default ExamQuestionsForm
