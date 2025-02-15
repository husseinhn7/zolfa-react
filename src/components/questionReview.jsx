import { Button } from "@/components/ui/button"
import { useSelector, useDispatch } from 'react-redux'
import { getColor } from '../util/helpers'
import { setCurrentQuestion } from '../store/examAnswerSlice'
  import {
    SheetClose,
   
  } from "@/components/ui/sheet"
  import useModal from "../hooks/modal"
const QuestionReview = ({type}) => {
    const dispatcher =  useDispatch()
    const [setModal] = useModal()

    const examData = useSelector((state)=>state.examAnswer)
    const question = examData.examDetails.questions[examData.currentQuestion] 
    const markedAndAns = examData.answeredQuestions.filter((ele)=>examData.markedQuestions.includes(ele))
    // const [answer, setAnswer] = useState({})
    // console.log(answer)
  return (
    <div className=' w-full   flex flex-col   h-[calc(100vh-4rem)]  '>
    <div className='w-full flex gap-2 grow bg-gray-100 border-b-2  px-7 py-3 flex-wrap '>
   
        {
          examData.questions.map((question, index)=>{
            return (<>
            {
              type === "mob" ? 
                    <SheetClose  key={index}>
                    <button
                    
                    onClick={()=>{dispatcher(setCurrentQuestion(index))}}           
                    className={` rounded-md outline-none w-12 h-10 border-2 ${getColor(index,  examData.markedQuestions, examData.answeredQuestions )}  border-b-8 `}> {index+1} 
                    
                    </button>
                    </SheetClose> :

                    <button
                    
                    onClick={()=>{dispatcher(setCurrentQuestion(index))}}           
                    className={` rounded-md outline-none w-12 h-10 border-2 ${getColor(index,  examData.markedQuestions, examData.answeredQuestions )}  border-b-8 `}> {index+1} 
                    
                    </button>




            }




            </>
              
            )
          })
        }
       
    </div>

    <div className='w-full grow  px-7 py-3    flex flex-col items-center justify-evenly'>
        <div className=' w-full flex justify-between items-center'>
            <span>
            سؤال تمت الإجابة علية
            </span>
            <label className=' flex items-center justify-center  rounded-md  outline-none w-12 h-10 border-2 border-green-500 border-b-8 '  >
            {examData.answeredQuestions.length}
            </label>
            
        </div>
        <div className='  w-full flex justify-between items-center  '>
            <span>
            سؤال معلم ومجاب علية
            </span>
            <label className='flex items-center justify-center  rounded-md  outline-none w-12 h-10 border-2 border-blue-500 border-b-8 '  >
            {markedAndAns.length}
            </label>
           
        </div>
        <div className=' w-full flex justify-between items-center'>
        <span>
            سؤال معلم ولم يجب علية
        </span>
            <label className='flex items-center justify-center  rounded-md  outline-none w-12 h-10 border-2 border-orange-500 border-b-8 '  >
            {examData.markedQuestions.length}
            </label>
        </div>
        <div className=' w-full flex justify-between items-center'>
            <span>
                سؤال لم يعلم ولم يجب علية
            </span>
            <label className='flex items-center justify-center  rounded-md  outline-none w-12 h-10 border-2 border-gray-500 border-b-8 '  >
            {examData.questions.length - examData.answeredQuestions.length - examData.markedQuestions.length}
            </label>
        </div>
    
    
    </div>
    <div className='w-full border-2 border-x-0 px-7 py-3 flex justify-between items-center  self-end bg-slate-50 '>
      <Button  onClick={()=>{
        console.log(examData);
        setModal({type:"confirm", open:true, 
        props : {data:{exam :examData.exam._id, answers: examData.answers}, 
        num : {answered : examData.answeredQuestions.length, all :examData.questions.length }}})}}  
        className="w-full bg-green-500"> 

      إنهاء الإختبار
       </Button>
    
    </div>


</div>
  )
}

export default QuestionReview
