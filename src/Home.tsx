import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Collaboration from "./Collaboration";

export default function Home() {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}