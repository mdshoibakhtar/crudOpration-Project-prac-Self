import { myCreateSlice } from "./postSlice";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: myCreateSlice.reducer
})