import React from 'react';
import NavbarToolsContainer from './navbar_tools_container';
import UploadModalContainer from './upload_modal_container';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <nav>
    <div id="nav-container">
      <Link to="/"><img src={window.images.logo} /></Link>
      <NavbarToolsContainer />
      <UploadModalContainer />
    </div>
  </nav>
);

export default Navbar;
