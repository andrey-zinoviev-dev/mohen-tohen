import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import basketSlice from "../features/basketSlice";
import favouriteSlice from "../features/favouriteSlice";
import goodsSlice from "../features/goodsSlice";
import notificationSlice from "../features/notificationSlice";
export const store = configureStore({
    reducer: {
        user: userSlice,
        basket: basketSlice,
        favourites: favouriteSlice,
        goods: goodsSlice,
        notification: notificationSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch