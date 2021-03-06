import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import surveysReucer from "./surveysReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReucer
});
