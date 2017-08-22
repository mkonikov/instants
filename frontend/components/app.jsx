import React from 'react';
import AuthInterstitial from './session/auth_interstitial';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <h1>Hi</h1>

    <AuthRoute path="/login" component={AuthInterstitial} />
    <AuthRoute path="/signup" component={AuthInterstitial} />

  </div>


);

export default App;
