import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GoodInterface } from '../interfaces';
// import { toggleFavourite } from './goodsSlice';

export interface UserInterface {
    loggedIn: boolean,
    name: string | null,
    phone: string | null,
    email: string | null,
    seller: boolean,
    goodsCollection?: GoodInterface[],
    favourites: GoodInterface[],
    history: GoodInterface[],
}

const initialState:UserInterface = {
    loggedIn: false,
    name: null,
    phone: null,
    email: null,
    seller: false,
    history: [],
    favourites: [],
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
                return fav.title === action.payload.title
            })) {
                const newFavourites = state.favourites.filter((fav) => {
                    return fav.title !== action.payload.title;
                });

                state.favourites = newFavourites;
            } else {
                state.favourites.push(action.payload);
            }
        }
    }
})

// export const { loggin } = UserSlice.actions;
export const { login, addRemoveToFavUser } = userSlice.actions;
export default userSlice.reducer;