import * as React from "react";
import "./Header.scss";
import userLogo from "../assets/icons/user.png";
import reminderLogo from "../assets/icons/reminder.png";
import categoryLogo from "../assets/icons/category.png";
import notesLogo from "../assets/icons/notes.png";
import { useDispatch, useSelector } from "react-redux";
import { setReminderState, toggleReminder } from "../redux/feature/reminder.reducer";
import { setCategoryState, toggleCategory } from "../redux/feature/category.reducer";

type Props = {};
export function Header(props: Props) {
    const dispatch = useDispatch();

    const isReminderSelected = useSelector((state: any) => state.reminder.value);
    const isCategorySelected = useSelector((state: any) => state.category.value);

    function onToggleReminder() {
        dispatch(toggleReminder());
        dispatch(setCategoryState(false));
    }

    function onToggleCategory() {
        dispatch(toggleCategory());
        dispatch(setReminderState(false));
    }

    return (
        <div className="header">
            <div className="profile">
                <img src={notesLogo} alt="Notes" title="All Notes" />
            </div>
            <div className="functions-section">
                <div className="reminder gradient-border" onClick={onToggleReminder}>
                    <img
                        className={isReminderSelected ? "onActive" : ""}
                        src={reminderLogo}
                        alt="Reminder"
                        title="Set Reminder"
                    />
                </div>
                <div className="category gradient-border" onClick={onToggleCategory}>
                    <img
                        className={isCategorySelected ? "onActive" : ""}
                        src={categoryLogo}
                        alt="Category"
                        title="Set Category"
                    />
                </div>
            </div>
            <div className="profile">
                <img src={userLogo} alt="Profile" title="Profile" />
            </div>
        </div>
    );
}
