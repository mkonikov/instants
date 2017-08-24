import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';

import { login, logout } from './actions/session_actions';
import * as APIUtil from './util/profile_api_util';
import { fetchCompleteProfile } from './actions/profile_actions';


document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser.username },
      entities: { users: { [window.currentUser.username]: window.currentUser } },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  window.store = store;
  window.fetchCompleteProfile = fetchCompleteProfile;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
