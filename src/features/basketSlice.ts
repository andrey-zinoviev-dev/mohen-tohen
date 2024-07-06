import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GoodInterface } from "../interfaces";

export interface BasketSliceInterface {
    goods: GoodInterface[],
}

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
            const newBasket = state.goods.filter((good) => {
                return good.title !== action.payload.title;
            })

            state.goods = newBasket;
        },
        addOne: (state, action: PayloadAction<GoodInterface>) => {
            const newBasket = state.goods.map((good) => {
                return good.title === action.payload.title ? {...good, quantity: good.quantity && good.quantity + 1} : good;
            });

            state.goods = newBasket;
        },
        removeOne: (state, action: PayloadAction<GoodInterface>) => {
            const newBasket = state.goods.map((good) => {
                return good.title === action.payload.title ? {...good, quantity: good.quantity && good.quantity - 1} : good;
            });

            state.goods = newBasket;
        },
        editGood: (state, action: PayloadAction<GoodInterface>) => {
            const newBasket = state.goods.map((good) => {
                return good.title === action.payload.title ? {...good, selectedColor: action.payload.selectedColor} : good;
            });

            state.goods = newBasket;
        }
    }
})

export const { add, remove, addOne, removeOne, editGood } = basketSlice.actions;

export default basketSlice.reducer;
