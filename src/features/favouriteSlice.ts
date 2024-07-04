import { createSlice } from "@reduxjs/toolkit";

export interface FavouriteSliceInterface {
    favouriteGoods: number,
}

const initialState:FavouriteSliceInterface = {
    favouriteGoods: 0,
}

export const favouriteSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        addRemoveFavourite: (state) => {
            state.favouriteGoods += 1;
        },
        removeFromFavourite: (state) => {
            state.favouriteGoods -= 1;
        }
    }
});

export const { addRemoveFavourite, removeFromFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;