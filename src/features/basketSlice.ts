import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GoodInterface } from "../interfaces";

export interface BasketSliceInterface {
    goods: GoodInterface[],
};

const initialState:BasketSliceInterface = {
    goods: [],
};

export const basketSlice = createSlice({
    name: "basket",
    initialState: initialState,
    reducers: {
        add: (state, action: PayloadAction<GoodInterface>) => {
            state.goods.push(action.payload);
        },
        remove: (state, action: PayloadAction<GoodInterface>) => {
            state.goods.filter((good) => {
                return good.title !== action.payload.title;
            })
        }
    }
})

export const { add, remove } = basketSlice.actions;

export default basketSlice.reducer;
