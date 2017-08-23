import React from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
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
      <div className="auth-container">
        <img src={window.images.logo} />
        <form onSubmit={this.handleSubmit}>

          <input onChange={this.handleInput("username")}
            value={this.state.username}
            placeholder="Username" required />

          <input onChange={this.handleInput("password")}
            value={this.state.password}
            placeholder="Password" type="password" required />

          <input type="submit" value="Log in" />
          <div id="auth-errors">{errors}</div>
        </form>
</div>

      <div className="auth-container">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      </div>
    );
  }
}

export default Login;
