import "./App.scss";

import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/about/AboutPage";
import { DonatePage } from "./pages/donate/DonatePage";
import { FeedbackPage } from "./pages/feedback/FeedbackPage";
import { HomePage } from "./pages/home/HomePage";
import { AuthPage } from "./pages/auth/AuthPage";
import { ProfilePage } from "./pages/profile/ProfilePage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    function protectRoute(child: any) {
        return <ProtectedRoute>{child}</ProtectedRoute>;
    }

    return (
        <div className="App">
            <Routes>
                <Route caseSensitive={true} path="auth" element={<AuthPage />} />
                <Route caseSensitive={true} path="home" element={protectRoute(<HomePage />)} />

                <Route path="profile/*">
                    <Route path="" element={protectRoute(<ProfilePage />)} />
                    <Route caseSensitive={true} path="about" element={protectRoute(<AboutPage />)} />
                    <Route caseSensitive={true} path="feedback" element={protectRoute(<FeedbackPage />)} />
                    <Route caseSensitive={true} path="donate" element={protectRoute(<DonatePage />)} />{" "}
                </Route>

                <Route path="/*" element={<Navigate to="/home" replace />} />
            </Routes>
        </div>
    );
}

export default App;
