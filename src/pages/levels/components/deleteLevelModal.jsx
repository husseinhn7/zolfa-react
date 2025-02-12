import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Label } from "@/components/ui/label"

  import { Button } from "@/components/ui/button"
import useModal from "../../../hooks/modal"
import useApiToast from "../../../hooks/apiToast"
import useLoading from "../../../hooks/loading"
import { useDeleteApiMutation } from "../../../store/apiSlice"

const DeleteIntakeModal = ({id}) => {
  const { handleApiResponse } = useApiToast()
  const [deleteApi] = useDeleteApiMutation()
  const [setLoading] = useLoading()

  
  const handelDeleteLevel = async () =>{
    setLoading(true)
   const response = await deleteApi({url : `/level/${id}`, tag : "level"})
   handleApiResponse("حذف مستوى", response)
 }
   return (
    <>
    <DialogHeader className="p-4">
                            <DialogTitle>
                            <h1 className=' text-xl  flex w-full  items-center justify-center' dir='ltr'>
                      هل تريد إزالة هذا المستوى ؟
                            </h1>
                            </DialogTitle>
          
                          </DialogHeader>
                                   {/* <div className="flex items-center space-x-2">
                            <div className="grid flex-1 gap-2">
                                    <Label>
                                      <h1 className=' '>
                                      </h1>
                                    </Label>
                                    
                                     <h1>{"question.question"}</h1> 
                                  </div>
                                  
                                  </div> */}
                                  <DialogFooter className="sm:justify-start">
                                  <DialogClose  className="w-full flex justify-evenly mb-4 ">
                          
                                 <Button 
                                    onClick = {()=>{handelDeleteLevel()}}
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
