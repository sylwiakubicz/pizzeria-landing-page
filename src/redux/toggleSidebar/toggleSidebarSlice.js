import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showSidebar: false,
}

const toggleSidebarSlice = createSlice({
    name: "toggleSidebar",
    initialState,
    reducers: {
        toggleSidebarAction: (state) => {
            state.showSidebar = !state.showSidebar
        }
    }
})

export const {toggleSidebarAction} = toggleSidebarSlice.actions;
export default toggleSidebarSlice.reducer;