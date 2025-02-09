import { createSlice } from "@reduxjs/toolkit";
import { exam, questions } from "./fack";

  // And so on for additional questions
  

const initialState = {
    examDetails : exam,
    questions : questions,
    currentQuestion : 0,
    answers : [],
    markedQuestions: [],
    answeredQuestions : []
}


const examAnswerSlice = createSlice({
    initialState ,
    name : "examAnswer",
    reducers : {
        setExamDetails : (state, payload)=>{
    
        },
        setCurrentQuestion : (state, payload) =>{
            state.currentQuestion = payload.payload
        },
        addAnswer : (state, payload) =>{
            state.answers.push(payload.payload)
        },
        addMarkedQuestion : (state, payload) =>{
            if(!state.markedQuestions.includes(payload.payload)){
                state.markedQuestions.push(payload.payload)
            }
            
        },
        addAnsweredQuestion: (state, payload)=>{
            if(state.answeredQuestions.includes(state.currentQuestion)){
                const newAnswers = state.answers.filter((ans)=>ans.question != payload.payload.question)
                newAnswers.push(payload.payload)
                state.answers = newAnswers
            }
            if (!state.answeredQuestions.includes(state.currentQuestion)){
                state.answeredQuestions.push(state.currentQuestion)
            }
            
        },

        deleteQuestion : (state, payload)=>{
            state.questions = state.questions.filter((_, index) => index !== payload.payload);
        },
        editQuestion : (state, payload)=>{
            
        } 
    }
})


export default examAnswerSlice.reducer
export const {
    setExamDetails,
    setExamSettings, 
    addQuestion, 
    setCurrentQuestion, 
    addMarkedQuestion, 
    addAnsweredQuestion,
    addAnswer
    } = examAnswerSlice.actions