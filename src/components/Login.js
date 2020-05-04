import React from "react";
import * as AuthAction from "../action/AuthAction";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let users = this.props.users.filter(
      (user) => user.username === this.state.username
    );
    if (users.length === 0) {
      alert("username not found");
    } else {
      if (users[0].password !== this.state.password) {
        alert("password incorrect");
      } else {
        this.props.actions.loginuser(users[0]);
        this.props.history.push("/");
      }
    }
  };

  render() {
    return (
      <div className="container">
        <h2>Login</h2>
        <form name="form2" onSubmit={this.handleSubmit}>
          <div className="container">
            <label>UserName</label>
            <input
              type="text"
              name="username"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="container">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="container">
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(AuthAction, dispatch),
  };
}
function mapStatetoProps(state) {
  return {
    users: state.users,
    auth: state.auth,
  };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Login);
