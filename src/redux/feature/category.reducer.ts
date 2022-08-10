import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    value: false,
  },
  reducers: {
    toggleCategory: (state) => {
      state.value = !state.value;
    },
    setCategoryState: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleCategory, setCategoryState } = categorySlice.actions

export default categorySlice.reducer