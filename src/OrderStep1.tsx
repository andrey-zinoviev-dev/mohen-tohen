import React from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import InputEl from "./InputEl";
import "./OrderStep.css";

export default function OrderStep1<T>({ updateStatus }: { updateStatus: React.Dispatch<React.SetStateAction<T>> }) {
    // const userState = useAppSelector((state) => {
    //     return state.user;
    // });

    // const orderState = useAppSelector((state) => {
    //     return state.order;
    // });
    // console.log(orderState);

    //dispatch
    const dispatch = useAppDispatch();

    //state
    const [formData, setFormData] = React.useState<T>();

    return (
        <div className="order__form">
            <h3>Ваши контаты</h3>
            <form onSubmit={(evt) => {
                evt.preventDefault();
                // console.log()
                // dispatch(updateFirstData(formData))
                // showResults<{name: string, phone: string | null, email: string}>(formData);
            }}>
                {/* <input onChange={(evt) => {

                }} name="name"></input>
                <input name="phone"></input>
                <input name="email"></input> */}
                <InputEl name="name" placeHolder="Иван Алексеев" updateState={setFormData} />
                <InputEl name="phone" placeHolder="+79031513045" updateState={setFormData} />
                <InputEl name="email" placeHolder="email@example.com" updateState={setFormData} />
                {/* {/* <button>
                    Продолжить
                </button> */}
            </form>
        </div>
    )
}