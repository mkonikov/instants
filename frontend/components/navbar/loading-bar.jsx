import React from 'react';
import { connect } from 'react-redux';

const LoadingBar = ({ loading }) => {

  console.log(`Loading status in props: ${loading}`);
  let loadingRender;

  if (loading) {
    loadingRender = (<div id="loading-bar"></div>);
  } else {
    loadingRender = ("");
  }

  return(
    <div>
      {loadingRender}
    </div>
  );
};

const mapStateToProps = ({ui}) => {
  return ({
  loading: ui.loading,
})};

export default connect(mapStateToProps)(LoadingBar);
