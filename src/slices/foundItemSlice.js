import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    foundItemData: null,
    foundItems: null,
    foundItemsByUser: null,
};

const foundItemSlice = createSlice({
    name: "foundItems",
    initialState,
    reducers: {
        setFoundItemData (state, value) {
            state.foundItemData = value.payload
        },
        setFoundItems(state, value) {
            state.foundItems = value.payload
        },
        setFoundItemsByUser (state, value) {
            state.foundItemsByUser = value.payload
        },
    }
});

export const {
    setFoundItemData,
    setFoundItems,
    setFoundItemsByUser,
} = foundItemSlice.actions;

export default foundItemSlice;