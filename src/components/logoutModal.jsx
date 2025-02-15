import {
    DialogClose,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
 import { logout } from "../store/authSlice"
 import { useDispatch } from "react-redux"



const LogoutModal = () => {
    const dispatch = useDispatch()
  return (
    <>
        <DialogHeader className="p-4">
                                <DialogTitle>
                                <h1 className=' text-xl  flex w-full  items-center justify-center' dir='ltr'>
                          هل تريد تسجيل الخروج
                                </h1>
                                </DialogTitle>
              
                              </DialogHeader>
                           
                                      <DialogFooter className="sm:justify-start">
                                      <DialogClose  className="w-full flex justify-evenly mb-4 ">
                              
                                     <Button 
                                        onClick ={()=>{dispatch(logout())}}
                                      className=" bg-red-600 h-8 w-1/3 hover:bg-red-700" type="button"  >  
                                         نعم
                                      </Button>
            
                                      <Button type="button" variant="secondary" className="w-1/3 h-8   ">
                                          إلغاء
                                      </Button>
        
                                      
                                        </DialogClose>
                              
                                     </DialogFooter>
                                    </>
  )
}

export default LogoutModal
