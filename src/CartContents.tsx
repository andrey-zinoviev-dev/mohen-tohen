// import React from "react";
// import { goodPageInt } from "./interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./CartContents.css";
import { useAppDispatch, useAppSelector } from "./hooks";
// import { useUpdateBasketItemMutation, useDeleteBasketItemMutation } from "./features/apiSlice";
// import { updateBasketGoodQuantity, deleteBasketGood } from "./features/userSlice";
import { changeQuantity, remove } from "./features/basketSlice";

export default function CartContents() {
    const cartState = useAppSelector((state) => {
        return state.basket.goods;
    });
    // console.log(cartState);

    // //functions
    // function calculateTotal() {
    //     return cartState.reduce((result, item) => {
    //         result = result + (item.good.price * item.quantity);
    //         return result;
    //     }, 0);
    // }

    //variables
    const subtotal = cartState.reduce((result, item) => {
        result = result + (item.good.price * item.quantity);
        return result;
    }, 0);

    const shipping = 0;

    //dispatch
    const dispatch = useAppDispatch();

    //RTK
    // const [updateBasket] = useUpdateBasketItemMutation();
    // const [deleteItem] = useDeleteBasketItemMutation();

    // React.useEffect(() => {

    // }, [])

    return (
        <>
            <ul className="cart__ul">
                        {/* <li className="cart__ul-li cart__ul-li_first" key="parameters">
                            <span className="cart__ul-li-span">Товар</span>
                            <span>Количество</span>
                            <span>Цена</span>
                        </li> */}
                        {cartState.map((cartGood) => {
                            return <li className="cart__ul-li" 
                            key={cartGood.good._id}>
                                
                                <div className="cart__ul-li-details">
                                    <div className="cart__ul-li-details-params">
                                        <img className="cart__ul-li-img" src={cartGood.good.photos[0].url}></img>
                                        <div className="cart__ul-li-text">
                                            <span className="cart__ul-li-text-title">{cartGood.good.title}</span>
                                            {/* <span className="cart__ul-li-text-refid">Артикул: {cartGood.good._id}</span> */}
                                            <div className="cart__ul-li-text-specs">
                                                <span>{cartGood.good.material && cartGood.good.material}</span>
                                                
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart__ul-li-quantity">
                                        <button className="cart__button" disabled={cartGood.quantity === 1 ? true : false} onClick={() => {
                                            dispatch(changeQuantity({good: cartGood.good, quantity: -1}));
                                            // updateBasket({id: cartGood.good._id, quantity: -1})
                                            // .then((data) => {
                                            //     data.data && dispatch(updateBasketGoodQuantity({ good: data.data.good, quantity: data.data.quantity }))
                                            // })
                                        }}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <span>{cartGood.quantity}</span>
                                        <button className="cart__button" disabled={cartGood.good.batch === cartGood.quantity ? true : false} onClick={() => {
                                            dispatch(changeQuantity({good: cartGood.good, quantity: 1}));

                                            // console.log(cartGood.good.batch === cartGood.quantity)
                                            // updateBasket({id: cartGood.good._id, quantity: 1})
                                            // .then((data) => {
                                            //     data.data && dispatch(updateBasketGoodQuantity({ good: data.data.good, quantity: data.data.quantity }))
                                            // })
                                        
                                        }}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                    <span>{cartGood.good.price}</span>
                                    <button className="cart__ul-li-delete cart__button" onClick={() => {
                                        dispatch(remove(cartGood.good))
                                        
                                        // deleteItem(cartGood.good._id)
                                        // .then((data) => {
                                        //     data.data && dispatch(deleteBasketGood(cartGood.good))
                                        // })
                                        
                                    }}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button>
                                </div>
                            </li>
                        })}
            </ul>
            <span className="cart__subtotal cart__subtotal_small-font">Подытог: <span>{subtotal}р.</span></span>
            <span className="cart__subtotal cart__subtotal_small-font">Доставка: <span>{shipping}р.</span></span>
            <span className="cart__subtotal">Итого: <span>{subtotal + shipping}р.</span></span>
        </>
        
    )
}
