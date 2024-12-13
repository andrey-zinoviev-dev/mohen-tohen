import { useState } from "react";
import "./CustomOrderForm.css";
import Headline from "./Headline";
import { GoodInterface } from "./interfaces";
import ListGrid from "./ListGrid";
import TextareaEl from "./TextareaEl";
export default function CustomOrderForm({ good }: {good: GoodInterface}) {
    //states
    const [orderDetails, setOrderDetails] = useState<{details: string}>({details: ""});

    return (
        <div className="custom-order">
            <Headline text="Заявка на персональную услугу">
            </Headline>
            <h4>Дизайнер: <span>{good.seller.brandName}</span></h4>
            <h4>Товар: <span>{good.title}</span></h4>
            <form className="custom-order__form" onSubmit={(evt) => {
                evt.preventDefault();
                console.log("send custom order inquiry");
                console.log(orderDetails);
            }}>
                <p>Напишите, пожалуйста, в поле ниже все, что Вы бы хотели указать при заказе перональной услуги</p>
                <TextareaEl updateValue={setOrderDetails} placeholder="Опишите здесь свою идею, чтобы Вы хотели реализовать в заказе"></TextareaEl>
                <p>Ниже прикрепите примеры того, что хотели бы получить</p>
                <ListGrid oldPics={[]} gridElements={[]} openInput={() => {}} removeOldPhoto={() => {}} removePhoto={() => {}}></ListGrid>
                <button className="custom-order__form-button">Отправить</button>
            </form>
        </div>
    )
}