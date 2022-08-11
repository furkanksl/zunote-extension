import * as React from "react";
import { Link } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import "./ProfilePage.scss";

type Props = {};
export function ProfilePage(props: Props) {
    return (
        <div className="wrapper">
            <div className="profile-header">
                <BackButton />
                <div className="profile-details">
                    <div className="profile-image"></div>
                    <p className="email">abc....@gmail.com</p>
                    <p className="joined-date">Joined 2022</p>
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
                <div className="version-text">Version 0.1.0</div>
            </div>

            <Link to={"/login"} className="logout-link">
                <button className="logout">
                    <p>LOGOUT</p>
                </button>
            </Link>
        </div>
    );
}
