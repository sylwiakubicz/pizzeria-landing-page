import { configureStore } from '@reduxjs/toolkit';
import toggleSidebarReducer from "./toggleSidebar/toggleSidebarSlice"


export const store = configureStore({
    reducer: {
        toggleSidebar: toggleSidebarReducer
    }
});

