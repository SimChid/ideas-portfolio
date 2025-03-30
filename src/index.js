import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Bio from './views/bio.js'
import Menu from './views/modalmenu.js'
import reportWebVitals from './reportWebVitals';
import Popup from 'reactjs-popup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='name'>
      <h1>Simon Chidley</h1>
    </div>
    <Bio />
    <Menu />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
