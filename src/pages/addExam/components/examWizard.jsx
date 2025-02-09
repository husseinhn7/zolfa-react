



const ExamWizard = ({step, tab1, tab2}) => {
  return (
    <div className='m-0 flex flex-col w-full  h-full   customShadow rounded-lg bg-white  p-3 overflow-hidden   overflow-y-scroll ' dir='rtl'>
        <div className=' flex flex-col w-full  justify-center items-center  '>  

        <div className=' flex w-full  items-center justify-evenly  gap-1   pb-3 px-4 md:px-14' >

        <span className={`flex justify-center items-center bg-slate-950  text-gray-200 p-2 rounded-lg  text-sm `}>
        1 - تفاصيل الإختبار
        
         </span>
        <span className= {`h-1 grow ${step!=1 ?"bg-slate-950":"bg-gray-200"  } `} >    </span>
        <span className={`flex justify-center items-center ${step==2 ?"bg-slate-950  text-gray-200":"bg-gray-200"  }  p-2 rounded-lg  text-sm `}>
       2- إضافة الأسئلة 

        
        
        </span>

        </div>


        <div className='flex justify-between items-center w-full px-2 md:px-6 pb-4 -mt-4'>
            
        
        
        </div>
        </div>
        {
          (step == 1) && tab1
        }

        {
          ( step == 2 )&& tab2 
        }
    </div>
  )
}

export default ExamWizard
