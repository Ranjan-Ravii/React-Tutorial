import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { Chai, Note } from './Chai.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Chai />
    <Note/>
  </>
);



reportWebVitals();
