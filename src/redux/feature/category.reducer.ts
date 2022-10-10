import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: "category",
    initialState: {
        value: false,
        selectedCategory: "",
        categories: [],
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },

        toggleCategory: (state) => {
            state.value = !state.value;
        },

        setCategoryState: (state, action) => {
            state.value = action.payload;
        },

        unselectCategory: (state) => {
            state.selectedCategory = "";
        },

        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setCategories, toggleCategory, setCategoryState, unselectCategory, setSelectedCategory } =
    categorySlice.actions;

export default categorySlice.reducer;
