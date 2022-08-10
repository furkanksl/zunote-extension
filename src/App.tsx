import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { HomePage } from "./pages/home/HomePage";
import { LoginPage } from "./pages/login/LoginPage";
// import { HomePage } from "./pages/home/HomePage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                {/* <Route path="*" element={<LoginPage />} /> //for 404 page */}
            </Routes>
        </div>
    );
}

export default App;
