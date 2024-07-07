import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    signupData: null,
    token: null,
    userData: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setSignupData(state,value) {
            state.signupData = value.payload;
        },
        setUpdataSignupData(state,value) {
            state.signupData.otp = value.payload;
        },
        setToken(state,value) {
            state.token = value.payload;
        },
        setUserData(state,value) {
            state.userData = value.payload;
        },
    }
});

export const {
    setSignupData,
    setToken,
    setUserData,
    setUpdataSignupData
    
} = authSlice.actions

export default authSlice;