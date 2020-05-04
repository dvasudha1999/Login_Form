import React from "react";

import { connect } from "react-redux";
import * as AuthAction from "../action/AuthAction";

import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.auth.authenciation) {
      setTimeout(() => {
        this.props.history.push("/login");
      }, 100);
    }
    return (
      <div className="col-md-6 col-md-offset-3">
        {this.props.auth.authenciation ? (
          <div className="card-panel white lighten-2">
            <h2>Welcome</h2>
            <h4>{this.props.auth.currentlogin}</h4>

            <Link className="" to="/login">
              Log out
            </Link>
          </div>
        ) : (
          <h2>Log in Failed</h2>
        )}
      </div>
    );
  }
}
function mapStatetoProps(state) {
  return {
    auth: state.auth,
  };
}
function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(AuthAction, dispatch),
  };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Register);
