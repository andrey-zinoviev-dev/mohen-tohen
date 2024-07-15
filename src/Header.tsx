import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import "./Header.css";
import { useAppDispatch, useAppSelector } from "./hooks";
import { faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { login } from "./features/userSlice";
// import { openPopup } from "./features/popupSlice";
import Popup from "./Popup";
import heading from "./assets/mh-1.png"
import { buyerUser, categories, fixedHeaderLinks, sellerUser } from "./utils";
import { CategoryInterface } from "./interfaces";
import LinksComp from "./LinksComp";
import { login } from "./features/userSlice";

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

    //dispatch
    const dispatch = useAppDispatch();

    //navigate
    const navigate = useNavigate();

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
                <div className="header__row-2">
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
                        <LinksComp title="Интересное" links={fixedHeaderLinks}></LinksComp>
                        {category && <LinksComp title="Что можно купить" links={category.links}></LinksComp>}
                        {category && <LinksComp title="Выбрать по дизайнеру" links={category.designers}></LinksComp>}
                        {/* <ul>
                            {fixedHeaderLinks.map((link) => {
                                return <li key={link.href}>{link.title}</li>
                            })}
                        </ul>
                        {category?.links && <ul>
                            {category.links.map((link) => {
                                return <li key={link.href}>
                                    <span>{link.title}</span>
                                </li>
                            })}
                        </ul>} */}
                    </div>
                </div>
                
                
            </header>
            {popupOpened && <Popup setClose={setPopupOpened}>
                <div className="header__popup-wrapper">
                    <button onClick={() => {
                        setPopupOpened(false);
                            // setClose(false);
                            // setClose && setClose(false);
                        }} className="header__popup-close">
                            <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <form className="header__popup-form" onSubmit={(evt) => {
                            evt.preventDefault();
                            // setPopupOpened(false);
                            // navigate(`profile/${1223}`)
                        }}>
                            <h3>Войти или зарегистрироваться</h3>
                            <p>Введите номер телефона для входа или регистрации на платформе. Отправим код по СМС либо в Telegram</p>
                            <div>
                                <span>+7</span>
                                <input type="tel" placeholder="ваш телефон..."></input>
                            </div>
                            <button type="button" onClick={() => {
                                setPopupOpened(false);
                                navigate(`profile/${1223}`);
                                dispatch(login(sellerUser));
                            }}>Получить код</button>
                    </form>
                    <p className="header__popup-wrapper-p">Нажимая на кнопку "Получить код", Вы даете согласие на обработку персональных данных в соответствии с <a>политикой обработки персональных данных</a></p>
                </div>
            </Popup>}
        </>

    )
}