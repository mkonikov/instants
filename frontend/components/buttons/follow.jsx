import React from 'react';
import { connect } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/follow_actions';

class FollowButton extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.props.followStatus) {
      this.props.unfollowUser();
    } else {
      this.props.followUser();
    }
  }

  render() {
    const buttonClassName = (this.props.followStatus) ? "unfollow" : "follow";
    const buttonText = (this.props.followStatus) ? "Following" : "Follow";

    return(
      <div>
        <button className={buttonClassName} onClick={this.handleClick}
          type="button">{buttonText}</button>
      </div>
    )

  }
}

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const followStatus = ownProps.user.followerUsernames.includes(currentUser);

  return {
    followStatus,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    followUser: () => dispatch(followUser(ownProps.user.id)),
    unfollowUser: () => dispatch(unfollowUser(ownProps.user.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);
