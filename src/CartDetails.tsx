import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useAppSelector } from "./hooks";
// import { Link } from "react-router-dom";
import PortalComp from "./PortalComp";
import Login from "./Login";
import Headline from "./Headline";
import "./CartDetails.css"
import InputEl from "./InputEl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LinkCompAction from "./LinkCompAction";
export default function CartDetails() {
    const userState = useAppSelector((state) => {
        return state.user._id;
    });

    const cartState = useAppSelector((state) => {
        return state.basket.goods;
    });

    //total
    const total = cartState.reduce((result, item) => {
        return result + (item.quantity * item.good.price);
    }, 0);

    //state
    const [openedPortal, setOpenedPortal] = useState<boolean>(false);
    const [promocode, setPromocode] = useState<{promocode: string}>({promocode: ""});

    return (
        <div className="cart-details">
            <Headline text="Детали заказа"></Headline>
            <span>Итого: {total}&#8381;</span>
            <span>Товаров в корзине: {cartState.length}</span>
            <div className="cart-details__input-wrapper">
                <InputEl name="promocode" placeHolder="Промокод" updateState={setPromocode}></InputEl>
                {promocode.promocode.length > 0 && <button className="cart-details__input-button">
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>}
            </div>
            {userState ? <LinkCompAction to="../createOrder" text="Оформить заказ" icon={faArrowRight} />
                :
                <button className="" onClick={() => {
                    setOpenedPortal(true);
                    // console.log("open login popup")
                }}>
                    Оформить заказ    
                </button>}
            {openedPortal && createPortal(<PortalComp>
                <Login closePopup={setOpenedPortal}></Login>
            </PortalComp>, document.body)}
        </div>
    )
}