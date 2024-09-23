import React from "react"
import OrderStep1 from "./OrderStep1";
import { useAppSelector } from "./hooks";
import OrderStep2 from "./OrderStep2";
import OrderStep3 from "./OrderStep3";
import "./CreateOrder.css"

export default function CreateOrder() {
    //redux
    const cartState = useAppSelector((state) => {
        return state.user.basket;
    });

    //state
    const [orderDetails, setOrderDetails] = React.useState<{client: {name: string, phone: string, email: string}, address: {address: string, zipcode: string}, payment: string}>({
        client: {
            name: "",
            phone: "",
            email: "",
        },
        address: {
            address: "",
            zipcode: ""
        },
        payment: "",
    });

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
    // }
    
    return (
        <section className="order-create">
            <div className="order-create__block">
                <OrderStep1<{name: string, phone: string, email: string}> updateStatus={}></OrderStep1>
                <OrderStep1<{address: string, flat: string}> updateStatus={setOrderDetails}></OrderStep1>
                {/* <OrderStep2<{address: string, flat: string}> updateDetails={setOrderDetails}></OrderStep2> */}
                {/* <OrderStep3 updateDetails={setOrderDetails} /> */}
                <button onClick={() => {
                    console.log(orderDetails);
                }}>
                    Перейти к оплате
                </button>
            </div>
            <div className="order-create__block">
                <span>Ваш заказ</span>
                <ul>
                    {cartState.map((cartGood) => {
                        return <li key={cartGood.good._id}>
                            <img src={cartGood.good.cover}></img>
                            <span>{cartGood.good.title}</span>
                            <span>{cartGood.quantity}</span>
                        </li>
                    })}
                </ul>
                {/* <p>{orderState.}</p> */}
            </div>
            {/* {renderStep()} */}
        </section>
    )
}