import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GoodInterface } from '../interfaces';

export interface UserInterface {
    loggedIn: boolean,
    name: string | null,
    phone: string | null,
    email: string | null,
    seller: boolean,
    goodsCollection?: GoodInterface[],
    favourites: GoodInterface[] | [],
}

const initialState:UserInterface = {
    loggedIn: false,
    name: null,
    phone: null,
    email: null,
    seller: false,
    favourites: [],
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserInterface>) => {
            const newUser = action.payload;
            return state = newUser;
        }
    }
})

// export const { loggin } = UserSlice.actions;
export const { login } = userSlice.actions;
export default userSlice.reducer;