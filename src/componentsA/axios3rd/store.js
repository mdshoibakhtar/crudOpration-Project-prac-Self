import { configureStore } from "@reduxjs/toolkit";
import { myPostSlice } from "./postsSlice";

export const store = configureStore({
    reducer: myPostSlice.reducer
})