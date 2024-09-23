import React from "react";
// import { useAppDispatch, useAppSelector } from "./hooks";
import InputEl from "./InputEl";
import "./OrderStep.css";
// import { recipientInputs } from "./utils";

export default function OrderStep({ inputs, step, headline, updateState  }: { inputs: {name: string, placeHolder: string}[], headline: string, step: number, updateState: React.Dispatch<React.SetStateAction<{name: string, phone: string, email: string, address: string, zipcode: string}>>}) {
    // const userState = useAppSelector((state) => {
    //     return state.user;
    // });

    // const orderState = useAppSelector((state) => {
    //     return state.order;
    // });
    // console.log(orderState);

    //dispatch
    // const dispatch = useAppDispatch()

    //state
    // const [formData, setFormData] = React.useState<T>();

    return (
        <div className="order__form">
            <h3><span>0{step}</span>{headline}</h3>
            <form className="order__form-form" onSubmit={(evt) => {
                evt.preventDefault();
                // formData && showDetails(formData)
                // dispatch(updateFirstData(formData))
                // showResults<{name: string, phone: string | null, email: string}>(formData);
            }}>
                {/* {children} */}
                {inputs.map((input) => {
                    return <InputEl key={input.name} name={input.name} placeHolder={input.placeHolder} updateState={updateState} />
                })}
                {/* <input onChange={(evt) => {

                }} name="name"></input>
                <input name="phone"></input>
                <input name="email"></input> */}
                {/* <InputEl name="name" placeHolder="Иван Алексеев" updateState={setFormData} />
                <InputEl name="phone" placeHolder="+79031513045" updateState={setFormData} />
                <InputEl name="email" placeHolder="email@example.com" updateState={setFormData} /> */}
                {/* <button>
                    Продолжить
                </button>  */}
            </form>
        </div>
    )
}