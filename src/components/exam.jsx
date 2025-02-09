import * as React from "react"
import ExamWizard from "../pages/addExam/components/examWizard"
import ExamDetailsForm from "../pages/addExam/components/examDetailsForm"
import ExamQuestionsForm from "../pages/addExam/components/examQuestionsForm"


const Exam = () => {
  const [step, setStep] = React.useState(1)
 
  return (
   
        <ExamWizard 
          step={step} 
          tab1={<ExamDetailsForm setStep={setStep} />} 
          tab2={<ExamQuestionsForm setStep={setStep}/>} 
        />
    
  )
}

export default Exam
