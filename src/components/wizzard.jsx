import { memo } from 'react'




const Wizard = ({step, tab1, tab2}) => {
  return (
    <div className='flex flex-col w-full   ' dir='rtl'>
        <div className=' flex w-full p-2  items-center justify-evenly  gap-1 ' >

            <span className=' w-10 h-10 rounded-full bg-slate-950  text-gray-200  flex justify-center items-center'>  1  </span>
            <span className= {`h-1 grow ${step==2 ?"bg-slate-950":"bg-gray-200"  } `} >    </span>

            <span  className={` w-10 h-10 rounded-full ${step==2 ?"bg-slate-950  text-gray-200":"bg-gray-200"  }  flex justify-center items-center`}> 2   </span>
           
        </div>

        {
          step == 2 ? tab2 : tab1 
        }
      
    </div>
  )
}

export default memo(Wizard)
