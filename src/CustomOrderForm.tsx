import "./CustomOrderForm.css";
import Headline from "./Headline";
import { GoodInterface } from "./interfaces";
import TextareaEl from "./TextareaEl";
export default function CustomOrderForm({ good }: {good: GoodInterface}) {
    return (
        <div className="custom-order">
            <Headline text="Заявка на персональный заказ">
            </Headline>
            <h4>Дизайнер: <span>{good.seller.brandName}</span></h4>
            <h4>Товар: <span>{good.title}</span></h4>
            <form className="custom-order__form" onSubmit={(evt) => {
                evt.preventDefault();
                console.log("send custom order inquiry");
            }}>
                <p>Напишите, пожалуйста, в поле ниже все, что Вы бы хотели указать при заказе перонального товара</p>
                <TextareaEl placeholder="Опишите здесь свою идею, чтобы Вы хотели реализовать в заказе"></TextareaEl>
                <button>Отправить</button>
            </form>
        </div>
    )
}