import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterslice",
  initialState: {
    value: 90,
  },
  reducers: {
    inc: (data) => {
      data.value += 1;
    },
    dec: (data) => {
      data.value -= 1;
    },
  },
});
export const { inc } = counterSlice.actions;
export const { dec } = counterSlice.actions;
