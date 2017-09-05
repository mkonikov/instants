import React from 'react';
import AuthInterstitial from './session/auth_interstitial';
import Navbar from './navbar/navbar';
import Footer from './footer';
import ProfileContainer from './profile/profile_container';
import EditProfile from './profile/edit_profile';
import PostsIndexContainer from './feed/posts_index_container';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';




const App = (props) => (
    <div>
      <ProtectedRoute path="/" component={Navbar} />
      <AuthRoute path="/signup" component={AuthInterstitial} />
      <AuthRoute path="/login" component={AuthInterstitial} />

      <Switch>
          <ProtectedRoute path="/accounts/edit" component={EditProfile} />
          <ProtectedRoute path="/:username" component={ProfileContainer} />
          <ProtectedRoute path="/" component={PostsIndexContainer} />
      </Switch>
      <Footer />
    </div>
  )


export default App;
