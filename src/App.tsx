import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { HomePage } from "./pages/home/HomePage";
import { LoginPage } from "./pages/login/LoginPage";
import { ProfilePage } from "./pages/profile/ProfilePage";
// import { HomePage } from "./pages/home/HomePage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="" element={<LoginPage />} />
                <Route caseSensitive={true} path="/login" element={<LoginPage />} />
                <Route caseSensitive={true} path="/home" element={<HomePage />} />
                <Route caseSensitive={true} path="/profile" element={<ProfilePage />} />
                {/* <Route path="*" element={<LoginPage />} /> //for 404 page */}
            </Routes>
        </div>
    );
}

export default App;
