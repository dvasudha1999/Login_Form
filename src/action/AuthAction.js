import * as actions from "./ActionTypes";
export function createuser(user) {
  return {
    type: actions.createuser,
    user,
  };
}
export function loginuser(auth) {
  return {
    type: actions.loginuser,
    auth,
  };
}
