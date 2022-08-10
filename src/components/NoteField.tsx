import * as React from "react";
import "./NoteField.scss";
import { SaveButton } from "./SaveButton";
type Props = {};
export function NoteField(props: Props) {
    return (
        <div className="text-field">
            <textarea rows={3}></textarea>
            <SaveButton />
        </div>
    );
}
