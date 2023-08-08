import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

import firebase from "../../firebase/config";
import { authSlice } from "./authReducer";

const { auth } = firebase;

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const { uid, displayName, photoUrl } = auth.currentUser;
      console.log(email, "displayName->", displayName);

      dispatch(
        authSlice.actions.updateUserProfile({
          userId: uid,
          displayName,
          email,
          photoUrl,
        })
      );
    } catch (error) {
      const errorMessage = error.message;
      console.log("error", errorMessage);
    }
  };

export const authSignUpUser =
  ({ email, password, displayName }) =>
  async (dispatch) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName });
      const { uid } = auth.currentUser;
      console.log("uid->", uid, "email->", email, "displayName", displayName);

      dispatch(
        authSlice.actions.updateUserProfile({
          userId: uid,
          displayName,
          email,
        })
      );
    } catch (error) {
      const errorMessage = error.message;
      console.log("error", errorMessage);
    }
  };

export const authSignOutUser = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(authSlice.actions.authLogOut());
  } catch (error) {
    console.log("error", error.message);
  }
};

export const authStateChangeUser = () => async (dispatch) => {
  await onAuthStateChanged(auth, (user) => {
    try {
      if (user) {
        const { uid, displayName, email } = user;
        console.log("user->", user);

        dispatch(authSlice.actions.authStateChange({ stateChange: true }));
        dispatch(
          authSlice.actions.updateUserProfile({
            userId: uid,
            displayName,
            email,
          })
        );
      }
    } catch (error) {
      console.log("error", error.message);
      // signOut(auth);
      // dispatch(authLogOut());
    }
  });
};
