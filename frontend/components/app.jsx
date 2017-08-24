import React from 'react';
import AuthInterstitial from './session/auth_interstitial';
import Navbar from './navbar/navbar';
import ProfileContainer from './profile/profile_container';
import { Route } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <ProtectedRoute path="/" component={Navbar} />
    <ProtectedRoute path="/:username" component={ProfileContainer} />
    <AuthRoute path="/login" component={AuthInterstitial} />
    <AuthRoute path="/signup" component={AuthInterstitial} />
  </div>


);

export default App;
