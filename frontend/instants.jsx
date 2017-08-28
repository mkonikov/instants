import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';

import { followUser } from './actions/follow_actions';


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
  window.followUser = followUser;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
