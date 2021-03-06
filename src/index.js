import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Routers } from "react-router-dom"
import { Provider } from 'react-redux';
import store from "./redux/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><Routers><App /></Routers></Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);
