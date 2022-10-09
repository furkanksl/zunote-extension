import "./HomePage.scss";

import closeIcon from "../../assets/icons/close-svgrepo-com.svg";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import { DateTimePicker } from "../../components/DateTimePicker";
import { Header } from "../../components/Header/Header";
import { TextFieldWithButton } from "../../components/Form/TextFieldWithButton";
import { Category } from "../../components/Category";
import { unsetReminder } from "../../redux/feature/reminder.reducer";
import { unselectCategory } from "../../redux/feature/category.reducer";

export function HomePage() {
    const dispatch = useDispatch();

    const isReminderSelected = useSelector((state: any) => state.reminder.value);
    const isCategorySelected = useSelector((state: any) => state.category.value);
    const reminderDate = useSelector((state: any) => state.reminder.reminderDate);
    const selectedCategory = useSelector((state: any) => state.category.selectedCategory);
    var dateString = moment.unix(reminderDate).format("MMM DD YYYY HH:mm");

    const removeReminder = () => dispatch(unsetReminder());

    const removeCategory = () => dispatch(unselectCategory());

    return (
        <div className="wrapper">
            <Header />
            {isReminderSelected ? <DateTimePicker /> : null}
            {isCategorySelected ? <Category /> : null}
            <div className="info-container">
                {reminderDate !== 0 ? (
                    <div className="reminder-section">
                        <p>Remind me : {dateString}</p>
                        <img src={closeIcon} alt="close" onClick={removeReminder} />
                    </div>
                ) : (
                    ""
                )}
                {selectedCategory !== "" ? (
                    <div className="category-section">
                        <p>Category : {selectedCategory}</p>
                        <img src={closeIcon} alt="close" onClick={removeCategory} />
                    </div>
                ) : (
                    ""
                )}
            </div>
            <TextFieldWithButton placeholder="Type something..." buttonText="SAVE" />
        </div>
    );
}
