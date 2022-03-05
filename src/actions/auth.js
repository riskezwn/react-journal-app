import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import Swal from "sweetalert2";
import { auth, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { notesLogout } from "./notes";
import { finishLoading, startLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch((e) => {
                Swal.fire("Something go wrong :(", "User not found", "error");
                dispatch(finishLoading());
            });
    };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        dispatch(startLoading());
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(user, { displayName: name });
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch((e) => {
                Swal.fire(
                    "Something go wrong :(",
                    "Registration could not be completed",
                    "error"
                );
                dispatch(finishLoading());
            });
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
            dispatch(login(user.uid, user.displayName));
        });
    };
};

export const startLogout = () => {
    return async (dispatch) => {
        await signOut(auth);
        dispatch(logout());
        dispatch(notesLogout());
    };
};

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
    },
});

export const logout = () => ({
    type: types.logout,
});
