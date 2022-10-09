import styles from "./AboutPage.module.scss";

import { PageHeader } from "../../components/Header/PageHeader";

export function AboutPage() {
    return (
        <div className="wrapper">
            <PageHeader title="ABOUT" />
            <p className={styles.desc}>
                ZUNOTE is a basic productivity tool that you can take notes while voice recording. It will be a
                multi-platform app soon. Desktop app will support Macos (arm/intel), Windows and Linux operating
                systems. Mobile app will support both IOS and Android. Lastly, extension will be available on
                Chrome/Firefox extension store.
            </p>

            <a className={styles.source} href="https://zunote.io" target={"_blank"} rel="noreferrer">
                ZUNOTE.IO
            </a>

            <a className={styles.source} href="https://github.com/furkanksl" target={"_blank"} rel="noreferrer">
                GITHUB
            </a>
        </div>
    );
}
