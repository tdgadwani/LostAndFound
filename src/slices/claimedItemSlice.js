import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    claimedItems: null, 
    claimedItemsByUser: null,
}

const claimedItemSlice = createSlice({
    name: "claimedItems",
    initialState,
    reducers : {
        setClaimedItems (state,value) {
            state.claimedItems = value.payload;
        },
        setClaimedItemsByUser (state, value) {
            state.claimedItemsByUser = value.payload;
        },
    },
});

export const {
    setClaimedItems,
    setClaimedItemsByUser
} = claimedItemSlice.actions;

export default claimedItemSlice;