import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import {ToastContext} from "../ToastProvider";

function ToastShelf(/*{toasts, setToasts}*/) {
    const {toasts} = React.useContext(ToastContext)
    return (
        toasts.length > 0 &&
        <ol className={styles.wrapper}
            role="region"
            aria-live="polite"
            aria-label="Notification"
        >
            {toasts.map(({variant, message, id}) => (
                <li className={styles.toastWrapper} key={id}>
                    <Toast variant={variant} id={id}>
                        {message}
                    </Toast>
                </li>
            ))}
        </ol>
    );
}

export default ToastShelf;
