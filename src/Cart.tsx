import "./Cart.css"
import { createPortal } from "react-dom";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LinkCompAction from "./LinkCompAction";

import CartContents from "./CartContents";

import CartDetails from "./CartDetails";
import { useAppSelector } from "./hooks";
import { useState, useMemo } from "react";
import Login from "./Login";
import PortalComp from "./PortalComp";
// import Login from "./Login";

export default function Cart() {   
    //redux
    const cartState = useAppSelector((state) => {
        return state.basket.goods;
    });

    const userState = useAppSelector((state) => {
        return state.user;
    });

    //state
    const [openedPortal, setOpenedPortal] = useState<boolean>(false);

    //memo
    const totalPrice = useMemo(() => {
        return cartState.map((good) => {
            return good.price * good.quantity;
        }).reduce((currentTotal, currentPrice) => {
            return currentTotal + currentPrice;
        }, 0)
    }, [cartState])

    return (
        <>
            <section className="cart">
                <h3>корзина</h3>
                <div className="cart__wrapper">
                    <CartContents />
                    {cartState.length > 0 && <CartDetails total={totalPrice}>
                        {userState._id ? <LinkCompAction state={totalPrice} to="../createOrder" text="Оформить заказ" /> : <button className="" onClick={() => {
                            setOpenedPortal(true);
                            // console.log("open login popup")
                        }}>
                            Оформить заказ    
                    </button>
                }
                    </CartDetails>}
                </div>
            </section>
            {openedPortal && createPortal(<PortalComp>
                <Login closePopup={setOpenedPortal}></Login>
            </PortalComp>, document.body)}
        </>
    )
}