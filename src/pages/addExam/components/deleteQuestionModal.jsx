import {
    DialogClose,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
  import { Label } from "@/components/ui/label"

  import { Button } from "@/components/ui/button"
  import { deleteQuestion } from "../../../store/examSlice"
  import { useDispatch } from "react-redux"


const DeleteQuestionModal = ({index}) => {
      const dispatcher = useDispatch()
    
  return (
    < >
                      <DialogHeader className="p-4">
                        <DialogTitle>
                        <h1 className=' text-xl  flex w-full  items-center justify-center' dir='ltr'>
                  هل تريد حذف هذا السؤال ؟
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
                                {index}
                              </div>
                              
                      </div> */}
                              <DialogFooter className="sm:justify-start">
                              <DialogClose  className="w-full flex justify-evenly mb-4">
                      
                              <Button
                              onClick={()=>dispatcher(deleteQuestion(index))} 
                               className=" bg-red-600 h-8 w-1/3 hover:bg-red-700" type="button"  >  
                                 حذف 
                              </Button>
    
                              <Button type="button" variant="secondary" className=" h-8 w-1/3">
                                  إلغاء
                              </Button>
                                </DialogClose>
                      
                             </DialogFooter>
                            </>
  )
}

export default DeleteQuestionModal
