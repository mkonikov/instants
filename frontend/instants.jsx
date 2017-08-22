import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import configureStore from './store/store.js';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<App store={store} />, root);
});
