import {configureStore} from "@reduxjs/toolkit";
import count from "../feauters/count";
import todo, {Todo} from "../feauters/todo";
import serverState, {ServerState} from "../feauters/server-state";

export interface Store  {
    count:number,
    todo:Array<Todo>,
    serverState: ServerState
}

export type Dispatch = typeof store.dispatch

const store = configureStore({
    reducer: {count, todo, serverState}
})

export default store