import { configureStore } from "@reduxjs/toolkit";
import { mySlice } from "./slice";

export const myStore = configureStore({
    reducer: mySlice.reducer
})