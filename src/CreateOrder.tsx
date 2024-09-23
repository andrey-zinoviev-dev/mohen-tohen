import React from "react"
import OrderStep from "./OrderStep";

import "./CreateOrder.css"
import { locationInputs, recipientInputs } from "./utils";
import heading from "./assets/mh-1.png"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Cart from "./Cart";

export default function CreateOrder() {
    //state
    const [orderDetails, setOrderDetails] = React.useState<{name: string, phone: string, email: string, address: string, zipcode: string}>({
        name: "",
        phone: "",
        email: "",
        address: "",
        zipcode: "",
    });

    //navigate
    const navigate = useNavigate();

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
            <div className="order-create">
                <button onClick={() => {
                    navigate(-1);
                }}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <div className="order-create__block">
                    <OrderStep headline="Ваши контактные данные" step={1} inputs={recipientInputs} updateState={setOrderDetails}>

                    </OrderStep>
                    <OrderStep headline="Ваш адрес" step={2} inputs={locationInputs} updateState={setOrderDetails}>

                    </OrderStep>

                    <button className="order-create__submit-btn" onClick={() => {
                        console.log(orderDetails);
                    }}>
                        Перейти к оплате
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                <div className="order-create__block">
                    <span>Ваш заказ</span>
                {/* <Cart /> */}
                </div>
            </div>
        </section>
    )
}