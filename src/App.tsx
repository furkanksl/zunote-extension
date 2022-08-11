import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { AboutPage } from "./pages/about/AboutPage";
import { FeedbackPage } from "./pages/feedback/FeedbackPage";
import { HomePage } from "./pages/home/HomePage";
import { LoginPage } from "./pages/login/LoginPage";
import { ProfilePage } from "./pages/profile/ProfilePage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route caseSensitive={true} path="login" element={<LoginPage />} />
                <Route caseSensitive={true} path="home" element={<HomePage />} />
                <Route path="profile/*">
                    <Route path="" element={<ProfilePage />} />
                    <Route caseSensitive={true} path="about" element={<AboutPage />} />
                    <Route caseSensitive={true} path="feedback" element={<FeedbackPage />} />
                </Route>
                <Route path="/*" element={<Navigate to="login" replace />} />
            </Routes>
        </div>
    );
}

export default App;
