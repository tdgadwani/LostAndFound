import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lostItemData: null,
    lostItems: null,
    lostItemsByUser: null,
};

const lostItemSlice = createSlice({
    name: "lostItems",
    initialState,
    reducers: {
        setLostItemData(state,value){
            state.lostItemData = value.payload;
        },
        setLostItems(state,value) {
            state.lostItems = value.payload;
        },
        setLostItemsByUser(state,value) {
            state.lostItemsByUser = value.payload;
        },
    }
});

export const {
    setLostItemData,
    setLostItems,
    setLostItemsByUser,
} = lostItemSlice.actions;

export default lostItemSlice;