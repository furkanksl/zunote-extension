import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { HomePage } from "./pages/home/HomePage";
import { LoginPage } from "./pages/login/LoginPage";
// import { HomePage } from "./pages/home/HomePage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="*" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </div>
    );
}

export default App;
