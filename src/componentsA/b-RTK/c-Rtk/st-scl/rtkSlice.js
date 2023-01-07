import { createSlice } from "@reduxjs/toolkit";

export const rtkSlice = createSlice({
    name: "rtkSlice",
    initialState: {
        data: []
    },
    reducers: {
        fetchData: (state, action) => {
            // console.log('action', action)
            state.data = action.payload;
        }
    }
})
export const { fetchData } = rtkSlice.actions