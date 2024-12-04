import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GoodInterface, goodPageInt, TransactionInterface } from '../interfaces';
// import { toggleFavourite } from './goodsSlice';

export interface UserInterface {
    loggedIn: boolean,
    name: string,
    phone: string,
    email: string,
    seller: boolean,
    goods?: GoodInterface[],
    favourites: GoodInterface[],
    ordersHistory: TransactionInterface[],
    sellsHistory: GoodInterface[],
    description?:string,
    basket: goodPageInt[],
    cover?: string,
    // basket: 
    _id: string | null,
    brandName?: string,
}

const initialState:UserInterface = {
    loggedIn: false,
    name: "",
    phone: "",
    email: "",
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
            console.log(state);
            const newUser = action.payload;
            localStorage.setItem("loggedIn", JSON.stringify({loggedIn: true}))
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
        deleteBasketGood: (state, action: PayloadAction<GoodInterface>) => {
            const newBasket = state.basket.filter((basketItem) => {
                return basketItem.good._id !== action.payload._id;
            });
            state.basket = newBasket;
        },
        updateBasketGoodQuantity: (state, action: PayloadAction<goodPageInt>) => {
            const newBasket = state.basket.map((basketItem) => {
                return basketItem.good._id === action.payload.good._id ? {...basketItem, quantity: action.payload.quantity} : basketItem;
            });
            state.basket = newBasket;
        },
        updateAccountGoodBatch: (state, action: PayloadAction<{id: string, batchSize: number}>) => {
            state.goods = state.goods && state.goods.map((good) => {
                return good._id === action.payload.id ? {...good, batch: action.payload.batchSize} : good;
            })
        },
        userLogout: (state) => {
            console.log(state);
            localStorage.removeItem("loggedIn");
            return state = initialState;
        },
        addNewGoodToUser: (state, action: PayloadAction<GoodInterface>) => {
            state.goods?.push(action.payload);
        },
        updateOrdersHistory: (state, action: PayloadAction<TransactionInterface>) => {
            // console.log(action.payload);
            state.ordersHistory.push(action.payload);
            return state;
        },
        updateUserCover: (state, action: PayloadAction<string>) => {
            state.cover = action.payload;
            return state;
        },
        updateGoodData: (state, action: PayloadAction<GoodInterface>) => {
            console.log(action.payload);
            console.log(state);
            const newGoods = state.goods?.map((good) => {
                return good._id === action.payload._id ? action.payload : good;
            });

            state.goods = newGoods;
            return state;
        }
    },
})

// export const { loggin } = UserSlice.actions;
export const { login, addRemoveToFavUser, addRemoveToBasket, deleteBasketGood, updateBasketGoodQuantity, updateAccountGoodBatch, userLogout, addNewGoodToUser, updateOrdersHistory, updateUserCover, updateGoodData } = userSlice.actions;
export default userSlice.reducer;