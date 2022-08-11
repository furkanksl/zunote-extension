import * as React from "react";
import { Link } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import styles from "./AboutPage.module.scss";

type Props = {};
export function AboutPage(props: Props) {
    return (
        <div className="wrapper">
            <div className={styles.header}>
                <BackButton />
                <p className={styles.title}>ABOUT</p>
                <div className={styles.empty}></div>
            </div>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eos ea necessitatibus esse
                accusantium architecto aliquam sapiente ullam enim dolor, officia quae nobis doloribus distinctio
                debitis aliquid. Ipsa, temporibus cumque.
            </p>

            <a className={styles.source} href="https://github.com/furkanksl" target={"_blank"}>
                source code
            </a>

            <Link to={"../donate"} className={styles.donateContainer}>
                <div className={styles.donate}>Support me</div>
            </Link>
        </div>
    );
}