import styles from "./AuthPage.module.scss";
import { toast } from "react-toastify";
import LogoSvgComponent from "../../components/Svg/LogoSvg";
import { useDispatch } from "react-redux";
import { useState } from "react";
import FirebaseService from "../../services/firebase/firebase.service";
import UtilityService from "../../services/utility.service";
import { setUser } from "../../redux/feature/auth.reducer";
import { auth } from "../../firebase";
import EmailSvgComponent from "../../components/Svg/EmailSvg";
import PasswordSvgComponent from "../../components/Svg/PasswordSvg";
import LoadingSvgComponent from "../../components/Svg/LoadingSvg";
import { useNavigate } from "react-router-dom";

export function AuthPage() {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const firebaseService = new FirebaseService();
    const utilityService = new UtilityService();

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    function clearPassFields() {
        setPass("");
    }

    function checkInputField() {
        if (email === "" || pass === "") {
            toast.error("Please fill the all inputs!", { icon: "😬" });
            return false;
        } else if (pass.length <= 5) {
            toast.error("Password should be at least 6 characters");
            return false;
        }

        if (!utilityService.validateEmail(email)) {
            toast.error("Please type a valid email!");
            return false;
        }

        return true;
    }

    async function onContinue() {
        setIsLoading(true);

        if (!checkInputField()) {
            setIsLoading(false);
            return;
        }

        const result: boolean = await firebaseService.login(email, pass);
        if (result) {
            dispatch(setUser(auth.currentUser));
            navigator("/home");
        } else {
            clearPassFields();
        }

        setIsLoading(false);
    }

    return (
        <div className="wrapper">
            <div className={styles["auth-page-wrapper"]}>
                <LogoSvgComponent function={() => {}} />

                <p>LOGIN</p>
                <div className={styles.input}>
                    <EmailSvgComponent />
                    <input
                        type="text"
                        value={email}
                        placeholder="email"
                        onChange={(e: any) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <PasswordSvgComponent />
                    <input
                        type="password"
                        value={pass}
                        placeholder="password"
                        onChange={(e: any) => setPass(e.target.value)}
                    />
                </div>

                <div
                    className={styles.button + (isLoading ? " " + styles.loading : "")}
                    onClick={async () => await onContinue()}
                >
                    {isLoading ? <LoadingSvgComponent /> : <p>Continue</p>}
                </div>
            </div>
        </div>
    );
}
