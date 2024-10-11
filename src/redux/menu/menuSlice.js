import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        selectedCategory: 'pizzas',
        menuData: null
    },
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setMenuData: (state, action) => {
            state.menuData = action.payload;
        }
    }
})

export const {setMenuData, setCategoryS} = menuSlice.actions;

export const selectCategory = (state) => state.menu.selectedCategory;
export const selectMenuData = (state) => state.menu.menuData;

export default menuSlice.reducer;