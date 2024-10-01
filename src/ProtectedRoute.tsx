import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "./hooks";
import React from "react";


export default function ProtectedRoute() {

    const userLoggedIn = localStorage.getItem("loggedIn");

    return (
        userLoggedIn ? <Outlet></Outlet> : <Navigate to={"/"}></Navigate>
    )
}