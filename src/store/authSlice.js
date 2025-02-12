import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const calculateExpDate = (incomingToken) =>{
    const token = incomingToken 
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp !== undefined){
        const expInMilliseconds = decodedToken.exp * 1000; 
        const currentTime = Date.now();
        const remainingDays = (expInMilliseconds - currentTime) / (24 * 60 * 60 * 1000);
        return Math.ceil(remainingDays)
    }
    return 1 
}

const token = Cookies.get("token") 
const initialState = {
    token : token,
    isAuth : token ? true : false  
}
const authSlice = createSlice({
    name :"auth",
    initialState,
    reducers :{
        login : (state, payload) =>{
            console.log("=====================")
            console.log(payload)
            const expDate = calculateExpDate(payload.payload)
            Cookies.set("token", payload.payload, { expires : expDate })
            state.token = payload.payload
            state.isAuth = true
        
        },
        logout : (state) =>{
            Cookies.remove("token")
            state.token = ""
            state.isAuth = false
        }
    }
})



export default authSlice.reducer;
export const {login, logout} = authSlice.actions