import ExamDetailsForm from "./components/examDetailsForm"
import ExamQuestionsForm from "./components/examQuestionsForm"
import { useState } from 'react'
import ExamWizard from "./components/examWizard"


const AddExamPage = () => {
  const [step, setStep] = useState(1)
 
  return (
   
        <ExamWizard 
          step={step} 
          tab1={<ExamDetailsForm setStep={setStep} />} 
          tab2={<ExamQuestionsForm setStep={setStep}/>} 
        />
    
  )
}

export default AddExamPage
