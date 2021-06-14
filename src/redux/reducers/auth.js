import {
  AUTH_ERROR,
  CREATE_USER,
  LOGIN,
  LOGOUT,
} from "../actions/constants/actionTypes";

const initialState = {
  user: {},
  errorMessage: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
    case LOGIN:
      return { ...state, user: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default authReducer;
