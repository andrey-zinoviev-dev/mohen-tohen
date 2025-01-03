import "./Cart.css"

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LinkCompAction from "./LinkCompAction";

import CartContents from "./CartContents";

import CartDetails from "./CartDetails";
import { useAppSelector } from "./hooks";

export default function Cart() {   
    //redux
    const cartState = useAppSelector((state) => {
        return state.basket.goods;
    }) 
    return (
        <>
            <section className="cart">
                <h3>корзина</h3>
                <div className="cart__wrapper">
                    <CartContents />
                    {cartState.length > 0 && <CartDetails>
                        <LinkCompAction to="../createOrder" text="Оформить заказ" icon={faArrowRight} />
                    </CartDetails>}
                    {/* {userState ? <LinkCompAction to="../createOrder" text="Оформить заказ" icon={faArrowRight} />
                :
                <button className="" onClick={() => {
                    setOpenedPortal(true);
                    // console.log("open login popup")
                }}>
                    Оформить заказ    
                </button>}
            {openedPortal && createPortal(<PortalComp>
                <Login closePopup={setOpenedPortal}></Login>
            </PortalComp>, document.body)} */}
                </div>
            </section>
        </>
    )
}