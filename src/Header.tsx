import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import "./Header.css";
import { useAppSelector } from "./hooks";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { login } from "./features/userSlice";
// import { openPopup } from "./features/popupSlice";
import Popup from "./Popup";
import heading from "./assets/mh-1.png"
import { categories, fixedHeaderLinks } from "./utils";
import { CategoryInterface } from "./interfaces";

export default function Header() {
    //redux state
    const basketState = useAppSelector((state) => {
        return state.basket;
    });
    const favouriteState = useAppSelector((state) => {
        return state.goods.favourties;
    });
    const userState = useAppSelector((state) => {
        return state.user;
    });

    //localState
    const [popupOpened, setPopupOpened] = React.useState<boolean>(false);
    const [category, setCategory] = React.useState<CategoryInterface | null>(null);

    return (
        <>
            <header className="header">
                <div className="header__wrapper">
                    <form>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        <input placeholder="Поиск"></input>
                    </form>
                    <img className="header__img" src={heading}></img>
                    <div className="header__links">
                        
                        <Link to="../favs">
                            <FontAwesomeIcon icon={faHeart} />
                            <span>{favouriteState.length}</span>
                        </Link>
                        <button onClick={() => {
                            setPopupOpened(true);
                            // dispatch(login({name: "Андрей", email: "sttrog_810@mail.ru", favourites: [], phone: "+79588280774", seller: false, loggedIn: true}))
                        }}>
                            {!userState.loggedIn ? "Войти" : `${userState.name}`}
                        </button>
                        <Link to="../basket">
                            <FontAwesomeIcon icon={faShoppingBag} />
                            <span>{basketState.goods.length}</span>
                        </Link>
                    </div>
                </div>
                <ul className="header__categories">
                    {categories.map((category) => {
                        return <li key={category.title} onMouseOver={() => {
                            setCategory(category);
                        }}>
                            <span>{category.title}</span>
                            <div></div>
                        </li>
                    })}
                </ul>
                <div className="header__extension">
                    <ul>
                        {fixedHeaderLinks.map((link) => {
                            return <li key={link}>{link}</li>
                        })}
                    </ul>
                    {category?.links && <ul>
                        {category.links.map((link) => {
                            return <li key={link.href}>
                                <span>{link.title}</span>
                            </li>
                        })}
                    </ul>}
                </div>
            </header>
            {popupOpened && <Popup setClose={setPopupOpened}>
                <h3>Войти или зарегистрироваться</h3>
            </Popup>}
        </>

    )
}