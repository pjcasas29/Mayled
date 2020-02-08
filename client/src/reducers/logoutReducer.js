import { LOGOUT } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case LOGOUT:
      return action.payload;
    default:
      return state;
  }
};
