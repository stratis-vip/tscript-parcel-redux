import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {setFetching, setReady} from "../server-state";

export interface Todo {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}

const initialState: Array<Todo> = []

export const getTodos = createAsyncThunk(
    'todo/getTodos',
    async (_,{dispatch}) => {
        dispatch(setFetching())
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
            return response.json()
        }finally {
            dispatch(setReady())
        }
    }
)

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getTodos.fulfilled, (state, action) => {
            console.log('json ', action.payload)
            return  action.payload
        })
    },
    reducers: {
        clearList: (state)=> state = []
    }
})

export const {clearList} = todoSlice.actions

const todo = todoSlice.reducer
export default todo