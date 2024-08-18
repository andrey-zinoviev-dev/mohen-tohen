import { createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface NotificationInterface {
  message: string | undefined,
  // removed?: boolean,
}

const initialState:NotificationInterface = {
  message: undefined,
}

export const NotificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    changeMessage: (state, action: PayloadAction<NotificationInterface | undefined>) => {
      state.message = action.payload?.message
      // if(action.payload?.removed) {
      //   state.removed = action.payload.removed;
      // }
    }
    // show: (state, action)
  }
});

export const { changeMessage } = NotificationSlice.actions; 

export default NotificationSlice.reducer