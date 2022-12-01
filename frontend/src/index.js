import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ContextProvider } from './context/Context';

ReactDOM.render(
    <AuthContextProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </AuthContextProvider>
,document.getElementById('root'));
