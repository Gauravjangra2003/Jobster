import { configureStore } from "@reduxjs/toolkit";
import Userslice from "./src/features/user/UserSlice";

export const store = configureStore({
    reducer: {
        user: Userslice,
    }
})