import React from 'react';
import ProfilePostItem from './profile_post_item';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class ProfilePosts extends React.Component {

  renderNoPosts() {

    if (this.props.self && !this.props.hasPosts) {
      return (
        <div id="self-no-posts" className="instants-container">
          <div>
            <img src="https://www.instagram.com/static/images/mediaUpsell.jpg/7e0cb2166ce8.jpg" />
          </div>
          <div className="message">
            <h4>
              Start capturing and sharing your Instants.
            </h4>
          </div>
        </div>
      );
    }  else if (!this.props.hasPosts) {
      return(
        <div id="friend-no-posts" className="instants-container">
          No posts yet.
        </div>
      );
    }
  }

  render() {

    let posts;

    if (!this.props.posts) return null;

    posts = this.props.posts.map((post) => {
      return (
        <li key={post.id}>
          <ProfilePostItem post={post} />
        </li>
      );
    });

    return (
      <div>
        {this.renderNoPosts()}
        <ul className="posts">
          {posts}
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const username = ownProps.match.params.username;
  const profileVisiting = state.entities.users[username];
  const currentUser = state.session.currentUser;
  const hasPosts = (profileVisiting && profileVisiting.profileFeed && profileVisiting.profileFeed.length > 0) ? true : false;

  return {
    user: profileVisiting,
    self: Boolean(username === currentUser),
    hasPosts,
  };

};

export default withRouter(connect(mapStateToProps)(ProfilePosts));
