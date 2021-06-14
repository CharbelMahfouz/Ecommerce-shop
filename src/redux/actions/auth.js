import { auth } from "../../firebase/firebase";
import {
  CREATE_USER,
  LOGOUT,
  LOGIN,
  AUTH_ERROR,
} from "./constants/actionTypes";

export const signUp = (data, history) => async (dispatch) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(
      data.email,
      data.password
    );
    await user.updateProfile({
      displayName: data.firstName + " " + data.lastName,
    });
    const newUser = {
      email: user.email,
      uid: user.uid,
      displayName: user.displayName,
    };
    dispatch({
      type: CREATE_USER,
      payload: newUser,
    });
    history.push("/");
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error.message });
  }
};

export const signIn = (data, history) => async (dispatch) => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(
      data.email,
      data.password
    );
    const currUser = {
      email: user.email,
      uid: user.uid,
      displayName: user.displayName,
    };
    dispatch({ type: LOGIN, payload: currUser });
    history.push("/");
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch({ type: LOGOUT });
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error.message });
  }
};
