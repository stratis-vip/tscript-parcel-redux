import {configureStore} from "@reduxjs/toolkit";
import count from "../feauters/count";

export interface Store  {
    count:number
}

export type Dispatch = typeof store.dispatch

const store = configureStore({
    reducer: {count}
})

export default store