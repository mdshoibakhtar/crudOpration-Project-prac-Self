import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsApi";

export const reduxStore = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer
    },
    middleware: (getDefaultmiddleware) => {
        return getDefaultmiddleware().concat(contactsApi.middleware)
    }
})