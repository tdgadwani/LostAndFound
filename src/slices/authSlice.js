import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    appData: null,
    signupData: null,
    token: null,
    userData: null,
    leaderBoardData: null,
    leaderBoardLoading:false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAppData(state, value) {
            state.appData = value.payload;
        },
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
        setLeaderBoardData(state, value) {
            state.leaderBoardData = value.payload;
        },
        setLeaderBoardLoading(state, value) {
            state.leaderBoardData = value.payload;
        }
    }
});

export const {
    setAppData,
    setSignupData,
    setToken,
    setUserData,
    setUpdataSignupData,
    setLeaderBoardData,
    setLeaderBoardLoading
    
} = authSlice.actions

export default authSlice;