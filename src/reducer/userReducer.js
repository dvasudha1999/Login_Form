import * as actions from "../action/ActionTypes";

function userReducer(state = [], action) {
  switch (action.type) {
    case actions.createuser:
      return [...state, { ...action.user }];
    default:
      return state;
  }
}
export default userReducer;
