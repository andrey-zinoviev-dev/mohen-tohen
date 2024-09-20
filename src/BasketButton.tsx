import { usePostGoodToBasketMutation } from "./features/apiSlice";
import { GoodInterface } from "./interfaces";
import { useAppDispatch, useAppSelector } from "./hooks";
import { addRemoveToBasket } from "./features/userSlice";
import { changeMessage } from "./features/notificationSlice";
import "./BasketButton.css";

//interface
interface goodPageInt extends GoodInterface {
    quantity: number,
}

export default function BasketButton({ good }: {good: goodPageInt}) {
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
            // console.log(good);
            updateBasket({good: good})
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