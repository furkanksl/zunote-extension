import "./HomePage.scss";

import closeIcon from "../../assets/icons/close-svgrepo-com.svg";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import { DateTimePicker } from "../../components/DateTimePicker";
import { Header } from "../../components/Header/Header";
import { TextFieldWithButton } from "../../components/Form/TextFieldWithButton";
import { Category } from "../../components/Category";
import { setReminderState, unsetReminder } from "../../redux/feature/reminder.reducer";
import { setCategories, setCategoryState, unselectCategory } from "../../redux/feature/category.reducer";
import FirebaseService from "../../services/firebase/firebase.service";
import Note from "../../models/Note.model";
import { useEffect } from "react";

export function HomePage() {
    const dispatch = useDispatch();
    const firebaseService = new FirebaseService();

    const isReminderSelected = useSelector((state: any) => state.reminder.value);
    const isCategorySelected = useSelector((state: any) => state.category.value);
    const reminderDate = useSelector((state: any) => state.reminder.reminderDate);
    const selectedCategory = useSelector((state: any) => state.category.selectedCategory);
    const categories = useSelector((state: any) => state.category.categories);

    var dateString = moment.utc(reminderDate).format("YYYY-MMM-DD HH:mm");

    const removeReminder = () => dispatch(unsetReminder());

    const removeCategory = () => dispatch(unselectCategory());

    useEffect(() => {
        new Promise(async () => {
            dispatch(setCategories(await firebaseService.getCategories()));
        });
    }, []);

    async function saveNote(e: any, noteText: string) {
        const createdAt = new Date().getTime();

        const newNote: Note = new Note(
            {
                category: selectedCategory,
                isVoiceNote: false,
                noteText: noteText,
                reminder: reminderDate,
                createdAt: createdAt,
                id: createdAt.toString(),
            },
            undefined
        );

        await firebaseService.saveNote(newNote);

        dispatch(unsetReminder());
        dispatch(unselectCategory());
        dispatch(setReminderState(false));
        dispatch(setCategoryState(false));
    }

    return (
        <div className="wrapper">
            <Header />
            {isReminderSelected ? <DateTimePicker /> : null}
            {isCategorySelected ? <Category categories={categories} /> : null}
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
            <TextFieldWithButton onClick={saveNote} placeholder="Type something..." buttonText="SAVE" />
        </div>
    );
}
