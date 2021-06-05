import { CREATE_USER, LOGIN, LOGOUT } from "../actions/constants/actionTypes";

const authReducer = (user = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return null;
    default:
      return user;
  }
};

export default authReducer;
