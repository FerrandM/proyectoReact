import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseConfig = {

  apiKey: "AIzaSyDY0zhLvuFKVKosXCRLjKMAhpo6WmLeyDs",

  authDomain: "coderhauss-react.firebaseapp.com",

  projectId: "coderhauss-react",

  storageBucket: "coderhauss-react.appspot.com",

  messagingSenderId: "358426530443",

  appId: "1:358426530443:web:0258a1f9288b3c885c3a8e"

};


const app = initializeApp(firebaseConfig);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
