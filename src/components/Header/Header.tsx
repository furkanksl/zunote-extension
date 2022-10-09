import "./Header.scss";
import { useDispatch } from "react-redux";
import { setReminderState, toggleReminder } from "../../redux/feature/reminder.reducer";
import { setCategoryState, toggleCategory } from "../../redux/feature/category.reducer";
import { Link } from "react-router-dom";
import NotesSvgComponent from "../Svg/NotesSvg";
import ReminderSvgComponent from "../Svg/ReminderSvg";
import CategorySvgComponent from "../Svg/CategorySvg";
import ProfileSvgComponent from "../Svg/ProfileSvg";
import LogoSvgComponent from "../Svg/LogoSvg";

type Props = {};
export function Header(props: Props) {
    const dispatch = useDispatch();

    // const isReminderSelected = useSelector((state: any) => state.reminder.value);
    // const isCategorySelected = useSelector((state: any) => state.category.value);

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
            <LogoSvgComponent function={() => {}} />
            <div className="navbar">
                <div className="header-col">
                    <NotesSvgComponent function={() => {}} />

                    <p className="altTitle">Notes</p>
                </div>

                <div className="header-col">
                    <ReminderSvgComponent function={onToggleReminder} />

                    <p className="altTitle">Reminder</p>
                </div>
                <div className="header-col">
                    <CategorySvgComponent function={onToggleCategory} />
                    <p className="altTitle">Category</p>
                </div>

                <div className="header-col">
                    <Link to={"/profile"}>
                        <ProfileSvgComponent function={() => {}} />
                    </Link>
                    <p className="altTitle">Profile</p>
                </div>
            </div>
        </div>
    );
}
