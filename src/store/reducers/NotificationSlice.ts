import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlertColor } from '@mui/material';

interface INotificationState {
  open: boolean;
  message: string;
  severity: AlertColor;
}

const initialState: INotificationState = {
  open: false,
  message: '',
  severity: 'error',
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    genNotification: (state, action: PayloadAction<{ message: string; severity: AlertColor }>) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    statusNotification: (state, action) => {
      state.open = action.payload;
    },
  },
});

export default notificationSlice.reducer;
