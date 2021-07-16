import React from "react";
import {Provider} from "react-redux";
import store from "../../app";
import Counter from "../counter";
import Todos from "../todos";
import styles from './app.module.css'

const App = () => {
    return (
        <Provider store={store}>
            <div className={styles.container}>
                <h1>App and running! 🤣</h1>
                <Counter/>
                <Todos/>
            </div>
        </Provider>)
}

export default App