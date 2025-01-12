import { BasketGoodInterface } from "./interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "./hooks";
// import { changeQuantity } from "./features/basketSlice";
// import { useState } from "react";
// import { createPortal } from "react-dom";
// import PortalComp from "./PortalComp";
// import DeletePopup from "./DeletePopup";
import { changeQuantity, remove } from "./features/basketSlice";
// import PortalCentered from "./PortalCentered";
import "./CartItem.css";
import QuantityButton from "./QuantityButton";
import ColorOption from "./ColorOption";
export default function CartItem({good, selectedColor, selectedDimension, selectedMaterial, quantity}: BasketGoodInterface) {
    //dispatch
    const dispatch = useAppDispatch();

    //state
    // const [openDelete, setOpenDelete] = useState<boolean>(false);
    // const [itemQuantity, setItemQuantity] = useState<number>(item.quantity);

    //functions
    function deleteItem() {
        dispatch(remove({good, selectedColor, selectedDimension, selectedMaterial, quantity}))
    }

    function minusOne() {
        dispatch(changeQuantity({good: {good, selectedColor, selectedDimension, selectedMaterial, quantity}, plus: false}))
    }

    function plusOne() {
        dispatch(changeQuantity({good: {good, selectedColor, selectedDimension, selectedMaterial, quantity}, plus: true}))
    }

    return (
        <div className="cart__ul-item">
            <img className="cart-item__cover" src={good.photos[0]}></img>
            <div className="cart-item__wrapper">
                <div className="cart-item__params">
                    <span>{good.title}</span>
                    <div className="cart-item__wrapper-details">
                        <span>{selectedMaterial.option}</span>
                        <span>{selectedDimension.option}</span>

                        <ColorOption active={true} color={selectedColor.option}></ColorOption>
                    </div>
                    <div className="cart-item__wrapper-buttons">
                        <QuantityButton minus={true} updateQuantity={minusOne} numberInBasket={quantity} stock={good.batch}></QuantityButton>
                        <span>{quantity}</span>
                        <QuantityButton minus={false} updateQuantity={plusOne} numberInBasket={quantity} stock={good.batch}></QuantityButton>
                    </div>
                </div>
                <span className="cart-item__price">{good.price}&#8381;</span>
            </div>
            <button onClick={deleteItem} className="cart-item__delete">
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
    // <div className="cart__ul-li-details">
    //   <div className="cart__ul-li-details-params">
    //                                     <img className="cart__ul-li-img" src={item.good.photos[0].url}></img>
    //                                     <div className="cart__ul-li-text">
    //                                         <span className="cart__ul-li-text-title">{item.good.title}</span>
    //                                         <div className="cart__ul-li-text-specs">
    //                                             <span>{item.good.material && item.good.material}</span>
                                                
                                            
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                                 <div className="cart__ul-li-quantity">
    //                                     <button className="cart__button" disabled={item.quantity === 1 ? true : false} onClick={() => {
    //                                         dispatch(changeQuantity({good: item.good, quantity: -1}));
    //                                     }}>
    //                                         <FontAwesomeIcon icon={faMinus} />
    //                                     </button>
    //                                     <span>{item.quantity}</span>
    //                                     <button className="cart__button" disabled={item.good.batch === item.quantity ? true : false} onClick={() => {
    //                                         dispatch(changeQuantity({good: item.good, quantity: 1}));
    //                                     }}>
    //                                         <FontAwesomeIcon icon={faPlus} />
    //                                     </button>
    //                                 </div>
    //                                 <span>{item.good.price}</span>
    //                                 <button className="cart__ul-li-delete cart__button" onClick={() => {
    //                                     setOpenDelete(true);
    //                                 }}>
    //                                     <FontAwesomeIcon icon={faXmark} />
    //                                 </button>
    //     {openDelete && createPortal(<PortalComp>
    //         <PortalCentered>
    //             <DeletePopup submitDelete={deleteItem} closeDelete={setOpenDelete}></DeletePopup>
    //         </PortalCentered>
    //     </PortalComp>, document.body)}
    // </div>
    )
}