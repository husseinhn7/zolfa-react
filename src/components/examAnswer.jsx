import React from 'react'
import { Button } from "@/components/ui/button"
import {Clock3, Menu} from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import QuestionReview from './questionReview'
import QuestionAnswer from './questionAnswer'
import Countdown from 'react-countdown'

const ExamAnswer = () => {
  const num = 2 * 60 * 60 * 1000
  return (
    <>
    <header   className=' bg-slate-800 flex h-16 w-full px-8 py-4 items-center justify-between'    >
    <div className=' flex items-center justify-center bg-slate-600 text-xl rounded-md text-gray-100 px-4 py-1'>
    <Countdown 
      date={Date.now() + num }
      daysInHours={true}
      onComplete={()=>console.log("complete")}
    />  
      
      <Clock3 className='ml-2' />
    </div>

          <span className=' text-gray-100 text-xl flex items-center justify-center '>   exam title 
          
          <Sheet>
        <SheetTrigger className=" block md:hidden"><Menu className=' ml-2' /></SheetTrigger> 
          <SheetContent side={"right"} className ="border-x-0 p-0">
          <div className=' bg-slate-800 flex h-16 w-full ' ></div>
          <QuestionReview />
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
           



            <div>
            
            
            </div>

           

            
        
        </div>
    
    </>
  )
}

export default ExamAnswer
