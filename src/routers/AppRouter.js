import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
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

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
            }
        });
    }, [dispatch]);

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
