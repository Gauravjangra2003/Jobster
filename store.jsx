import { configureStore } from "@reduxjs/toolkit";
import userslice from "./src/features/user/userSlice";

export const store = configureStore({
    reducer: {
        user: userslice,
    }
})