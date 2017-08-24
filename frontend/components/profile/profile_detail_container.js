import { connect } from 'react-redux';
import ProfileDetail from './profile_detail';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  const username = ownProps.match.params.username;
  return {
    user: state.entities.users[username],
  };

};


export default withRouter(connect(mapStateToProps, null)(ProfileDetail));
