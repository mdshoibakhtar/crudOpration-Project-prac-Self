import { configureStore } from "@reduxjs/toolkit";
import { rtkSlice } from "./rtkSlice";

export const rtkStore = configureStore({
    reducer: rtkSlice.reducer
})