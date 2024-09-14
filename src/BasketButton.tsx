import { faCheckCircle, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePostGoodToBasketMutation } from "./features/apiSlice";
import { GoodInterface } from "./interfaces";
import { useAppDispatch, useAppSelector } from "./hooks";
import { addRemoveToBasket } from "./features/userSlice";

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
        <button onClick={(evt) => {
            evt.stopPropagation();
            updateBasket(good._id)
            .then(() => {
                dispatch(addRemoveToBasket(good));
            })
        }}>
            <FontAwesomeIcon icon={goodInBasket ? faCheckCircle : faShoppingBag} />
        </button>
    )
}