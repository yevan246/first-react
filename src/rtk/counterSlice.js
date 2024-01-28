import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {value: 0},
    reducers: {
        plusCounter: (state) => {
            state.value++
        },

        minusCounter: (state) => {
            state.value--
        },

        resetCounter: (state) => {
            state.value = 0
        }
    }
})

export const {plusCounter, minusCounter, resetCounter} = counterSlice.actions

export default counterSlice.reducer