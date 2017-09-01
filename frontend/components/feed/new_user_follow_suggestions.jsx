import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectUsers } from '../../reducers/selectors';
import FollowButton from '../buttons/follow';
import { fetchFeed } from '../../actions/post_actions';
import { fetchNewUserSuggestions,
  clearUserSuggestions } from '../../actions/search_actions';


class NewUserFollowSuggestions extends React.Component {

  constructor(props) {
    super(props);

    this.getStarted = this.getStarted.bind(this);
  }

  componentDidMount() {
    this.props.fetchNewUserSuggestions();
  }

  componentWillUnmount() {
    this.props.clearUserSuggestions();
  }

  renderSuggestions() {
    const suggestions = this.props.userResults.map((user) => {
      return (
        <li key={user.id}>
          <div className="user-details">
          <div className="avatar">
            <Link to={`/${user.username}`}>
              <img src={user.avatarUrl} />
            </Link>
          </div>
          <div className="username">
            <p>
              <Link to={`/${user.username}`}>
                {user.username}
              </Link>
            </p>
            <p>
              {user.name}
            </p>
          </div>
          </div>
          <FollowButton user={user} />
        </li>
      );
    });
    return(
      <div>{suggestions}</div>
    );
  }

  getStarted() {
    this.props.fetchFeed();
    window.scrollTo(0,0);
  }

  render() {

    if (!this.props.userResults) return null;

    return(
      <div id="suggestions" className="instants-container">
        <h3>Suggestions For You</h3>
        <ul id="new-user-suggestions">
          {this.renderSuggestions()}
        </ul>
        <button type="button" className="get-started"
          onClick={this.getStarted}>Get Started</button>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  let userResults;
  if (state.ui.userSuggestions) {
    userResults = selectUsers(state.ui.userSuggestions, state);
  }
  return ({
    userResults,
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchNewUserSuggestions: () => dispatch(fetchNewUserSuggestions()),
    clearUserSuggestions: () => dispatch(clearUserSuggestions()),
    fetchFeed: () => dispatch(fetchFeed()),
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewUserFollowSuggestions);
