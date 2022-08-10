import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    value: false,
    selectedCategory: '',
  },
  reducers: {
    toggleCategory: (state) => {
      state.value = !state.value;
    },
    setCategoryState: (state, action) => {
      state.value = action.payload
    },
    unselectCategory: (state) => {
      state.selectedCategory = '';
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { toggleCategory, setCategoryState, unselectCategory, setSelectedCategory } = categorySlice.actions

export default categorySlice.reducer