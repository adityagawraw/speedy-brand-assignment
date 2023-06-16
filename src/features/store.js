import { configureStore } from "@reduxjs/toolkit";
import topicsSlice from "./topics-Slice";

const store = configureStore({
    reducer:{
        topics:topicsSlice,
    }
})
export default store;