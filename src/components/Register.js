import React from "react";
import { connect } from "react-redux";
import * as AuthAction from "../action/AuthAction";

import { bindActionCreators } from "redux";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
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
    let user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      password: this.state.password,
    };

    this.props.actions.createuser(user);
    this.props.actions.loginuser(user);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Sign Up</h2>
        <form name="form1" onSubmit={this.handleSubmit}>
          <div className="container">
            <label>FirstName</label>
            <input
              type="text"
              name="firstname"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="container">
            <label>Last name</label>
            <input
              type="text"
              name="lastname"
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="container">
            <label>UserName</label>
            <input
              type="text"
              name="username"
              onChange={this.handleChange}
              required
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
function mapStatetoProps(state) {
  return {
    users: state.users,
    auth: state.auth,
  };
}
function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(AuthAction, dispatch),
  };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Register);
