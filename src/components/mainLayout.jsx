

const MainLayout = ({children}) => {
  console.log(window.innerWidth, window.outerWidth) 
  return (
    <div className=' bg-gray-200 w-screen min-h-screen flex justify-center flex-col items-center lg:px-16 '>

    { children }
      
    </div>
  )
}

export default MainLayout

 
