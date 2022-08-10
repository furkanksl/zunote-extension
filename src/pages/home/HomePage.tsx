import * as React from "react";
import "./HomePage.scss";
import { useSelector } from "react-redux";
import { DateTimePicker } from "../../components/DateTimePicker";
import { Header } from "../../components/Header";
import { NoteField } from "../../components/NoteField";
import { Category } from "../../components/Category";

type Props = {};
export function HomePage(props: Props) {
    const isReminderSelected = useSelector((state: any) => state.reminder.value);
    const isCategorySelected = useSelector((state: any) => state.category.value);

    return (
        <div className="wrapper">
            <Header />
            {isReminderSelected ? <DateTimePicker /> : null}
            {isCategorySelected ? <Category /> : null}
            <NoteField />
        </div>
    );
}
