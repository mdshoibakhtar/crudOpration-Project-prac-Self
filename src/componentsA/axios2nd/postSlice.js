import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const myCreateThunkAsync = createAsyncThunk('usersThunk', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    const data = response.data
    return data
})

export const myCreateSlice = createSlice({
    name: "usersSlice",
    initialState: {
        data: [],
        status: ''
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(myCreateThunkAsync.pending, (state, action) => {
            state.status = "pending"
        });
        builder.addCase(myCreateThunkAsync.fulfilled, (state, action) => {
            state.status = "fullfill".action
            state.data = action.payload
        });
        builder.addCase(myCreateThunkAsync.rejected, (state, action) => {
            state.status = "rejected"
        })
    }
})