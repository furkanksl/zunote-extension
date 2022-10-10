import { useState } from "react";
import LoadingSvgComponent from "../Svg/LoadingSvg";
import "./SaveButton.scss";

type Props = {
    buttonName: string;
    onClick: (e: any) => any;
};
export function SaveButton(props: Props) {
    const [isLoading, setIsLoading] = useState(false);

    async function onSave(e: any) {
        e.preventDefault();

        setIsLoading(true);

        try {
            await props.onClick(e);
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    }

    return (
        <div>
            <button className="button" onClick={async (e: any) => onSave(e)}>
                {isLoading ? <LoadingSvgComponent /> : <span>{props.buttonName}</span>}
            </button>
        </div>
    );
}
