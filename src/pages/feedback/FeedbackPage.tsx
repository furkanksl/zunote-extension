import * as React from "react";
import styles from "./FeedbackPage.module.scss";

import { PageHeader } from "../../components/Header/PageHeader";
import { TextFieldWithButton } from "../../components/Form/TextFieldWithButton";

import feedbackIcon from "../../assets/icons/feedback.png";

export function FeedbackPage() {
    return (
        <div className="wrapper">
            <PageHeader title="FEEDBACK" />
            <img className={styles.feedbackIcon} src={feedbackIcon} alt="feedback-icon" />
            <TextFieldWithButton placeholder="Let us know the ..." buttonText="SEND" />
        </div>
    );
}
