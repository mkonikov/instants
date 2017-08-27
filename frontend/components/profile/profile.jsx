import React from 'react';
import ProfileDetailContainer from './profile_detail_container';
import ProfilePosts from './profile_posts';
import ProfilePostItemDetailContainer from './profile_post_item_detail_container';
import { Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

class Profile extends React.Component {

  componentDidMount() {
    this.props.fetchCompleteProfile(this.props.user);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      this.props.fetchCompleteProfile(nextProps.user);
    }

  }

  render() {
    return (
      <div id="profile">
        <Route path="/:username/posts/:postId"
          component={ProfilePostItemDetailContainer} />

        <ProfileDetailContainer />
        <ProfilePosts posts={this.props.feed} />
      </div>
    );

  }
}



export default Profile;
