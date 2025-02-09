import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import AddQuestionModal from "../../pages/addExam/components/addQuestionModal"
 
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setOpenModal } from "../../store/modalSlice"


import DeleteExamModal from "../../pages/exams/components/deleteExamModal"
import EditQuestionModal from "../../pages/addExam/components/editeQuestionModal"
import DeleteQuestionModal from "../../pages/addExam/components/deleteQuestionModal"
import SaveExamModal from "../../pages/addExam/components/saveExamModal"
import DeleteStudentModal from "../../pages/students/components/deleteStudentModal"

const modalList  = {
    "deleteExam" : DeleteExamModal, 
    "addQuestion" : AddQuestionModal, 
    "e" : EditQuestionModal,
    "f" : DeleteQuestionModal, 
    "saveExam" : SaveExamModal,
    "deleteStudent" : DeleteStudentModal


}




const choose = (type, props) => {
    const Component = modalList[type];
    if (Component) {
      return <Component {...props} >{type}</Component>;
    }
    return <></>; 
  };
  

const GlobalModal = () => {
    const dispatcher = useDispatch()
    const modal = useSelector((state)=>state.modal)
    
    const setOpen = (value) =>{
        dispatcher(setOpenModal(value))
    }
    console.log(modal.open)
  return (
    <div>
    <Dialog open={modal.open} onOpenChange={setOpen}>
        <DialogHeader className="bg-red-300">
          <DialogTitle></DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
      <DialogContent className="sm:max-w-[500px]  p-0" aria-describedby={"dialog"}>
        {choose(modal.type, modal.props)}
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default GlobalModal
