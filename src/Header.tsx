import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faMagnifyingGlass, faShoppingBag, faUser } from "@fortawesome/free-solid-svg-icons"
import "./Header.css";
import { useAppDispatch, useAppSelector } from "./hooks";
import { faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
// import { login } from "./features/userSlice";
// import { openPopup } from "./features/popupSlice";
import Popup from "./Popup";
import heading from "./assets/mh-1.png"
import { categories, fixedHeaderLinks } from "./utils";
import { CategoryInterface } from "./interfaces";
import LinksComp from "./LinksComp";
import { login } from "./features/userSlice";
import { createPortal } from "react-dom";
import PortalComp from "./PortalComp";
// import { getOTPCode } from "./userApi";
import { useGetOTPCodeMutation, useGetLoggedUserQuery } from "./features/apiSlice";
import InputEl from "./InputEl";
// import { UserInterface } from "./features/userSlice";

export default function Header() {
    //redux state
    // const basketState = useAppSelector((state) => {
    //     return state.basket;
    // });
    // const favouriteState = useAppSelector((state) => {
    //     return state.goods.favourties;
    // });
    const userState = useAppSelector((state) => {
        return state.user;
    });

    // console.log(userState);

    const [getOTPCode] = useGetOTPCodeMutation();

    // const {data: user}

    //dispatch
    const dispatch = useAppDispatch();

    //navigate
    const navigate = useNavigate();

    //localState
    // const [popupOpened, setPopupOpened] = React.useState<boolean>(false);
    // const [category, setCategory] = React.useState<CategoryInterface | null>(null);
    const [openPortal, setOpenPortal] = React.useState<boolean>(false);
    const [phone, setPhone] = React.useState<{tel: string}>({tel: ""});
    // const [loginStatus, setLoginStatus] = React.useState<{codeRequested: boolean, finished: boolean}>({codeRequested: false, finished: false});

    //refs
    // const inputRef = React.useRef<HTMLInputElement | null>(null);

    React.useEffect(() => {
        console.log(phone);
    }, [phone])

    return (
        <>
            <header className="header">
                <div className="header__wrapper">
                    <form>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        <input placeholder="Поиск"></input>
                    </form>
                    <Link to={`../`}>
                        <img className="header__img" src={heading}></img>
                    </Link>
                    <div className="header__links">
                        {/* <Link className="header__links-homestaging" to="/homestaging">
                            <span>Подбор декора</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link> */}
                        <div className="header__links-navigation">
                            <Link to={`profile/${1223}/favs`}>
                                <FontAwesomeIcon icon={faHeart} />
                                <span>{userState.favourites && userState.favourites.length}</span>
                            </Link>
                            <button onClick={() => {
                                userState.loggedIn ? 
                                    navigate(`profile/${userState._id}/history`)
                                    :
                                    setOpenPortal(true);

                                    // setPopupOpened(true);
                                // dispatch(login({name: "Андрей", email: "sttrog_810@mail.ru", favourites: [], phone: "+79588280774", seller: false, loggedIn: true}))
                            }}>
                                {!userState.loggedIn ? <span>Войти</span> : <span>{userState.name && userState.name[0]} <FontAwesomeIcon icon={faUser} /></span>}
                            </button>
                            <Link to="../basket">
                                <FontAwesomeIcon icon={faShoppingBag} />
                                <span>{userState.basket && userState.basket.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="header__row-2">
                    <ul className="header__categories">
                        {categories.map((category) => {
                            return <li key={category.title} onMouseOver={() => {
                                // setCategory(category);
                            }}>
                                <span>{category.title}</span>
                                <div></div>
                            </li>
                        })}
                        <li key={"homestage"}>
                            <Link className="header__links-homestaging" to="/homestaging">
                                <span>Подбор декора</span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </li>
                    </ul>

                    {/* <div className="header__extension">
                        <LinksComp title="Интересное" links={fixedHeaderLinks}></LinksComp>
                        {category && <LinksComp title="Что можно купить" links={category.links}></LinksComp>}
                    </div> */}
                </div>
                {openPortal && createPortal(<PortalComp>
                    <button className="protal__close" onClick={() => {
                        setOpenPortal(false);
                    }}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <form className="header__popup-form" onSubmit={(evt) => {
                            evt.preventDefault();
                    }}>
                        <h3>Войти или зарегистрироваться</h3>
                        
                        {/* {!loginStatus.codeRequested ?  */}
                        
                        <>
                            <p>Введите номер телефона для входа или регистрации на платформе. Отправим код по СМС либо в Telegram</p>
                            <div>
                                <span>+7</span>
                                <InputEl name="tel" type="tel" placeHolder="9991234567" autoFocus={true} underLine={true} updateState={setPhone}></InputEl>
                                {/* <input autoFocus={true} type="tel" ref={inputRef} placeholder="ваш телефон..."></input> */}
                            </div>
                            <button type="button" disabled={phone.tel.length === 10 ? false : true} onClick={() => {

                                // inputRef.current && getOTPCode(inputRef.current.value).unwrap()
                                getOTPCode(phone.tel).unwrap()
                                .then((data) => {
                                    console.log(data);
                                    dispatch(login({...data, loggedIn: true}));
                                    setOpenPortal(false);
                                })
        
                                // getOTPCode(inputRef.current?.value)
                                // .then((data) => {
                                //     setLoginStatus((prevValue) => {
                                //         return {...prevValue, codeRequested: true};
                                //     });
                                //     console.log(data);
                                // })
                                    
                                    // setPopupOpened(false);
                                    // dispatch(login(sellerUser));
                            }}>Войти</button>
                        </>


                        {/* // <>
                        //     <p>Введите проверочный код, отправленный на Ваш телефон</p>
                        //     <input type="text" placeholder="1 2 3 4"></input>
                            
                        // </> */}
                        

                    </form>
                    <p className="header__popup-wrapper-p">Нажимая на кнопку "Получить код", Вы даете согласие на обработку персональных данных в соответствии с <a href="">политикой обработки персональных данных</a></p>
                </PortalComp>, document.body)}
            </header>
            {/* {popupOpened && <Popup setClose={setPopupOpened}>
                <div className="header__popup-wrapper">
                    <button onClick={() => {
                        setPopupOpened(false);
                        }} className="header__popup-close">
                            <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <form className="header__popup-form" onSubmit={(evt) => {
                            evt.preventDefault();
                        }}>
                            <h3>Войти или зарегистрироваться</h3>
                            <p>Введите номер телефона для входа или регистрации на платформе. Отправим код по СМС либо в Telegram</p>
                            <div>
                                <span>+7</span>
                                <input type="tel" placeholder="ваш телефон..."></input>
                            </div>
                            <button type="button" onClick={() => {
                                setPopupOpened(false);
                                dispatch(login(sellerUser));
                            }}>Получить код</button>
                    </form>
                    <p className="header__popup-wrapper-p">Нажимая на кнопку "Получить код", Вы даете согласие на обработку персональных данных в соответствии с <a href="">политикой обработки персональных данных</a></p>
                </div>
            </Popup>} */}
        </>

    )
}