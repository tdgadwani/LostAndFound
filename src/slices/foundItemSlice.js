import { createSlice } from "@reduxjs/toolkit";
import { getRandomElements } from "../utils/utils";

const initialState = {
    foundItemData: [],
    foundItems: [],
    foundItemsByUser: [],
};

const foundItemSlice = createSlice({
    name: "foundItems",
    initialState,
    reducers: {
        setFoundItemData (state, value) {
            state.foundItemData = value.payload
        },
        setFoundItems(state, value) {
            value.payload = getRandomElements(value.payload, value.payload.length);
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