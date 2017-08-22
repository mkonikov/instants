import React from 'react';
import { Link } from 'react-router-dom';


class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  render() {

    let errors;

    if (this.props.errors) {
      errors = this.props.errors.map((error, idx) => {
        return (<div key={idx}>{error}</div>);
      });
    }

    return(
      <div>
        Signup form
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput("email")}
            value={this.state.email}
            placeholder="Email Address" />

          <input onChange={this.handleInput("name")}
            value={this.state.fullname}
            placeholder="Full Name" />

          <input onChange={this.handleInput("username")}
            value={this.state.username}
            placeholder="Username" />

          <input onChange={this.handleInput("password")}
            value={this.state.password}
            placeholder="Password" type="password" />

          <input type="submit" value="Sign up" />
          <div id="auth-errors">{errors}</div>
        </form>


      <div>
        Have an account? <Link to="/login">Log in</Link>
      </div>
      </div>
    );
  }
}

export default Signup;


// why is existing username not returning json error?
