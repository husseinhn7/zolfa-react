import { createSlice } from "@reduxjs/toolkit";


const initialValue = {
    type : "", 
    open : false, 
    props : {}
}

const modalSlice = createSlice({
    name : "modal", 
    initialState:initialValue,
    reducers : {
        setModal : (state, action )=>{
            return action.payload
        }, 
        setOpenModal : (state, payload) =>{
            state.open = payload.payload
        }
    }
})


export default modalSlice.reducer
export const {setModal, setOpenModal} = modalSlice.actions