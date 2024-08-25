import { createSlice } from "@reduxjs/toolkit";

const initialState={
    notificationData:null,
    notiloading:false,
}

const notificationSlice=createSlice({
    name: "notification",
    initialState,
    reducers:{
        setNotification(state,value){
            state.notificationData=value.payload;
        },
        setNotiloading(state,value){
            state.notiloading=value.payload;
        }
    }
})

export const {setNotification,setNotiloading}=notificationSlice.actions
export default notificationSlice;