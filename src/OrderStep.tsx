import React from "react";
// import { useAppDispatch, useAppSelector } from "./hooks";
import InputEl from "./InputEl";
import "./OrderStep.css";
import InputRadio from "./InputRadio";
// import { recipientInputs } from "./utils";

export default function OrderStep({ inputs, step, headline, updateState  }: { inputs: {
    name: string;
    placeHolder: string;
    type: string;
    text: string;
    id?: string,
    value?: string,
    icon?: string,
}[], headline: string, step: number, updateState: React.Dispatch<React.SetStateAction<{name: string, phone: string, email: string, address: string, zipcode: string, payment: string}>>}) {

    return (
        <div className="order__form">
            <h3><span>{step}/3</span>{headline}</h3>
            <form className="order__form-form" onSubmit={(evt) => {
                evt.preventDefault();
            }}>
                {/* {children} */}
                {inputs.map((input) => {
                    return input.type === "radio" ?
                    <InputRadio icon={input.icon} text={input.text} updateState={updateState} name={input.name} value={input.value} />
                    : <InputEl key={input.name} name={input.name} placeHolder={input.placeHolder} updateState={updateState} />
                })}
            </form>
        </div>
    )
}