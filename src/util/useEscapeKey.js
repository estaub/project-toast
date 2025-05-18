import React from 'react';

export default function useEscapeKey(f) {
    function onKey(e) {
        if (e.key === 'Escape')
            f()
    }

    React.useEffect(() => {
        document.addEventListener('keydown', onKey)
        return (() => document.removeEventListener('keydown', onKey))
    })
}