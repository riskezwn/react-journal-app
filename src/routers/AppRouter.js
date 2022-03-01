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
import { JournalScreen } from "../components/journal/JournalScreen";
import { auth } from "../firebase/firebase-config";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
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
                    <Route path="/auth/*" element={<AuthRouter />} />
                    <Route path="/" element={<JournalScreen />} />
                    <Route path="*" element={<Navigate to="/auth/login" />} />
                </Routes>
            </div>
        </Router>
    );
};
