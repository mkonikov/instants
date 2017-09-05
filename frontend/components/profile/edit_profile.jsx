import React from 'react';
import { connect } from 'react-redux';
import { fetchCompleteProfile } from '../../actions/profile_actions';
import { updateProfileDetails } from '../../actions/profile_actions';
import { withRouter } from 'react-router-dom';
import { clearErrors } from '../../actions/error_actions';

class EditProfile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      bio: "",
      email: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchCompleteProfile(this.props.user.username)
      .then(
          this.setState({
            name: this.props.user.name,
            username: this.props.user.username,
            bio: this.props.user.bio,
            email: this.props.user.email,
            userId: this.props.user.id,
          }));
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateProfileDetails(this.state)
      .then(() => {
        this.props.history.push(`/${this.state.username}`);
      }
      );
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  renderError() {
    if (this.props.error) {
      return(
        <div className="form-element">
          <label></label><div className="errors">{this.props.error}</div>
        </div>
      );
    }
  }

  render() {

    const disableGuestEdit = (this.props.user.username === 'guest') ? true : false;
    return (
      <div id="main-contain">
      <div id="edit-profile" className="insta-container">
        <div id="edit-options">
          <h4>Edit Profile</h4>
        </div>
        <div id="edit-form-section">
          <div className="form-element">
            <figure>
              <img src={this.props.user.avatarUrl} />
            </figure>
            <h3>{this.state.username}</h3>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-element">
              <label htmlFor="name">Name</label>
                <div className="input-container">

              <input id="name" onChange={this.handleInput("name")}
                value={this.state.name} />
            </div>
            </div>
            <div className="form-element">
              <label htmlFor="username">Username</label>
                <div className="input-container">

              <input id="username" disabled={disableGuestEdit}
                onChange={this.handleInput("username")}
                value={this.state.username} />
            </div>
            </div>
            <div className="form-element">
              <label htmlFor="Bio">Bio</label>
                <div className="input-container">

              <textarea id="Bio"
                value={this.state.bio}
                onChange={this.handleInput("bio")} />
            </div>
            </div>
            <div className="form-element">
              <label></label><div className="instructions">Private Information</div>
            </div>

            <div className="form-element">
              <label htmlFor="email">Email</label>
              <div className="input-container">
                <input id="email" type="email"
                  onChange={this.handleInput("email")}
                  value={this.state.email} />

              </div>

            </div>
            {this.renderError()}

              <div className="form-element submit">
                <input type="submit" value="Submit" />
              </div>
                  </form>
        </div>
      </div>
</div>
    )
  }

}

const mapStateToProps = ({ errors, entities, session }) => {
  let error;
  if (errors.generalErrors) {
    error = errors.generalErrors[0];
  }
  return {
    user: entities.users[session.currentUser],
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCompleteProfile: (username) => dispatch(fetchCompleteProfile(username)),
    updateProfileDetails: (data) => dispatch(updateProfileDetails(data)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfile));
