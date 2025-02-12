import Loading from './loading'

const ErrorHandler = ({data,isFetching, error, children, }) => {
    if (isFetching){
        return<div className=' w-full h-full flex justify-center items-center '>

            <Loading />
        </div>
        
        
    }
    if (data && !isFetching && !error){
        return <>
                    {children}
               </>
    }
    // if (error){
    //     switch (key) {
    //         case value:
                
    //             break;
        
    //         default:
    //             break;
    //     }
    // }
  return (
    <>
    </>
  )
}

export default ErrorHandler
