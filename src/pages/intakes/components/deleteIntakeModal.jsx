import {
    DialogClose,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
 
import { Button } from "@/components/ui/button"
import useApiToast from "../../../hooks/apiToast"
import useLoading from "../../../hooks/loading"
import { useDeleteApiMutation } from "../../../store/apiSlice"


const DeleteIntakeModal = ({id}) => {
  const { handleApiResponse } = useApiToast()
  const [deleteApi] = useDeleteApiMutation()
  const [setLoading] = useLoading()
 


    

  const handelDeleteIntake = async () =>{
     setLoading(true)
    const response = await deleteApi({url : `/intake/${id}`, tag : "intake"})
    handleApiResponse("حذف دفعة", response)
  }
   return (
    <>
    <DialogHeader className="p-4">
                            <DialogTitle>
                            <h1 className=' text-xl  flex w-full  items-center justify-center' dir='ltr'>
                      هل تريد إزالة هذة الدفعة
                            </h1>
                            </DialogTitle>
          
                          </DialogHeader>
                                  <DialogFooter className="sm:justify-start">
                                  <DialogClose  className="w-full flex justify-evenly mb-4 ">
                          
                                        <Button 
                                        onClick={()=>{handelDeleteIntake();console.log("==========-0000000000000000000")}}
                                        className=" bg-red-600 h-8 w-1/3 hover:bg-red-700" type="button"  >  
                                            إزالة
                                          </Button>
                
                                          <Button type="button" variant="secondary" className="w-1/3 h-8   ">
                                              إلغاء
                                          </Button>
    
                                  
                                    </DialogClose>
                          
                                 </DialogFooter>
                                </>
  )
}

export default DeleteIntakeModal
