import { configureStore } from "@reduxjs/toolkit";
import Userslice from "./src/features/user/UserSlice";
import jobSlice from "./src/features/job/jobSlice";
import allJobsSlice from "./src/features/allJobs/allJobsSlice";

export const store = configureStore({
    reducer: {
        user: Userslice,
        job: jobSlice,
        allJobs: allJobsSlice
    }
})