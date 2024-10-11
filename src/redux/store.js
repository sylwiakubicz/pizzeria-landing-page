import { configureStore } from '@reduxjs/toolkit';
import toggleSidebarReducer from "./toggleSidebar/toggleSidebarSlice"
import menuReducer from "./menu/menuSlice"


export const store = configureStore({
    reducer: {
        toggleSidebar: toggleSidebarReducer,
        menu: menuReducer,
    }
});

