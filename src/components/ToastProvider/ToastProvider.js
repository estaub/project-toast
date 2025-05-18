import React from 'react';

export const ToastContext = new React.createContext()

function ToastProvider({toasts, setToasts, children}) {
  const value =
      React.useMemo(()=>({toasts, setToasts}),[toasts, setToasts])
  return (
      <ToastContext value={value}>{children}</ToastContext>
  );
}

export default ToastProvider;
