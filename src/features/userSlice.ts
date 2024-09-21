import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GoodInterface, goodPageInt } from '../interfaces';
// import { toggleFavourite } from './goodsSlice';

export interface UserInterface {
    loggedIn: boolean,
    name: string | null,
    phone: string | null,
    email: string | null,
    seller: boolean,
    goods?: GoodInterface[],
    favourites: GoodInterface[],
    ordersHistory: GoodInterface[],
    sellsHistory: GoodInterface[],
    description?:string,
    basket: goodPageInt[],
    // basket: 
    _id: string | null,
}

const initialState:UserInterface = {
    loggedIn: false,
    name: null,
    phone: null,
    email: null,
    seller: false,
    ordersHistory: [],
    favourites: [],
    sellsHistory: [],
    basket: [],
    _id: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserInterface>) => {
            const newUser = action.payload;
            return state = newUser;
        },
        addRemoveToFavUser: (state, action: PayloadAction<GoodInterface>) => {
            // console.log(action.payload);
            if(state.favourites.find((fav) => {
                return fav._id === action.payload._id
            })) {
                const newFavourites = state.favourites.filter((fav) => {
                    return fav._id !== action.payload._id;
                });

                state.favourites = newFavourites;
            } else {
                state.favourites.push(action.payload);
            }
        },
        addRemoveToBasket: (state, action: PayloadAction<goodPageInt>) => {
            if(state.basket.find((fav) => {
                return fav.good._id === action.payload.good._id
            })) {
                const newFavourites = state.basket.filter((fav) => {
                    return fav.good._id !== action.payload.good._id;
                });

                state.basket = newFavourites;
            } else {
                state.basket.push(action.payload);
            }        
        },
        updateAccountGoodBatch: (state, action: PayloadAction<{id: string, batchSize: number}>) => {
            state.goods = state.goods && state.goods.map((good) => {
                return good._id === action.payload.id ? {...good, batch: action.payload.batchSize} : good;
            })
        },
        userLogout: (state) => {
            console.log(state);
            return state = initialState;
        }
    },
})

// export const { loggin } = UserSlice.actions;
export const { login, addRemoveToFavUser, addRemoveToBasket, updateAccountGoodBatch, userLogout } = userSlice.actions;
export default userSlice.reducer;