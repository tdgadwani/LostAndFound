import { createSlice } from "@reduxjs/toolkit";
import { getRandomElements } from "../utils/utils";

const initialState = {
    lostItemData: null,
    lostItems: null,
    lostItemsByUser: null,
    items: []
};

const lostItemSlice = createSlice({
    name: "lostItem",
    initialState,
    reducers: {
        setItems(state,value) {
            value.payload = getRandomElements(value.payload, value.payload.length);
            state.items = value.payload;
        },
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
    setItems,
    setLostItemData,
    setLostItems,
    setLostItemsByUser,
} = lostItemSlice.actions;

export default lostItemSlice;