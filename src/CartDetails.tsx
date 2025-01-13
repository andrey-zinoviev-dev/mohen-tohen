import { useMemo, useState } from "react";
// import { createPortal } from "react-dom";
import { useAppSelector } from "./hooks";
// import { Link } from "react-router-dom";
// import PortalComp from "./PortalComp";
// import Login from "./Login";
import Headline from "./Headline";
import "./CartDetails.css"
import InputEl from "./InputEl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import LinkCompAction from "./LinkCompAction";

interface CartDetailsInterface {
    children: React.ReactNode,
    // total: number,
}

export default function CartDetails({ children }: CartDetailsInterface) {
    const cartState = useAppSelector((state) => {
        return state.basket.goods;
    });
    console.log(cartState);

    // //memo
    const total = useMemo(() => {
        return cartState.map((cartitem) => {
            return (cartitem.price + cartitem.selectedColor.price + cartitem.selectedDimension.price + cartitem.selectedMaterial.price) * cartitem.quantity;
        }).reduce((prevValue, currentValue) => {
            return prevValue + currentValue;
        }, 0);
    }, [cartState]);

    //state
    // const [openedPortal, setOpenedPortal] = useState<boolean>(false);
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
            {children}
        </div>
    )
}