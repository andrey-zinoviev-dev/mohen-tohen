import React from "react"
import OrderStep from "./OrderStep";

import "./CreateOrder.css"
import { locationInputs, recipientInputs } from "./utils";
import heading from "./assets/mh-1.png"
// import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import Cart from "./Cart";
import CartContents from "./CartContents";
import LinkCompBack from "./LinkCompBack";
import { usePostCreateOrderMutation } from "./features/apiSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useNavigate } from "react-router-dom";
import { updateOrdersHistory } from "./features/userSlice";
import { clearCart } from "./features/basketSlice";
import CartDetails from "./CartDetails";
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

    //navigate
    const navigate = useNavigate();

    //dispatch
    const dispatch = useAppDispatch();


    //navigate
    // const navigate = useNavigate();

    // console.log(cartState);

    //state
    // const [step, setStep] = React.useState<number>(0);

    //functions
    // function showStepResults (data) {
    //     console.log(data);
    // }
    // function renderStep() {
    //     switch (step) {
    //         case 0: 
    //         return <OrderStep1 showResults={showStepResults} />
    //     }
    // 
    
    return (
        <section>
            <img className="order-logo" src={heading}></img>
            <h2>Создание заказа</h2>
            <div className="order-create">
                {/* <button onClick={() => {
                    navigate(-1);
                }}> */}
                <LinkCompBack to="/basket" text="Корзина"></LinkCompBack>
                <div className="order-create__block">
                    <OrderStep headline="Данные получателя" step={1} inputs={recipientInputs} updateState={setOrderDetails}>

                    </OrderStep>
                    <OrderStep headline="Адрес доставки" step={2} inputs={locationInputs} updateState={setOrderDetails}>
                    </OrderStep>

                    {/* <OrderStep headline="Способ оплаты" step={3} inputs={paymentInputs} updateState={setOrderDetails}></OrderStep> */}

                    <button className="order-create__submit-btn" onClick={() => {
                        // console.log(cartState);

                        createOrder({personalData: orderDetails, goods: cartState})
                        .then((data) => {
                            // console.log(data.data);
                            data.data && dispatch(updateOrdersHistory(data.data?.createdOrder));
                            data.data && dispatch(clearCart());
                            navigate("../successOrderCreate");
                        })
                    }}>
                        Перейти к оплате
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                <CartDetails></CartDetails>
                {/* <div className="order-create__block">
                    <h3>Что в корзине</h3>
                    <CartContents />
                </div> */}
            </div>
        </section>
    )
}