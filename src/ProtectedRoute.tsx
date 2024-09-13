import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "./hooks";
import React from "react";


export default function ProtectedRoute() {

    const userLoggedIn = useAppSelector((state) => {
        return state.user.loggedIn;
    });

    // console.log(userLoggedIn);

    React.useEffect(() => {
        console.log(userLoggedIn);
    }, [userLoggedIn]);

    return (
        userLoggedIn ? <Outlet></Outlet> : <Navigate to={"/"}></Navigate>
    )
}