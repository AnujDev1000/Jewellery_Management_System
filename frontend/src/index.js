import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ContextProvider } from './context/Context';

ReactDOM.render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
,document.getElementById('root'));

// git add . && git commit -m "COMMIT" && git push origin main
