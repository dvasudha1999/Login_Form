import * as actions from "../action/ActionTypes";

function loginreducer(state = [], action) {
  switch (action.type) {
    case actions.loginuser:
      return { currentlogin: action.auth.username, authenciation: true };

    default:
      return state;
  }
}
export default loginreducer;
