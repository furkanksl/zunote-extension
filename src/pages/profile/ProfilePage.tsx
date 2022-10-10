import * as React from "react";
import { Link } from "react-router-dom";
import { BackButton } from "../../components/Header/BackButton";
import ProfileSvgComponent from "../../components/Svg/ProfileSvg";
import { auth } from "../../firebase";
import FirebaseService from "../../services/firebase/firebase.service";
import UtilityService from "../../services/utility.service";
import "./ProfilePage.scss";

export function ProfilePage() {
    const firebaseService = new FirebaseService();
    const utilityService = new UtilityService();

    function logout() {
        firebaseService.logout();
    }
    return (
        <div className="wrapper">
            <div className="profile-header">
                <BackButton />
                <div className="profile-details">
                    <ProfileSvgComponent function={() => {}} />
                    <p className="email">{utilityService.shortEmailAddress(auth?.currentUser?.email ?? "")}</p>
                </div>
                <div className="empty"></div>
            </div>

            <div className="other-pages-container">
                <Link to={"about"}>
                    <div className="about-page">About</div>
                </Link>
                <Link to={"feedback"}>
                    <div className="feedback-page">Feedback</div>
                </Link>
                <Link to={"donate"}>
                    <div className="donate-page">Donate</div>
                </Link>
            </div>

            <button className="logout" onClick={logout}>
                <p>LOGOUT</p>
            </button>

            <div className="version-text">Version 0.1.0</div>
        </div>
    );
}
