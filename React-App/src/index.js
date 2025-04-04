import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Intro from './Intro';
import Projects from './Projects';
import reportWebVitals from './reportWebVitals';
import Navbar from './nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Intro />
    <Projects />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
