import { combineReducers } from "redux";
import users from "./userReducer";
import auth from "./loginreducer";

const rootreducer = combineReducers({
  users,
  auth,
});
export default rootreducer;
