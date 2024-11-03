import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
  }

export const CounterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment : (state) => {
            state.value += 1;
        },
        decrement : (state) => {
            state.value -= 1;
        },
        incrementByValue : (state, action) => {
            state.value += Number(action.payload)
        },
    }
})  

export const {increment, decrement, incrementByValue} = CounterSlice.actions

export default CounterSlice.reducer