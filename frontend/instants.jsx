import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import configureStore from './store/store.js';

import { login, logout } from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  window.store = store;
  window.login = login;
  window.logout = logout;

  const root = document.getElementById("root");
  ReactDOM.render(<App store={store} />, root);
});
