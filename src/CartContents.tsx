// import React from "react";
// import { goodPageInt } from "./interfaces";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./CartContents.css";
import { useAppSelector } from "./hooks";
// import { useUpdateBasketItemMutation, useDeleteBasketItemMutation } from "./features/apiSlice";
// import { updateBasketGoodQuantity, deleteBasketGood } from "./features/userSlice";
// import { changeQuantity, remove } from "./features/basketSlice";
import CartItem from "./CartItem";
import ListElementGeneric from "./ListElementGeneric";
// import Headline from "./Headline";
// import InputEl from "./InputEl";

export default function CartContents() {
    const cartState = useAppSelector((state) => {
        return state.basket.goods;
    });
    console.log(cartState);

    // //functions
    // function calculateTotal() {
    //     return cartState.reduce((result, item) => {
    //         result = result + (item.good.price * item.quantity);
    //         return result;
    //     }, 0);
    // }

    //variables
    // const subtotal = cartState.reduce((result, item) => {
    //     result = result + (item.good.price * item.quantity);
    //     return result;
    // }, 0);

    // const shipping = 0;

    //dispatch
    // const dispatch = useAppDispatch();

    //RTK
    // const [updateBasket] = useUpdateBasketItemMutation();
    // const [deleteItem] = useDeleteBasketItemMutation();

    // React.useEffect(() => {

    // }, [])

    return (
        <>
            {cartState.length > 0  ? 
                <ListElementGeneric classUl="cart__ul" items={cartState} renderItems={(item) => {
                    return <CartItem item={item}></CartItem>
                }} />
        //    <ul className="cart__ul">
        //         {cartState.map((cartGood) => {
        //             return <li className="cart__ul-li" 
        //                 key={cartGood.good._id}>
        //                     <CartItem item={cartGood}></CartItem>
        //             </li>
        //         })}
        //     </ul>
            :
            <p>Ваша корзина пуста, но ее можно наполнить</p>

            }

            {/* <span className="cart__subtotal cart__subtotal_small-font">Подытог: <span>{subtotal}р.</span></span>
            <span className="cart__subtotal cart__subtotal_small-font">Доставка: <span>{shipping}р.</span></span>
            <span className="cart__subtotal">Итого: <span>{subtotal + shipping}р.</span></span> */}
        </>
        
    )
}
