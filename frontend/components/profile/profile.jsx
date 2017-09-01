import React from 'react';
import ProfileDetailContainer from './profile_detail_container';
import ProfilePosts from './profile_posts';
import ProfilePostItemDetailContainer from './profile_post_item_detail_container';
import { Route } from 'react-router-dom';

class Profile extends React.Component {

  componentDidMount() {
    this.props.toggleLoading();
    this.props.fetchCompleteProfile(this.props.user)
      .then(this.props.toggleLoading);

  }
  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      this.props.toggleLoading();
      this.props.fetchCompleteProfile(nextProps.user)
        .then(this.props.toggleLoading);
    }

  }

  render() {
    return (
      <div id="main-contain">
        <div id="profile">
          <Route path="/:username/posts/:postId"
            component={ProfilePostItemDetailContainer} />

          <ProfileDetailContainer />
          <ProfilePosts posts={this.props.feed} />
        </div>
      </div>
    );

  }
}



export default Profile;
