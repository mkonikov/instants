import React from 'react';
import AuthInterstitial from './session/auth_interstitial';
import Navbar from './navbar/navbar';
import ProfileContainer from './profile/profile_container';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import DocumentTitle from 'react-document-title';




const App = (props) => (
    <DocumentTitle title={`Instants`}>
    <div>
      <AuthRoute path="/login" component={AuthInterstitial} />
      <AuthRoute path="/signup" component={AuthInterstitial} />
      <ProtectedRoute path="/" component={Navbar} />

      <div id="main-contain">
        <Switch>
          <ProtectedRoute path="/:username" component={ProfileContainer} />
        </Switch>
      </div>
    </div>
  </DocumentTitle>
  )


export default App;
