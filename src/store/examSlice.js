import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    title:"", 
    creator :"",
    startDate : "", 
    endDate: "", 
    final: "",  
    subject: "", 
    comment: "", 
    duration:2,
    questions : []

}


const examSlice = createSlice({
    initialState ,
    name : "exam",
    reducers : {
        setExamDetails : (state, payload)=>{
            console.log(payload.payload)

            return  {
                ...payload.payload,
                questions : state.questions
            }
        },
        reSetExam : (state, payload)=>{
                return initialState
        },
        setExamSettings : (state, payload)=>{
            state.startDate = payload.payload.startDate
            state.endDate = payload.payload.endDate
        },
        addQuestion : (state, payload) =>{
            state.questions.push(payload.payload)
        },
        deleteQuestion : (state, payload)=>{
            state.questions = state.questions.filter((_, index) => index !== payload.payload);
        },
        editQuestion : (state, payload)=>{
            const newQuestions = state.questions.filter((_, index) => index !== payload.payload.index);
            newQuestions.push(payload.payload.question)
            state.questions = newQuestions
        }

    }
})


export default examSlice.reducer
export const {setExamDetails, setExamSettings, addQuestion, deleteQuestion, editQuestion, reSetExam} = examSlice.actions