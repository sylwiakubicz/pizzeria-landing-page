import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showNavbarMenu: false,
}

const navbarToggleSlice = createSlice({
    name: "navbarToggle",
    initialState,
    reducers: {
        navbarToggleAction: (state) => {
            state.showNavbarMenu = !state.showNavbarMenu
        }
    }
})

export const {navbarToggleAction} = navbarToggleSlice.actions;
export default navbarToggleSlice.reducer;