import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const myCreateThunkAsync = createAsyncThunk('usersThunk', async () => {
    const response = await axios.get("http://localhost:5000/contacts")
    const data = response.data
    return data
})

export const mySlice = createSlice({
    name: "xyz",
    initialState: {
        data: [],
        status: ''
    },
    reducers: {
        fillData: (state, val) => {
            console.log(val.payload);
            state.data = val.payload
        }
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
            console.log(action.error);
            state.data = action.error
            state.status = "rejected"
        })
    }
})
export const { fillData } = mySlice.actions