import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Rolling } from "react-loading-io/dist/Rolling";
import { useDispatch } from "react-redux";
import {
    Route,
    BrowserRouter as Router,
    Routes,
    Navigate,
} from "react-router-dom";
import { login } from "../actions/auth";
import { startLoadingNotes } from "../actions/notes";
import { JournalScreen } from "../components/journal/JournalScreen";
import { auth } from "../firebase/firebase-config";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                dispatch(startLoadingNotes(user.uid));
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) {
        return (
            <div className="loading__screen">
                <Rolling size={64} color="#ffffff" />
            </div>
        );
    }

    return (
        <Router>
            <div>
                <Routes>
                    <Route
                        path="/auth/*"
                        element={
                            <PublicRoute isLoggedIn={isLoggedIn}>
                                <AuthRouter />
                            </PublicRoute>
                        }
                    ></Route>
                    <Route
                        path="/"
                        element={
                            <PrivateRoute isLoggedIn={isLoggedIn}>
                                <JournalScreen />
                            </PrivateRoute>
                        }
                    ></Route>
                    <Route path="*" element={<Navigate to="/auth/login" />} />
                </Routes>
            </div>
        </Router>
    );
};
