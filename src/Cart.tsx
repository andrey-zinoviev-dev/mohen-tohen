import React from "react";
import "./Cart.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "./hooks";
import { faMinus, faPen, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { addOne, editGood, remove, removeOne } from "./features/basketSlice";
import Popup from "./Popup";
import { ColorInterface, GoodInterface } from "./interfaces";
import GoodColors from "./GoodColors";
import { openPopup } from "./features/popupSlice";

// interface goodPageInt extends GoodInterface {
//     quantity: number,
// }

export default function Cart() {    
    const cartState = useAppSelector((state) => {
        return state.user.basket;
    });

    console.log(cartState);

    // const dispatch = useAppDispatch();

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
                {cartState.length > 0 ? <ul className="cart__ul">
                    <li className="cart__ul-li cart__ul-li_first" key="parameters">
                        <span className="cart__ul-li-span">Товар</span>
                        <span>Количество</span>
                        <span>Цена</span>
                    </li>
                    {cartState.map((cartGood) => {
                        return <li className="cart__ul-li" 
                        key={cartGood.good._id}>
                            <button className="cart__ul-li-delete cart__button" onClick={() => {
                                // dispatch(remove(cartGood));
                            }}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                            <div className="cart__ul-li-details">
                                <div className="cart__ul-li-details-params">
                                    <img className="cart__ul-li-img" src={cartGood.good.cover}></img>
                                    <div className="cart__ul-li-text">
                                        {/* <span className="cart__ul-li-text-author">{cartGood.good.seller.name}</span> */}
                                        <span className="cart__ul-li-text-title">{cartGood.good.title}</span>
                                        <span className="cart__ul-li-text-refid">Артикул: {cartGood.good._id}</span>
                                        <div className="cart__ul-li-text-specs">
                                            <span>{cartGood.good.material && cartGood.good.material}</span>
                                            {/* {cartGood.selectedColor && <div className="cart__ul-li-text-specs-colors">
                                                <span>{cartGood.selectedColor?.title}</span>
                                                <div className="cart__ul-li-text-specs-colors-thumbnail" style={{backgroundColor: cartGood.selectedColor?.colorCode}}></div>
                                            </div>} */}
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="cart__ul-li-quantity">
                                    <button className="cart__button" onClick={() => {
                                        // dispatch(addOne(cartGood))
                                    }}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                    <span>{cartGood.quantity}</span>
                                    <button className="cart__button" onClick={() => {
                                        // dispatch(removeOne(cartGood))
                                    }}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                </div>
                                <span>{cartGood.good.price}</span>
                            </div>
                        </li>
                    })}
                </ul>
                :
                <p>Ваша корзина пуста, но ее можно наполнить</p>
                }
            </section>
            
            {/* {changeSpec && <Popup setClose={closePopup}> */}
                {/* <h3>Редактировать товар в корзине</h3> */}
                {/* <h3>{selectedGood?.title}</h3>
                {selectedGood?.colors && 
                <>
                    <h5>Цвет- <span>{selectedGood.selectedColor?.title}</span></h5>
                    <GoodColors updateColor={setNewColor} colors={selectedGood.colors}></GoodColors>
                    <button onClick={() => {
                        dispatch(editGood({...selectedGood, selectedColor: newColor}));
                        closePopup();
                    }}>Обновить {selectedGood.title}</button>
                </>} */}
            {/* </Popup>} */}
        </>
    )
}