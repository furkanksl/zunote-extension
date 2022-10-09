import * as React from "react";
import { BackButton } from "./BackButton";
import styles from "./PageHeader.module.scss";

type Props = {
    title: string;
};
export function PageHeader(props: Props) {
    return (
        <div className={styles.header}>
            <BackButton />
            <p className={styles.title}>{props.title}</p>
            <div className={styles.empty}></div>
        </div>
    );
}
