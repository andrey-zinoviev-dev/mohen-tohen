import { useState } from "react";
import { createPortal } from "react-dom";
import { useAppSelector } from "./hooks";
import { Link } from "react-router-dom";
import PortalComp from "./PortalComp";
import Login from "./Login";
import Headline from "./Headline";
export default function CartDetails() {
    const userState = useAppSelector((state) => {
        return state.user._id;
    });

    const cartState = useAppSelector((state) => {
        return state.basket.goods;
    });

    const [openedPortal, setOpenedPortal] = useState<boolean>(false);

    return (
        <div>
                        <div>
                <Headline text="Детали заказа"></Headline>
                <div>
                    <span>Итого: 0</span>
                    <span>Товаров в корзине: {cartState.length}</span>
                </div>
                <label>
                    <input name="promocode" placeholder="Промокод"></input>
                    {/* <InputEl name="" placeHolder="Промокод" /> */}
                </label>
            </div>
            {userState ? <Link to={"../createOrder"} className="cart__submit-btn">
                    Оформить заказ
                </Link>
                :
                <button className="cart__submit-btn" onClick={() => {
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