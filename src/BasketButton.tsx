import { usePostGoodToBasketMutation } from "./features/apiSlice";
import { GoodInterface } from "./interfaces";
import { useAppDispatch, useAppSelector } from "./hooks";
import { addRemoveToBasket } from "./features/userSlice";
import { changeMessage } from "./features/notificationSlice";
import "./BasketButton.css";

export default function BasketButton({ good }: {good: GoodInterface}) {
    const [updateBasket] = usePostGoodToBasketMutation();

    //redux
    const userBasketState = useAppSelector((state) => {
        return state.user.basket;
    });

    //dispatch
    const dispatch = useAppDispatch();

    //variables
    const goodInBasket = userBasketState.find((basketGood) => {
        return basketGood._id === good._id;
    })

    return (
        <button className="basket-button" onClick={(evt) => {
            evt.stopPropagation();
            updateBasket(good._id)
            .then(() => {
                dispatch(addRemoveToBasket(good));
                dispatch(changeMessage({message: goodInBasket ? "Товар убран из корзины" : "Товар добавлен в корзину"}))
            })
        }}>
            {goodInBasket ? "Уже в корзине" : "Добавить в корзину"}
            {/* <FontAwesomeIcon icon={goodInBasket ? faCheckCircle : faShoppingBag} /> */}
        </button>
    )
}