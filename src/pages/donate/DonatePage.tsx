import * as React from "react";
import "./DonatePage.scss";
import { PageHeader } from "../../components/Header/PageHeader";

type Props = {};
export function DonatePage(props: Props) {
    return (
        <div className="wrapper">
            <PageHeader title="DONATE" />
            <p className="donate-text">
                You can support me to continue to develop this open-source project. You can do that with just one-click
                to the button below.
            </p>
            <a href="https://www.buymeacoffee.com/furkankoseoglu" target="noopener" className="buy-me-a-coffe-button">
                <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" />
            </a>
        </div>
    );
}
