import * as React from "react";
import "./DateTimePicker.scss";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { Moment } from "moment";
import { useDispatch } from "react-redux";
import { setReminder } from "../redux/feature/reminder.reducer";

type Props = {};
export function DateTimePicker(props: Props) {
    const dispatch = useDispatch();

    function valid(current: Moment) {
        let date = new Date();
        return current.toDate() >= date;
    }

    const onChangeDatetime = (val: any) => dispatch(setReminder(val.utc().valueOf()));

    return (
        <div className="datetime-picker-container">
            <Datetime
                isValidDate={valid}
                dateFormat="YYYY-MMM-D"
                closeOnClickOutside={true}
                onChange={(val) => onChangeDatetime(val)}
                initialValue={new Date()}
                inputProps={{ readOnly: true }}
            />
        </div>
    );
}
