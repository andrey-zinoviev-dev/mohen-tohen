import "./Cart.css"
import { createPortal } from "react-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LinkCompAction from "./LinkCompAction";

import CartContents from "./CartContents";

import CartDetails from "./CartDetails";
import { useAppSelector } from "./hooks";
import { useState } from "react";
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

    return (
        <>
            <section className="cart">
                <h3>корзина</h3>
                <div className="cart__wrapper">
                    <CartContents />
                    {cartState.length > 0 && <CartDetails>
                        {userState._id ? <LinkCompAction to="../createOrder" text="Оформить заказ" icon={faArrowRight} /> : <button className="" onClick={() => {
                            setOpenedPortal(true);
                            // console.log("open login popup")
                        }}>
                            Оформить заказ    
                    </button>
                }
                    </CartDetails>}
                    {/* {userState ? <LinkCompAction to="../createOrder" text="Оформить заказ" icon={faArrowRight} />
                :
                <button className="" onClick={() => {
                    setOpenedPortal(true);
                    // console.log("open login popup")
                }}>
                    Оформить заказ    
                </button>} */}
                </div>
            </section>
            {openedPortal && createPortal(<PortalComp>
                <Login closePopup={setOpenedPortal}></Login>
            </PortalComp>, document.body)}
        </>
    )
}