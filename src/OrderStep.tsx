import React from "react";
// import { useAppDispatch, useAppSelector } from "./hooks";
import InputEl from "./InputEl";
import "./OrderStep.css";
// import { recipientInputs } from "./utils";

export default function OrderStep({ inputs, step, headline, updateState  }: { inputs: {name: string, placeHolder: string}[], headline: string, step: number, updateState: React.Dispatch<React.SetStateAction<{name: string, phone: string, email: string, address: string, zipcode: string}>>}) {

    return (
        <div className="order__form">
            <h3><span>0{step}</span>{headline}</h3>
            <form className="order__form-form" onSubmit={(evt) => {
                evt.preventDefault();
            }}>
                {/* {children} */}
                {inputs.map((input) => {
                    return <InputEl key={input.name} name={input.name} placeHolder={input.placeHolder} updateState={updateState} />
                })}
            </form>
        </div>
    )
}