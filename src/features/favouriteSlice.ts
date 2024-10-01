import { createSlice } from "@reduxjs/toolkit";
import { GoodInterface } from "../interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

//local storage
const storageFavs = localStorage.getItem('favs');

export interface FavouriteSliceInterface {
    favouriteGoods: GoodInterface[],
}

const initialState:FavouriteSliceInterface = {
    favouriteGoods: storageFavs ? JSON.parse(storageFavs) : [],
}

//functions
function setStorageItem(favsList:GoodInterface[]) {
    return  localStorage.setItem("favs", JSON.stringify(favsList))
}

export const favouriteSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        addToFavourite: (state, action: PayloadAction<GoodInterface>) => {
            // state.favouriteGoods += 1;
            state.favouriteGoods.push(action.payload);
            setStorageItem(state.favouriteGoods);
        },
        removeFromFavourite: (state, action: PayloadAction<GoodInterface>) => {
            state.favouriteGoods = state.favouriteGoods.filter((favGood) => {
                return favGood._id !== action.payload._id;
            })
            setStorageItem(state.favouriteGoods);
            // state.favouriteGoods -= 1;
        }
    }
});

export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;