import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { setUser } from "../redux/feature/auth.reducer";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.auth.user);
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                if (user.emailVerified) {
                    dispatch(setUser(user));
                }
            } else {
                dispatch(setUser(null));
                navigate("/auth");
            }
        });
    }, [user]);

    return <>{user?.emailVerified ? children : null}</>;
};

export default ProtectedRoute;
