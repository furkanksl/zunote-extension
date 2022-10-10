import * as React from "react";
import styles from "./FeedbackPage.module.scss";

import { PageHeader } from "../../components/Header/PageHeader";
import { TextFieldWithButton } from "../../components/Form/TextFieldWithButton";

import feedbackIcon from "../../assets/icons/feedback.png";
import FirebaseService from "../../services/firebase/firebase.service";

export function FeedbackPage() {
    const firebaseService = new FirebaseService();

    const sendFeedback = async (e: any, feedback: string) => await firebaseService.sendFeedback(feedback);

    return (
        <div className="wrapper">
            <PageHeader title="FEEDBACK" />
            <img className={styles.feedbackIcon} src={feedbackIcon} alt="feedback-icon" />
            <TextFieldWithButton onClick={sendFeedback} placeholder="Let us know the ..." buttonText="SEND" />
        </div>
    );
}
