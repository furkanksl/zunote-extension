import "./TextFieldWithButton.scss";
import { SaveButton } from "./SaveButton";

type Props = {
    buttonText: string;
    placeholder: string;
    styles?: any;
};
export function TextFieldWithButton(props: Props) {
    return (
        <div className="text-field" style={props?.styles?.textfield}>
            <textarea rows={3} placeholder={props.placeholder}></textarea>
            <SaveButton buttonName={props.buttonText} />
        </div>
    );
}
