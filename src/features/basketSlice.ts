import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GoodInterface, goodPageInt } from "../interfaces";

//local storage
const cartContent = localStorage.getItem("basket");
// console.log(cartContent);

export interface BasketSliceInterface {
    goods: goodPageInt[],
}

const initialState:BasketSliceInterface = {
    goods: cartContent ? JSON.parse(cartContent) : [],
};

// console.log(initialState);

export const basketSlice = createSlice({
    name: "basket",
    initialState: initialState,
    reducers: {
        add: (state, action: PayloadAction<goodPageInt>) => {
            // console.log(action.payload);
            state.goods.push(action.payload);
            // console.log(state.goods);
            localStorage.setItem("basket", JSON.stringify(state.goods));

        },
        remove: (state, action: PayloadAction<goodPageInt>) => {
            const newBasket = state.goods.filter((good) => {
                return good.good._id !== action.payload.good._id;
            });

            state.goods = newBasket;

            localStorage.setItem("basket", JSON.stringify(state.goods));

        },
        changeQuantity: (state, action: PayloadAction<{good: goodPageInt, plus: boolean}>) => {
            // console.log(action.payload);
            const newBasket = state.goods.map((good) => {
                return good.good._id === action.payload.good.good._id ? {...good, quantity: action.payload.plus ?  good.quantity + 1 : good.quantity - 1 } : good; 
            })

            state.goods = newBasket;

            localStorage.setItem("basket", JSON.stringify(state.goods));

        },
        clearCart: (state) => {
            localStorage.removeItem("basket");
            state.goods = [];
        },
        editGood: () => {
            // const newBasket = state.goods.map((good) => {
            //     return good.title === action.payload.title ? {...good, selectedColor: action.payload.selectedColor} : good;
            // });

            // state.goods = newBasket;
        }
    }
})

export const { add, remove, changeQuantity, clearCart, editGood } = basketSlice.actions;

export default basketSlice.reducer;
