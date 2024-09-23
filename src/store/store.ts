import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import basketSlice from "../features/basketSlice";
// import favouriteSlice from "../features/favouriteSlice";
import goodsSlice from "../features/goodsSlice";
import notificationSlice from "../features/notificationSlice";
import popupSlice from "../features/popupSlice";
import { apiSlice } from "../features/apiSlice";
import { ListenerMiddleware } from "@reduxjs/toolkit";
// import orderSlice from "../features/orderSlice";
export const store = configureStore({
    reducer: {
        user: userSlice,
        basket: basketSlice,
        // favourites: favouriteSlice,
        goods: goodsSlice,
        notification: notificationSlice,
        popup: popupSlice,
        // order: orderSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch