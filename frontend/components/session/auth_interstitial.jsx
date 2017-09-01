import React from 'react';
import SignupContainer from './signup_container';
import LoginContainer from './login_container';
import { Route } from 'react-router-dom';


const AuthInterstitial = () => (
<div>
  <div id="auth-interstitial">
    <div className="row">
      <aside>
          <div id="screenshots">
            <img src={window.images.app_screenshot_1} />
            <img src={window.images.app_screenshot_2} />
          </div>
        <img src={window.images.app_phone_outline} />
      </aside>
      <Route path="/login" component={LoginContainer} />
      <Route path="/signup" component={SignupContainer} />
    </div>
  </div>
</div>


);

export default AuthInterstitial;
