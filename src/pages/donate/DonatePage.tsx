import * as React from "react";
import "./DonatePage.scss";
import { PageHeader } from "../../components/Header/PageHeader";

type Props = {};
export function DonatePage(props: Props) {
    return (
        <div className="wrapper">
            <PageHeader title="DONATE" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illum ullam, aliquam animi
                doloribus iure voluptas corporis quae deserunt nobis, ipsam ad dignissimos eum tempora aut dolore
                aliquid nostrum reiciendis!
            </p>
            <a href="https://www.buymeacoffee.com/furkankoseoglu" target="noopener" className="buy-me-a-coffe-button">
                <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" />
            </a>
        </div>
    );
}
