import  { useEffect, useState } from 'react'
import {Clock3, Menu} from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import QuestionReview from './questionReview'
import QuestionAnswer from './questionAnswer'
import Countdown from 'react-countdown'
import { useSearchParams } from 'react-router-dom'
import useLoading from '../hooks/loading'
import { useGetApiQuery } from '../store/apiSlice'
import BigLoader from './bigLoader'
import ExamCardAlert from './examCardAlert'
import { useDispatch } from 'react-redux'
import { setExamDetails } from '../store/examAnswerSlice'
import { useSelector } from 'react-redux'

import useApiToast from "../hooks/apiToast"
import { usePostApiMutation } from "../store/apiSlice";
import { useNavigate } from "react-router";
 import { useParams } from 'react-router'


const ExamAnswer = () => {
  const dispatch = useDispatch()
  const examData = useSelector((state)=>state.examAnswer)
  const {id} = useParams()
  const {data, isFetching, isError} = useGetApiQuery({url:`/exam/${id}`})
  const [start, setStart] = useState(false)
  useEffect(()=>{
    if (!isFetching && !isError && data){
      console.log(data.data.questions)
      dispatch(setExamDetails({
        exam : data.data,
        questions : data.data.questions
      }))
    }
  }, [data])

  const getExamDuration = () => data.data.duration ? data.data.duration * 60 * 60 * 1000 : 2 * 60 * 60 * 1000

const navigate = useNavigate()
    const { handleApiResponse } = useApiToast()
     const [postApi] = usePostApiMutation()
    const [setLoading] = useLoading()
    const handelPostAnswer = async () =>{
        setLoading(true)
        const response = await postApi({url : `/answer`, body : examData.answers  })
        if (response.data){
            navigate("/")
        }
        handleApiResponse("", response)

        }
  return (
    <>
    {isFetching && <BigLoader/>}
    {
      start ?  <> <header   className=' bg-slate-800 flex h-16 w-full px-8 py-4 items-center justify-between'    >
                        <div className=' flex items-center justify-center bg-slate-600 text-xl rounded-md text-gray-100 px-4 py-1'>
                              <Countdown 
                                date={Date.now() + getExamDuration() }
                                daysInHours={true}
                                onComplete={()=>{handelPostAnswer()}}
                              />  
                                
                                <Clock3 className='ml-2' />
                        </div>

                              <span className=' text-gray-100 text-xl flex items-center justify-center '>  
                              
                              {data.data.title}
                                  <Sheet>
                                    <SheetTrigger className=" block md:hidden"><Menu className=' ml-2' /></SheetTrigger> 
                                        <SheetContent side={"right"} className ="border-x-0 p-0">
                                            <div className=' bg-slate-800 flex h-16 w-full ' ></div>
                                        <QuestionReview type={"mob"} />
                                      </SheetContent>
                                  </Sheet>
                              </span>
                      </header>


            <div className=' flex w-full   h-[calc(100vh-4rem)] ' dir='rtl' >
                <div className='   flex flex-col gap-4 w-full md:w-9/12 h-full     justify-between border-l-2'>
                    <QuestionAnswer />
                </div>
            <div className=' w-3/12 hidden md:flex'>
                <QuestionReview />
            </div>       
        </div> </>: <div className='w-[100vw] h-screen bg-orange-100' > 

        {
          (!isFetching && !isError && data) && <ExamCardAlert data = {data.data}  action={setStart}  />
          
        }
        
        </div>
    }
   
    
    </>
  )
}

export default ExamAnswer
