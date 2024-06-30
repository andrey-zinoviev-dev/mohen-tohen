import { createSlice } from '@reduxjs/toolkit'

export interface UserInterface {
    loggedIn: boolean,
}

const initialState:UserInterface = {
    loggedIn: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    }
})

// export const { loggin } = UserSlice.actions;

export default userSlice.reducer;