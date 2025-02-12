import { createSlice } from "@reduxjs/toolkit";





const loadingSlice = createSlice({
    name : "loading", 
    initialState : {
        isLoading : false
    },
    reducers : {
        setLoading : (state, payload) =>{
            state.isLoading = payload.payload
        }
    }
})




export default loadingSlice.reducer
export const {setLoading} = loadingSlice.actions 