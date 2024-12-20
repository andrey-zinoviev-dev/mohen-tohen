// import React from "react";
import "./Cart.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useAppSelector } from "./hooks";
// import { faMinus, faPen, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
// import { addOne, editGood, remove, removeOne } from "./features/basketSlice";
// import Popup from "./Popup";
// import { ColorInterface, GoodInterface } from "./interfaces";
// import GoodColors from "./GoodColors";
// import { openPopup } from "./features/popupSlice";
// import { deleteBasketGood, updateBasketGoodQuantity } from "./features/userSlice";
// import { useDeleteBasketItemMutation, useUpdateBasketItemMutation } from "./features/apiSlice";
// import { Link } from "react-router-dom";
import CartContents from "./CartContents";
// import { useState } from "react";
// import { createPortal } from "react-dom";
// import PortalComp from "./PortalComp";
// import Login from "./Login";
// import Headline from "./Headline";
import CartDetails from "./CartDetails";
// interface goodPageInt extends GoodInterface {
//     quantity: number,
// }

export default function Cart() {    
    // console.log(userState);

    // console.log(cartState);


    //state
    // const [changeSpec, setChangeSpec] = React.useState<boolean>(false);
    // const [selectedGoodName, setSelectedGoodName] = React.useState<string | null>(null);
    // const [newColor, setNewColor] = React.useState<ColorInterface | undefined>(undefined);

    //derived state
    // const selectedGood:GoodInterface | undefined = cartState.find((good) => {
    //     return good.title === selectedGoodName;
    // });

    //functions
    // function closePopup() {
    //     // setChangeSpec(false);
    //     // setChangeColor(false);
    //     // setSelectedGoodName(null);
    //     // setNewColor(undefined);
    // }

    return (
        <>
            <section className="cart">
                <h3>корзина</h3>
                {/* {cartState.length > 0 ? <> */}
                    {/* <li className="cart__ul-li cart__ul-li_first" key="parameters">
                        <span className="cart__ul-li-span">Товар</span>
                        <span>Количество</span>
                        <span>Цена</span>
                    </li> */}
                    <div className="cart__wrapper">
                        <CartContents />
                        <CartDetails></CartDetails>
                    </div>
                    {/* <ul className="cart__ul">
                    <li className="cart__ul-li cart__ul-li_first" key="parameters">
                        <span className="cart__ul-li-span">Товар</span>
                        <span>Количество</span>
                        <span>Цена</span>
                    </li>
                    {cartState.map((cartGood) => {
                        return <li className="cart__ul-li" 
                        key={cartGood.good._id}>
                            <button className="cart__ul-li-delete cart__button" onClick={() => {
                                deleteItem(cartGood.good._id)
                                .then((data) => {
                                    data.data && dispatch(deleteBasketGood(cartGood.good))
                                })
                                
                            }}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                            <div className="cart__ul-li-details">
                                <div className="cart__ul-li-details-params">
                                    <img className="cart__ul-li-img" src={cartGood.good.cover}></img>
                                    <div className="cart__ul-li-text">
                                        <span className="cart__ul-li-text-title">{cartGood.good.title}</span>
                                        <span className="cart__ul-li-text-refid">Артикул: {cartGood.good._id}</span>
                                        <div className="cart__ul-li-text-specs">
                                            <span>{cartGood.good.material && cartGood.good.material}</span>
                                            
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="cart__ul-li-quantity">
                                    <button className="cart__button" onClick={() => {
                                        updateBasket({id: cartGood.good._id, quantity: -1})
                                        .then((data) => {

                                            data.data && dispatch(updateBasketGoodQuantity({ good: data.data.good, quantity: data.data.quantity }))
                                        })
                                    }}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <span>{cartGood.quantity}</span>
                                    <button className="cart__button" onClick={() => {
                                        updateBasket({id: cartGood.good._id, quantity: 1})
                                        .then((data) => {
                                            data.data && dispatch(updateBasketGoodQuantity({ good: data.data.good, quantity: data.data.quantity }))
                                        })
                                       
                                    }}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                                <span>{cartGood.good.price}</span>
                            </div>
                        </li>
                    })}
                </ul> */}
                {/* <div>
                    <span>Предварительный итог: {calculateTotal()}</span>
                    
                </div> */}



                {/* </>
                :
                <p>Ваша корзина пуста, но ее можно наполнить</p>
                } */}
            </section>
        </>
    )
}