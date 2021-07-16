import React, {useState} from "react";
import styles from './counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Dispatch, Store} from "../../app";
import {add, addOne, minus, minusOne} from "../../feauters/count";
import {Button, Input} from "semantic-ui-react";

const Counter = () => {
    const countervalue = useSelector<Store>(s => s.count)
    const dispatch = useDispatch<Dispatch>()
    const [step, setStep] = useState<number>(1)

    return (
        <div className={styles.component}>
            <div className={styles.container}>
                Counter: {countervalue}
            </div>
            <div className={styles.buttons}>
                <div className={styles.simpleAdd}>
                    <Button primary
                            onClick={(_) => dispatch(addOne())}
                    >add one
                    </Button>
                    <Button primary
                            onClick={(_) => dispatch(minusOne())}
                    >minus one
                    </Button>
                </div>
                <div className={styles.varAdd}>
                    <div>
                        <Input type={'number'}
                               step={1}
                               min={1}
                               value={step}
                                size={"small"}
                               onChange={(e) => setStep(Number(e.target.value))}/>
                    </div>
                    <Button
                        primary
                        onClick={(_) => dispatch(add(step))}
                    >add {step}
                    </Button>
                    <Button
                        primary
                        onClick={(_) => dispatch(minus(step))}
                    >minus {step}</Button>

                </div>
            </div>

        </div>)
}

export default Counter