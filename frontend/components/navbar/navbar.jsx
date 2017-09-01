import React from 'react';
import NavbarToolsContainer from './navbar_tools_container';
import UploadModalContainer from './upload_modal_container';
import { Link } from 'react-router-dom';
import LoadingBar from './loading-bar';
import { connect } from 'react-redux';
import SearchForm from './search/search_form';
import SearchResultsIndexContainer from './search/search_results_index_container';


const Navbar = ({ uploadModal, loading }) => {
  const renderUploadModal = (uploadModal) ? (<UploadModalContainer />) : null;
  const renderLoading = (loading) ? (<LoadingBar />) : null;
  return (
    <nav>
      {renderLoading}
      <div id="nav-container">
        <Link to="/"><img src={window.images.logo} /></Link>
        <div id="search">
          <SearchForm />
          <SearchResultsIndexContainer />
        </div>
        <NavbarToolsContainer />
        {renderUploadModal}
      </div>
    </nav>
  )
};

const mapStateToProps = ({ ui }) => ({
  uploadModal: ui.uploadModal,
  loading: ui.loading,
});

export default connect(mapStateToProps)(Navbar);
