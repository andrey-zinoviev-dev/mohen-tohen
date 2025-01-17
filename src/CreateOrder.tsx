import React, { useMemo } from "react"
import OrderStep from "./OrderStep";

import "./CreateOrder.css"
import { locationInputs, recipientInputs } from "./utils";
import heading from "./assets/mh-1.png"
// import { useNavigate } from "react-router-dom";
// import Cart from "./Cart";
// import CartContents from "./CartContents";
import LinkCompBack from "./LinkCompBack";
import { usePostCreateOrderMutation } from "./features/apiSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useNavigate } from "react-router-dom";
import { updateOrdersHistory } from "./features/userSlice";
import { clearCart } from "./features/basketSlice";
import CartDetails from "./CartDetails";
import { socket } from "./socketio";
// import { TransactionGoodInterface } from "./interfaces";
export default function CreateOrder() {
    //redux
    const cartState = useAppSelector((state) => {
        return state.basket.goods;
    });
    // console.log(cartState);

    //state
    const [orderDetails, setOrderDetails] = React.useState<{name: string, phone: string, email: string, address: string, zipcode: string}>({
        name: "",
        phone: "",
        email: "",
        address: "",
        zipcode: "",
        // payment: "",
    });

    //RTK
    const [createOrder] = usePostCreateOrderMutation();

    // //location
    // const location = useLocation();
    // const total = location.state as number;

    //navigate
    const navigate = useNavigate();

    //dispatch
    const dispatch = useAppDispatch();

    //memo
    const total = useMemo(() => {
        return cartState.map((cartitem) => {
            return (cartitem.price + cartitem.selectedColor.price + cartitem.selectedDimension.price + cartitem.selectedMaterial.price) * cartitem.quantity;
        }).reduce((prevValue, currentValue) => {
            return prevValue + currentValue;
        }, 0);
    }, [cartState]);
    
    return (
        <section>
            <img className="order-logo" src={heading}></img>
            <h2>Создание заказа</h2>
            <div className="order-create">
                <LinkCompBack to="/basket" text="Корзина"></LinkCompBack>
                
                <div className="order-create__block">
                    <OrderStep headline="Данные получателя" step={1} inputs={recipientInputs} updateState={setOrderDetails}>

                    </OrderStep>
                    <OrderStep headline="Адрес доставки" step={2} inputs={locationInputs} updateState={setOrderDetails}>
                    </OrderStep>


                </div>
                <CartDetails>
                    <button className="order-create__submit-btn" onClick={() => {
                        // console.log(cartState);
                        createOrder({personalData: orderDetails, goods: cartState, total: total}).unwrap()
                        .then((data) => {
                            dispatch(updateOrdersHistory(data.createdOrder));
                            navigate("../successOrderCreate", {
                                state: data.createdOrder,
                            });
                            dispatch(clearCart());
                            socket.emit("newBatch", data.createdOrder.goods)
                        })
                    }}>
                        Оплатить {total}&#8381;
                        {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                    </button>
                </CartDetails>
                
            </div>
        </section>
    )
}