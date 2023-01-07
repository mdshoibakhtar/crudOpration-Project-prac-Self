import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "./todosSlice";

export const todosStore = configureStore({
    reducer: todosSlice.reducer
})