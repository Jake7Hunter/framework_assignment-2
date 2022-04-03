import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import {BrowserRouter} from "react-router-dom";
import App from './App'
import Header from './components/Header';
import Footer from './components/Footer';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
