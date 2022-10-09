import "./SaveButton.scss";

type Props = {
    buttonName: string;
};
export function SaveButton(props: Props) {
    function onSave(e: any) {
        e.preventDefault();
    }

    return (
        <div>
            <button className="button" onClick={onSave}>
                <span>{props.buttonName}</span>
            </button>
        </div>
    );
}
