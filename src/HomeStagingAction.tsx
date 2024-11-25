import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { links } from "./utils";
// import pic from "./assets/creative-fengshui-practice-arrangement.jpg";
import logo from "./assets/mh-1.png";
import "./HomeStagingAction.css";
import { createPortal } from "react-dom";
// import PortalComp from "./PortalComp";
import HomeStagingForm from "./HomeStagingForm";
import PortalMultimedia from "./PortalMultimedia";
import { Link } from "react-router-dom";
// import { useAppDispatch } from "./hooks";
// import { openForm } from "./features/homeStagingSlice";
export default function HomeStagingAction() {
    // const dispatch = useAppDispatch();
    //state
    const [openedForm, setOpenedForm] = useState<boolean>(false);

    return (
        <section className="homestaging-action">
            <div className="homestaging-action__text">
                <Link className="header__home" to={`../`}>
                    <img className="homestaging-action__logo" src={logo}></img>
                </Link>
                {/* <img className="homestaging-action__logo" src={logo}></img> */}
                <div className="homestaging-action__text-wrapper">
                    <h2>Превратите ваше жильё в объект <span className="homestaging-action__text-span">мечты</span> с нашим хоумстэйджингом!</h2>
                    <p>Вам не нужно волноваться о деталях — мы сделаем всё за вас, чтобы ваш дом выглядел безупречно.</p>
                    <button onClick={() => {
                        setOpenedForm(true);

                        // dispatch(openForm(true))
                        // useAppDispatch()
                    }}>
                        <span>Превратить ваше пространство в шедевр</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                <ul className="homestaging-action__links">
                    {links.map((link) => {
                        return <li className="homestaging__action-links-link" key={link.name}>
                            <a href={link.href}>
                                <span>{link.name}</span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </li>
                    })}
                </ul>
            </div>
            <img className="homestaging-action__img" src={"https://cdn.mohen-tohen.ru/creative-fengshui-practice-arrangement.jpg"}></img>
            {openedForm && createPortal(<PortalMultimedia>
                <label></label>
                <HomeStagingForm closePortal={setOpenedForm} />
            </PortalMultimedia>, document.body)}
    </section>
    )
}