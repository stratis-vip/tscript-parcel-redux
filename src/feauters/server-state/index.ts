import {createSlice} from "@reduxjs/toolkit";

export enum ServerState {
    READY,
    FETCHING
}

const serverStateSlice = createSlice({
    name: 'serverState',
    initialState: ServerState.READY,
    reducers:{
        setFetching: () => ServerState.FETCHING,
        setReady: () => ServerState.READY
    }
})

export const {setFetching, setReady} = serverStateSlice.actions

const serverState = serverStateSlice.reducer

export default serverState