import "./TextFieldWithButton.scss";
import { SaveButton } from "./SaveButton";
import { useState } from "react";
import { toast } from "react-toastify";

type Props = {
    buttonText: string;
    onClick: (event: any, text: string) => any;
    placeholder: string;
    styles?: any;
};
export function TextFieldWithButton(props: Props) {
    const [inputValue, setInputValue] = useState("");

    function handleMessageChange(event: any) {
        setInputValue(event.target.value);
    }

    function onSave(e: any) {
        if (!inputValue) {
            toast.info("Please fill the field!");
            return;
        }
        props.onClick(e, inputValue);
        setInputValue("");
    }

    return (
        <div className="text-field" style={props?.styles?.textfield}>
            <textarea
                rows={3}
                value={inputValue}
                placeholder={props.placeholder}
                onChange={handleMessageChange}
            ></textarea>
            <SaveButton buttonName={props.buttonText} onClick={(e: any) => onSave(e)} />
        </div>
    );
}
