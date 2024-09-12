import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "./hooks";


export default function ProtectedRoute() {

    const userLoggedIn = useAppSelector((state) => {
        return state.user.loggedIn;
    });

    console.log(userLoggedIn);

    return (
        userLoggedIn ? <Outlet></Outlet> : <Navigate to={"/"}></Navigate>
    )
}