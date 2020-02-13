import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import logoutReducer from "./logoutReducer";

export default combineReducers({
  auth: authReducer,
  logout: logoutReducer,
  form: reduxForm
});
