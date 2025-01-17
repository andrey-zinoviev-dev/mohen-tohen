import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GoodInterface } from "../interfaces";
// import { promoGoods } from "../utils";

export interface GoodsSliceInterface {
    goods: GoodInterface[],
    favourties: GoodInterface[],
}

const initialState:GoodsSliceInterface = {
    goods: [],
    favourties: [],
};

export const GoodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {
        // toggleFavourite: (state, action: PayloadAction<GoodInterface>) => {
        //     const newGoods = state.goods.map((good) => {
        //         return good.title === action.payload.title ? {...good, favourite: good.favourite ? !good.favourite : true} : good;
        //     })

        //     state.goods = newGoods;

        //     if(state.favourties.find((favGood) => {
        //         return favGood.title === action.payload.title
        //     })) {
        //         const newFavourites = state.favourties.filter((favGood) => {
        //             return favGood.title !== action.payload.title;
        //         });

        //         state.favourties = newFavourites;
        //     } else {
        //         state.favourties.push({...action.payload, favourite: true});
        //     }
        //     // console.log(state.goods);
        // }
    }
});

// export const { toggleFavourite } = GoodsSlice.actions;

export default GoodsSlice.reducer;