import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Global } from 'components/styles/Dlobal';
import 'modern-normalize/modern-normalize.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Global />
    <ToastContainer autoClose={1500} />
  </React.StrictMode>
);
