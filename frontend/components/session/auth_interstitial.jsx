import React from 'react';
import SignupContainer from './signup_container';
import LoginContainer from './login_container';
import { Route } from 'react-router-dom';


const AuthInterstitial = () => (
<div>
  <div id="auth-interstitial">
    <div className="row">
      <aside>
        <img src="https://www.instagram.com/static/images/homepage/home-phones@2x.png/f82c2ede4ccb.png" />
      </aside>
      <Route path="/login" component={LoginContainer} />
      <Route path="/signup" component={SignupContainer} />
    </div>
    <footer>
      <div id="links">
        <a href="http://github.com/mkonikov">GitHub</a>
        <a href="#">Portfolio</a>
        <a href="#">LinkedIn</a>
      </div>
      <small>
        &copy; Mendel Konikov
      </small>
    </footer>
  </div>
</div>


);

export default AuthInterstitial;
