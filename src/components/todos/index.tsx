import React, {useEffect, useState} from "react";
import {clearList, getTodos, Todo} from "../../feauters/todo";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../app";
import styles from './todos.module.css'

import {ServerState} from "../../feauters/server-state";
import 'semantic-ui-css/semantic.min.css'
import {Button, Loader} from "semantic-ui-react";


const Todos = () => {
    const todos = useSelector<Store, Array<Todo>>(s => s.todo)
    const serverState = useSelector<Store, ServerState>(s => s.serverState)
    const [getTD, setGetTodos] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (getTD) {
            setGetTodos(false)
            dispatch(getTodos())
        }
    }, [getTD])

    if (!todos) return null

    return (<div className={styles.component}>
            <div>
                <div className={styles.h3}>Todos</div>
                <div className={styles.buttons}>
                    <Button
                        primary
                        disabled={serverState === ServerState.FETCHING || todos.length > 0}
                        onClick={(_) => setGetTodos(true)}>Get 200 todos
                    </Button>
                    <Button
                        primary
                        disabled={todos.length === 0}
                        onClick={(_) => dispatch(clearList())}>Clear
                    </Button>
                </div>
            </div>
            <div>
                <Loader active={serverState === ServerState.FETCHING} />
                {todos.map(t => <div className={styles.todos} key={t.id}>{t.id} {t.title}
                    <input type={'checkbox'} checked={t.completed} readOnly={true}/>
                </div>)}
            </div>
        </div>
    )
}

export default Todos