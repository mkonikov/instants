import React from 'react';
import AuthInterstitial from './session/auth_interstitial';
import LoadingBar from './navbar/loading-bar';
import Navbar from './navbar/navbar';
import ProfileContainer from './profile/profile_container';
import PostsIndexContainer from './feed/posts_index_container';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';




const App = (props) => (
    <div>
      <AuthRoute path="/login" component={AuthInterstitial} />
      <AuthRoute path="/signup" component={AuthInterstitial} />
      <ProtectedRoute path="/" component={LoadingBar} />
      <ProtectedRoute path="/" component={Navbar} />

      <div id="main-contain">
        <Switch>
          <ProtectedRoute path="/:username" component={ProfileContainer} />
          <ProtectedRoute path="/" component={PostsIndexContainer} />
        </Switch>
      </div>
    </div>
  )


export default App;
