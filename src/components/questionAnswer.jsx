import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from "@/components/ui/button"
import { setCurrentQuestion, 
  addAnsweredQuestion, addMarkedQuestion, addAnswer } from '../store/examAnswerSlice'

const QuestionAnswer = () => {
  const dispatcher =  useDispatch()
  const {questions, currentQuestion, answers, examDetails} = useSelector((state)=>state.examAnswer)
  const question = questions[currentQuestion] 
  const questionsAns = answers.filter((ans, index)=>ans.question === question._id )
  const ansData = questionsAns[0]?.question ?  questionsAns[0] : {}
  const [answer, setAnswer] = useState(ansData)

  const ansId = answer.answer || ansData.answer


  const handelNext = () =>{
    if(currentQuestion +1 < questions.length){
      
    if(answer.answer){
      dispatcher(addAnsweredQuestion(answer))
      dispatcher(addAnswer(answer))
    }
    setAnswer({})
    dispatcher(setCurrentQuestion(currentQuestion+1))
  }
}
  // console.log(answer)
  return (
    <>
    
    <div className='gap-4 flex flex-col  min-:h-4/6  min-h-[65%] pt-10 px-7 justify-evenly'>
    <div className='flex  items-center text-b font-bold text-xl'  >
     السؤال رقم {currentQuestion+1} من {questions.length} اسئلة
     </div>
    <span className=' text-lg'> 
    
    {question.question}
    </span>
    <span className=' bg-gray-200 flex rounded-md  justify-center items-center px-2' > 
    إختر الإجابة الصحيحة من الإختيارات الاتية
    </span>


    <div className='flex flex-col gap-4 '>
    {
      question.options.map((option, index)=>{
        return (
          <button key={option.id} 
              className={` flex px-4 border-2 gap-4 ${ansId == option.id ? " border-green-500":"border-gray-200 "}  rounded-md py-2 items-center`}
              onClick={()=>{setAnswer({
                question:question._id,
                answer : option.id
              })}}
              
              
              >
            <span 
              className={` rounded-full flex items-center justify-center ${answer.answer == option.id ? " bg-green-500 text-white":"bg-gray-200 "} h-8 w-8`}
              
              > {index+1} </span>
            <span>{option.option}  </span>
          </button>

        )
      })
    }
        
    </div>
</div>

    <div className='border-2 border-l-0 px-7 py-3 flex justify-between items-center  self-end bg-slate-50 w-full '>
    
    
      <Button onClick={()=>{handelNext()}}>
          التالي
      </Button>


    <Button variant="outline"
      onClick={()=>{dispatcher(addMarkedQuestion(currentQuestion))}}
    
    >
    وضع علامة
    
    </Button>

  



</div>
    </>
   
  )
}

export default QuestionAnswer
