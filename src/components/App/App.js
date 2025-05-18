import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import ToastProvider from "../ToastProvider";
import useEscapeKey from "../../util/useEscapeKey";

function App() {
    const [toasts, setToasts] = React.useState([])
    useEscapeKey(()=>setToasts([]))
  return (
      <ToastProvider toasts={toasts} setToasts={setToasts}>
          <ToastPlayground />
          <Footer />
      </ToastProvider>
  );
}

export default App;
