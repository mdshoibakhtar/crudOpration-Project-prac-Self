import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const myCreateAsyncThunk = createAsyncThunk('users-async', async (payload, { rejectWithValue }) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = response.data
    if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(data)
    }
    return data
})
const initialState = {
    data: [],
    status: ''
}
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getData: (state) => {

        }
    },
    extraReducers: (builder) => {
        // When our request is pending:
        builder.addCase(myCreateAsyncThunk.pending, (state, action) => {
            console.log('pending-----', action)
            state.status = 'pending'
        })

        builder.addCase(myCreateAsyncThunk.fulfilled, (state, action) => {
            console.log('fulfille----', action)
            state.status = 'fulfilled'
            state.data = action.payload
        })

        builder.addCase(myCreateAsyncThunk.rejected, (state, action) => {
            console.log('rejected-----', action)
            state.status = 'rejected'
        })
    }
})
export const { getData } = usersSlice.actions;