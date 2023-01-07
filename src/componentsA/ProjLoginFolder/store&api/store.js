import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsApi";

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(contactsApi.middleware)
    }
})