import * as React from "react";
import "./LoginPage.scss";
import { Link } from "react-router-dom";

type Props = {};
export function LoginPage(props: Props) {
    return (
        <div className="body">
            <div className="container">
                <form>
                    <p>Welcome</p>
                    <input type="email" placeholder="Email" />
                    <br />
                    <input type="password" placeholder="Password" />
                    <br />
                    <Link to={"/home"}>
                        <input type="button" value="Sign in" />
                    </Link>
                    <br />
                    <p className="forgot-password">Forgot Password?</p>
                </form>
                <div className="drops">
                    <div className="drop drop-1"></div>
                    <div className="drop drop-2"></div>
                    <div className="drop drop-3"></div>
                    <div className="drop drop-4"></div>
                    <div className="drop drop-5"></div>
                </div>
            </div>
        </div>
    );
}
