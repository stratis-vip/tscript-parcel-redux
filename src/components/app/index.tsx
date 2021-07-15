import React from "react";
import {Provider} from "react-redux";
import store from "../../app";
import Counter from "../counter";

const App = () => {
    return (
        <Provider store={store}>
            <h1>App and running! 🤣</h1>
            <Counter />
        </Provider>)
}

export default App