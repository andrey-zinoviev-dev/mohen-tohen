import { createSlice } from "@reduxjs/toolkit";

export interface PopupInterface {
    opened: boolean,
}

const initialState:PopupInterface = {
    opened: false,
};

export const PopupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        openPopup: (state) => {
            state.opened = true;
        },
        closePopup: (state) => {
            state.opened = false;
        }
    }
});

export const { openPopup, closePopup } = PopupSlice.actions;

export default PopupSlice.reducer;