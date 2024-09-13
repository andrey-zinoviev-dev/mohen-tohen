import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GoodInterface } from '../interfaces';
// import { toggleFavourite } from './goodsSlice';

export interface UserInterface {
    loggedIn: boolean,
    name: string | null,
    phone: string | null,
    email: string | null,
    seller: boolean,
    goods?: string[],
    favourites: GoodInterface[],
    ordersHistory: GoodInterface[],
    sellsHistory: GoodInterface[],
    description?:string,
    basket: GoodInterface[],
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
        addRemoveToBasket: (state, action: PayloadAction<GoodInterface>) => {
            if(state.basket.find((fav) => {
                return fav._id === action.payload._id
            })) {
                const newFavourites = state.basket.filter((fav) => {
                    return fav._id !== action.payload._id;
                });

                state.basket = newFavourites;
            } else {
                state.basket.push(action.payload);
            }        
        },
        userLogout: (state) => {
            console.log(state);
            return state = initialState;
        }
    },
})

// export const { loggin } = UserSlice.actions;
export const { login, addRemoveToFavUser, addRemoveToBasket, userLogout } = userSlice.actions;
export default userSlice.reducer;