import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Notification from "./Notification";

import { useAppSelector } from "./hooks";

export default function Home() {
    const notificationState = useAppSelector((state) => {
        return state.notification.message;
    });

    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            {notificationState && <Notification></Notification>}
        </>
    )
}