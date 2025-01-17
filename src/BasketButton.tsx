// import { usePostGoodToBasketMutation } from "./features/apiSlice";
import { BasketGoodInterface } from "./interfaces";
import { useAppDispatch, useAppSelector } from "./hooks";
// import { addRemoveToBasket } from "./features/userSlice";
// import { changeMessage } from "./features/notificationSlice";
import "./BasketButton.css";
import { add } from "./features/basketSlice";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { changeMessage } from "./features/notificationSlice";
import { useState } from "react";
import { createPortal } from "react-dom";
import PortalComp from "./PortalComp";
import PortalCentered from "./PortalCentered";
// import CustomOrderForm from "./CustomOrderForm";
import PortalCloseButton from "./PortalCloseButton";
import { useNavigate } from "react-router-dom";

//interface
interface BasketButtonInterface {
    good: BasketGoodInterface,
}

export default function BasketButton({ good }: BasketButtonInterface) {
    //navigate
    const navigate = useNavigate();
    
    //state
    const [openOrderForm, setOpenOrderForm] = useState<boolean>(false);
    // const [goodToAdd, setGoodToAdd]
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
        return basketGood._id === good._id;
        // return basketGood.good._id === good._id;
        // return goodInterface.good._id === basketGood.good.
    });

    return (
        <>
            {/* <button style={{backgroundColor: good.batch === 0 && !good.madeToOrder ? `#C8CCCF` : "#ff9a7f", pointerEvents: good.batch > 0 || good.madeToOrder ? "all" : "none"}} className={goodInBasket ? "basket-button_clicked basket-button" : "basket-button"} onClick={(evt) => { */}
            <button className={goodInBasket ? "basket-button_clicked basket-button" : "basket-button"} onClick={(evt) => {
   
                evt.stopPropagation();
                
                !goodInBasket ? dispatch(add(good)) : navigate("../basket");
                 dispatch(changeMessage({message: "Товар добавлен в корзину"}))

                // if(good.category === "Услуги") {
                //     setOpenOrderForm(true);
                // } else {
                //     !goodInBasket ? dispatch(add({good: good, quantity: quantity, price: price})) : navigate("../basket");
                //     dispatch(changeMessage({message: "Товар добавлен в корзину"}))
                // }

                // if(!good.category !== ) {

                // } else {
                //     setOpenOrderForm(true);
                //     // console.log("open make to order form");
                // }


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
                        Товар в корзине
                        {/* <FontAwesomeIcon icon={faShoppingBag} /> */}
                    </> 
                    : 
                    <>
                        {
                            // good.madeToOrder ? 
                            // <>
                            //     от {price}&#8381;
                            //     <FontAwesomeIcon icon={faShoppingBag} />
                            // </>
                            // : 
                            <>
                                {good.batch > 0 ? <>
                                    <span>Добавить в корзину</span>
                                    {/* {price}&#8381; */}
                                    {/* <FontAwesomeIcon icon={faShoppingBag} /> */}
                                </> : <span>Скоро в наличии</span>}
                            </>
                        }
                        {/* {good.batch ? <>
                            {good.madeToOrder ? `от ${good.price}` : good.price}р.
                            <FontAwesomeIcon icon={faShoppingBag} />
                        </> : "Скоро в наличии"} */}
                    </>
                }
                {/* <FontAwesomeIcon icon={goodInBasket ? faCheckCircle : faShoppingBag} /> */}
            </button>
            {openOrderForm && createPortal(<PortalComp fitContent={true}>
                <PortalCentered>
                    <PortalCloseButton close={setOpenOrderForm} />
                    {/* <CustomOrderForm good={good}></CustomOrderForm> */}

                    {/* <HomeStagingForm closePortal={setOpenOrderForm}></HomeStagingForm> */}
                </PortalCentered>
            </PortalComp>, document.body)}
        </>
    )
}