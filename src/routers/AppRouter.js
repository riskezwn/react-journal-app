import React from "react";
import {
    Route,
    BrowserRouter as Router,
    Routes,
    Navigate,
} from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
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
