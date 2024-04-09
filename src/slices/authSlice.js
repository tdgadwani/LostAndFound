import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    signupData: null,
    token: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setSignupData(state,value) {
            state.signupData = value.payload;
        },
        setToken(state,value) {
            state.token = value.payload;
        },
    }
});

export const {
    setSignupData,
    setToken,
} = authSlice.actions

export default authSlice.reducer;