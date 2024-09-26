import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GoodInterface, goodPageInt } from "../interfaces";

//local storage
const cartContent = localStorage.getItem("cart");
console.log(cartContent);

export interface BasketSliceInterface {
    goods: goodPageInt[],
}

const initialState:BasketSliceInterface = {
    goods: [],
};

export const basketSlice = createSlice({
    name: "basket",
    initialState: initialState,
    reducers: {
        add: (state, action: PayloadAction<goodPageInt>) => {
            state.goods.push(action.payload);
        },
        remove: (state, action: PayloadAction<goodPageInt>) => {
            const newBasket = state.goods.filter((good) => {
                return good.good._id !== action.payload.good._id;
            })

            state.goods = newBasket;
        },
        changeQuantity: (state, action: PayloadAction<goodPageInt>) => {
            const newBasket = state.goods.map((good) => {
                return good.good._id === action.payload.good._id ? {...good, quantity: good.quantity + action.payload.quantity} : good; 
            })

            state.goods = newBasket;
        },
        addOne: (state, action: PayloadAction<GoodInterface>) => {
            // const newBasket = state.goods.map((good) => {
            //     return good.title === action.payload.title ? {...good, quantity: good.quantity && good.quantity + 1} : good;
            // });

            // state.goods = newBasket;
        },
        removeOne: (state, action: PayloadAction<GoodInterface>) => {
            // const newBasket = state.goods.map((good) => {
            //     return good.title === action.payload.title ? {...good, quantity: good.quantity && good.quantity - 1} : good;
            // });

            // state.goods = newBasket;
        },
        editGood: (state, action: PayloadAction<GoodInterface>) => {
            // const newBasket = state.goods.map((good) => {
            //     return good.title === action.payload.title ? {...good, selectedColor: action.payload.selectedColor} : good;
            // });

            // state.goods = newBasket;
        }
    }
})

export const { add, remove, changeQuantity, addOne, removeOne, editGood } = basketSlice.actions;

export default basketSlice.reducer;
