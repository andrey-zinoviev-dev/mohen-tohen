import { createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface NotificationInterface {
  message: string | null,
}

const initialState:NotificationInterface = {
  message: null,
}

export const NotificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    changeMessage: (state, action: PayloadAction<string | null>) => {
      state.message = action.payload
    }
    // show: (state, action)
  }
});

export const { changeMessage } = NotificationSlice.actions; 

export default NotificationSlice.reducer