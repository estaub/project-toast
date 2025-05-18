import React, {useContext} from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from "../ToastShelf";
import { ToastContext} from "../ToastProvider";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

let nextKey = 0

function ToastPlayground() {
    const [message, setMessage] = React.useState('')
    const [variant, setVariant] = React.useState('notice')
    const {toasts,setToasts} = useContext(ToastContext)

    console.log('rendering')
    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png"/>
                <h1>Toast Playground</h1>
            </header>

            <div className={styles.controlsWrapper}>
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{alignSelf: 'baseline'}}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
            />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        {VARIANT_OPTIONS.map(option => (
                            <label htmlFor={`variant-${option}`} key={option}>
                                <input
                                    id={`variant-${option}`}
                                    type="radio"
                                    name="variant"
                                    value={option}
                                    checked={variant === option}
                                    onChange={({target: checked}) => {
                                        if (checked) setVariant(option);
                                    }}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}/>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button onClick={
                            ()=>setToasts([...toasts,{variant, message, id: nextKey++}])
                        }>
                            Pop Toast!
                        </Button>
                    </div>
                </div>
            </div>
            <ToastShelf toasts={toasts} setToasts={setToasts}/>
        </div>
    );
}

export default ToastPlayground;
