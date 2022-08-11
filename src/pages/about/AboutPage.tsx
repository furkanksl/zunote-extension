import * as React from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../../components/PageHeader";
import styles from "./AboutPage.module.scss";

type Props = {};
export function AboutPage(props: Props) {
    return (
        <div className="wrapper">
            <PageHeader title="ABOUT" />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eos ea necessitatibus esse
                accusantium architecto aliquam sapiente ullam enim dolor, officia quae nobis doloribus distinctio
                debitis aliquid. Ipsa, temporibus cumque.
            </p>

            <a className={styles.source} href="https://github.com/furkanksl" target={"_blank"} rel="noreferrer">
                source code
            </a>

            <Link to={"../donate"} className={styles.donateContainer}>
                <div className={styles.donate}>Support me</div>
            </Link>
        </div>
    );
}
