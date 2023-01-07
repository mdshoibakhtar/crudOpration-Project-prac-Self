import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const todosAsyncThunk = createAsyncThunk("todos thunk", async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/todos")
    const data = response.data
    return data
})
export const todosSlice = createSlice({
    name: "todosSlice",
    initialState: {
        data: [],
        status: ''

    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(todosAsyncThunk.pending, (state, action) => {
            state.status = "pending"
        })

        builder.addCase(todosAsyncThunk.fulfilled, (state, action) => {
            state.status = "fullfilled"
            state.data = action.payload
        })
        builder.addCase(todosAsyncThunk.rejected, (state, action) => {
            state.status = "rejected"
        })
    }
})