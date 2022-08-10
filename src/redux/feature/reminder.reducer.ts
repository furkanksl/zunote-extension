import { createSlice } from '@reduxjs/toolkit'

export const reminderSlice = createSlice({
  name: 'reminder',
  initialState: {
    value: false,
  },
  reducers: {
    toggleReminder: (state) => {
      state.value = !state.value;
    },
    setReminderState: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleReminder, setReminderState } = reminderSlice.actions

export default reminderSlice.reducer