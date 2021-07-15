import {createSlice} from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: 'count',
    initialState: 0,
    reducers: {
        addOne: state => state + 1,
        minusOne: state => state - 1,
        add: (state: number, {payload}) => state = state + payload,
        minus: (state: number, {payload}) => state = state - payload,

    }
})

export const {addOne, minusOne, add, minus} = countSlice.actions

const count = countSlice.reducer

export default count