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
    return (
        <>
            <section className="cart">
                <h3>корзина</h3>
                <div className="cart__wrapper">
                    <CartContents />
                    <CartDetails></CartDetails>
                </div>
            </section>
        </>
    )
}