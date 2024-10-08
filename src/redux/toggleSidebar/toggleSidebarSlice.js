import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showSidebar: false,
    sidebarType: ''
}

const toggleSidebarSlice = createSlice({
    name: "toggleSidebar",
    initialState,
    reducers: {
        toggleSidebarAction: (state, action) => {
            if (state.showSidebar && action.payload === state.sidebarType) {
                state.showSidebar = false;
            } else {
                state.showSidebar = true;
                state.sidebarType = action.payload;
            }
        }
    }
})

export const {toggleSidebarAction} = toggleSidebarSlice.actions;
export default toggleSidebarSlice.reducer;