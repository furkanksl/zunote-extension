import React from "react";
import "./App.scss";
import { SaveButton } from "./components/SaveButton";

import { DateTimePicker } from "./components/DateTimePicker";
import { Header } from "./components/Header";
import { useSelector } from "react-redux";

function App() {
    const isReminderSelected = useSelector(
        (state: any) => state.reminder.value
    );

    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                {isReminderSelected ? <DateTimePicker /> : null}
                <div className="text-field">
                    <textarea rows={3}></textarea>
                    <SaveButton />
                </div>
            </div>
        </div>
    );
}

export default App;
