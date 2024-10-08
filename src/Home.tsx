import Header from "./Header";
// import Footer from "./Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Notification from "./Notification";
// import Popup from "./Popup";
import { useAppSelector } from "./hooks";
import HomeStagingFooter from "./HomeStagingFooter";

export default function Home() {
    const notificationState = useAppSelector((state) => {
        return state.notification.message;
    });

    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <HomeStagingFooter></HomeStagingFooter>
            {/* <Footer></Footer> */}
            {notificationState && <Notification></Notification>}
            <ScrollRestoration></ScrollRestoration>
            {/* {popupState && <Popup>
                <h3>Войти или зарегистрироваться</h3>    
            </Popup>} */}
        </>
    )
}