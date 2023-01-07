import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const postAsynkThunk = createAsyncThunk("posts thunk", async () => {
    const postResponse = await axios('https://jsonplaceholder.typicode.com/users')
    const data = postResponse.data
    return data
})
export const myPostSlice = createSlice({
    name: "postsSlice",
    initialState: {
        data: [],
        status: ''
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(postAsynkThunk.pending, (state, action) => {
            state.status = 'pending'
        });
        builder.addCase(postAsynkThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.data = action.payload
        });
        builder.addCase(postAsynkThunk.rejected, (state, action) => {
            state.status = 'reject'
        })
    }
})