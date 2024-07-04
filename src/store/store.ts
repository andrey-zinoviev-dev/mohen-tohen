import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import basketSlice from "../features/basketSlice";
import favouriteSlice from "../features/favouriteSlice";
import goodsSlice from "../features/goodsSlice";
export const store = configureStore({
    reducer: {
        user: userSlice,
        basket: basketSlice,
        favourites: favouriteSlice,
        goods: goodsSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch