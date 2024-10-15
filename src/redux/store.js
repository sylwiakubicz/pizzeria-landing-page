import { configureStore } from '@reduxjs/toolkit';
import toggleSidebarReducer from "./toggleSidebar/toggleSidebarSlice"
import menuReducer from "./menu/menuSlice"
import navbarToggleReducer from "./navbarToggle/navbarToggleSlice"

export const store = configureStore({
    reducer: {
        toggleSidebar: toggleSidebarReducer,
        menu: menuReducer,
        navbarToggle: navbarToggleReducer
    }
});

