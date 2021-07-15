import React, {useState} from "react";
import styles from './counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Dispatch, Store} from "../../app";
import {add, addOne, minus, minusOne} from "../../feauters/count";

const Counter = () => {
    const countervalue = useSelector<Store>(s => s.count)
    const dispatch = useDispatch<Dispatch>()
    const [step, setStep] = useState<number>(1)

    return (
       <div>
           <div className={styles.container}>
               Counter: {countervalue}
           </div>
            <div>
                <button className={styles.button}
                        onClick={(_) => dispatch(addOne())}
                >add one
                </button>
                <button className={styles.button}
                        onClick={(_) => dispatch(minusOne())}
                >minus one
                </button>
                <div>
                    <label>Βήμα<input className={styles.input} type={'number'}
                           step={1}
                           min={1}
                           value={step}
                           size={4}
                                  onChange={(e) => setStep(Number(e.target.value))}/></label>
                    <button
                        className={styles.button}
                        onClick={(_) => dispatch(add(step))}
                    >add {step}
                    </button>
                    <button
                        className={styles.button}
                        onClick={(_) => dispatch(minus(step))}
                    >minus {step}</button>

                </div>
            </div>

        </div>)
}

export default Counter