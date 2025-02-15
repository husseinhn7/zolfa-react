import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
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
import AddSupervisorModal from "../../pages/students/components/addSuprevisor"
import DeleteIntakeModal from "../../pages/intakes/components/deleteIntakeModal"
import EditIntakeModal from "../../pages/intakes/components/editIntakeModal"
import AddIntakeModal from "../../pages/intakes/components/addIntakeModal"

import DeleteLevelModal from "../../pages/levels/components/deleteLevelModal"
import EditLevelModal from "../../pages/levels/components/editLevelModal"
import AddLevelModal from "../../pages/levels/components/addLevelModal"


import DeleteSubjectModal from "../../pages/subjects/components/deleteSubjectModal"
import EditSubjectModal from "../../pages/subjects/components/editSubjectModal"
import AddSubjectModal from "../../pages/subjects/components/addSubjectModal"

import DeleteSupervisorModal from "../../pages/supervisors/components/deleteAdminModal"
import LogoutModal from "../logoutModal"
import ConfirmSubmission from "../confirmSubmission"




const modalList  = {
    "deleteExam" : DeleteExamModal, 
    "addQuestion" : AddQuestionModal, 
    "e" : EditQuestionModal,
    "f" : DeleteQuestionModal, 
    "saveExam" : SaveExamModal,
    "deleteStudent" : DeleteStudentModal, 
    "addSupervisor" : AddSupervisorModal,
    "deleteIntake" : DeleteIntakeModal,
    "editIntake" : EditIntakeModal,
    "addIntake": AddIntakeModal,
    "deleteLevel" : DeleteLevelModal,
    "editLevel" : EditLevelModal,
    "addLevel": AddLevelModal,
    "deleteSubject" : DeleteSubjectModal,
    "editSubject" : EditSubjectModal,
    "addSubject": AddSubjectModal, 
    "deleteSupervisor" : DeleteSupervisorModal,
    "logout" : LogoutModal, 
    "confirm" : ConfirmSubmission

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
  return (
    <div>
    <Dialog open={modal.open} onOpenChange={setOpen}>
 
      <DialogContent className="   w-[90vw] md:w-full rounded-lg p-0" aria-describedby={"dialog"}>
        {choose(modal.type, modal.props)}
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default GlobalModal
