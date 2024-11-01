// import { usePostGoodToBasketMutation } from "./features/apiSlice";
import { GoodInterface } from "./interfaces";
import { useAppDispatch, useAppSelector } from "./hooks";
// import { addRemoveToBasket } from "./features/userSlice";
// import { changeMessage } from "./features/notificationSlice";
import "./BasketButton.css";
import { add, remove } from "./features/basketSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { changeMessage } from "./features/notificationSlice";

//interface
interface goodPageInt {
    good: GoodInterface,
    quantity: number,
}

export default function BasketButton({ good, quantity }: goodPageInt) {
    // const [updateBasket] = usePostGoodToBasketMutation();

    //redux
    const userBasketState = useAppSelector((state) => {
        return state.basket.goods;
        // return state.user.basket;
    });

    //dispatch
    const dispatch = useAppDispatch();

    //variables
    const goodInBasket = userBasketState.find((basketGood) => {
        return basketGood.good._id === good._id;
    })

    return (
        <button className={goodInBasket ? "basket-button_clicked basket-button" : "basket-button"} onClick={(evt) => {
            evt.stopPropagation();
            !goodInBasket ? dispatch(add({good: good, quantity: quantity})) : dispatch(remove(good));
            dispatch(changeMessage({message: goodInBasket ? "Товар убран из корзины" : "Товар добавлен в корзину"}))

            // localStorage.setItem("cart"m)
            // console.log(good);
            // updateBasket({good: good, quantity: quantity})
            // .then(() => {
            //     dispatch(addRemoveToBasket({ good: good, quantity: quantity }));
            //     dispatch(changeMessage({message: goodInBasket ? "Товар убран из корзины" : "Товар добавлен в корзину"}))
            // })
        }}>
            {goodInBasket ? 
                <>
                    Уже в корзине
                    <FontAwesomeIcon icon={faShoppingBag} />
                </> 
                : 
                <>
                    {good.price}р.
                    <FontAwesomeIcon icon={faShoppingBag} />
                </>
            }
            {/* <FontAwesomeIcon icon={goodInBasket ? faCheckCircle : faShoppingBag} /> */}
        </button>
    )
}