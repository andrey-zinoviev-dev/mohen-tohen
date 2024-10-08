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

export default function CreateOrder() {
    //redux

    //state
    const [orderDetails, setOrderDetails] = React.useState<{name: string, phone: string, email: string, address: string, zipcode: string}>({
        name: "",
        phone: "",
        email: "",
        address: "",
        zipcode: "",
        // payment: "",
    });

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
                    <OrderStep headline="Ваши контактные данные" step={1} inputs={recipientInputs} updateState={setOrderDetails}>

                    </OrderStep>
                    <OrderStep headline="Ваш адрес" step={2} inputs={locationInputs} updateState={setOrderDetails}>
                    </OrderStep>

                    {/* <OrderStep headline="Способ оплаты" step={3} inputs={paymentInputs} updateState={setOrderDetails}></OrderStep> */}

                    <button className="order-create__submit-btn" onClick={() => {
                        console.log(orderDetails);
                    }}>
                        Перейти к оплате
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                <div className="order-create__block">
                    <h3>Что в корзине</h3>
                    <CartContents />
                    {/* <Cart /> */}
                </div>
            </div>
        </section>
    )
}