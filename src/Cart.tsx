import React from "react";
import "./Cart.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "./hooks";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { addOne, editGood, remove, removeOne } from "./features/basketSlice";
import Popup from "./Popup";
import { ColorInterface, GoodInterface } from "./interfaces";
import GoodColors from "./GoodColors";

export default function Cart() {    
    const cartState = useAppSelector((state) => {
        return state.basket.goods;
    });

    const dispatch = useAppDispatch();

    //state
    const [changeColor, setChangeColor] = React.useState<boolean>(false);
    const [selectedGoodName, setSelectedGoodName] = React.useState<string | null>(null);
    const [newColor, setNewColor] = React.useState<ColorInterface | undefined>(undefined);

    //derived state
    const selectedGood:GoodInterface | undefined = cartState.find((good) => {
        return good.title === selectedGoodName;
    });

    //functions
    function closePopup() {
        setChangeColor(false);
        setSelectedGoodName(null);
        setNewColor(undefined);
    }

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
                        return <li className="cart__ul-li" key={cartGood.title}>
                            <button className="cart__ul-li-delete" onClick={() => {
                                dispatch(remove(cartGood));
                            }}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                            <div className="cart__ul-li-details">
                                <div className="cart__ul-li-details-params">
                                    <img className="cart__ul-li-img" src={cartGood.cover}></img>
                                    <div className="cart__ul-li-text">
                                        <span className="cart__ul-li-text-author">{cartGood.seller.name}</span>
                                        <span className="cart__ul-li-text-title">{cartGood.title}</span>
                                        <span className="cart__ul-li-text-refid">Артикул: 12//mongoXYFLS//21</span>
                                        <div className="cart__ul-li-text-specs">
                                            <span>{cartGood.material && cartGood.material}</span>
                                            {cartGood.selectedColor && <div className="cart__ul-li-text-specs-colors">
                                                <span className="cart__ul-li-text-specs-colors-title">{cartGood.selectedColor?.title}</span>
                                                <button onClick={() => {
                                                    setChangeColor(true);
                                                    setSelectedGoodName(cartGood.title);
                                                }} className="cart__ul-li-text-specs-colors-thumbnail" style={{backgroundColor: cartGood.selectedColor?.colorCode}}></button>
                                            </div>}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => {
                                        dispatch(addOne(cartGood))
                                    }}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                    <span>{cartGood.quantity}</span>
                                    <button onClick={() => {
                                        dispatch(removeOne(cartGood))
                                    }}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                </div>
                                <span>{cartGood.price}</span>
                            </div>
                        </li>
                    })}
                </ul>
                :
                <p>Ваша корзина пуста, но ее можно наполнить</p>
                }
            </section>
            {changeColor && <Popup setClose={closePopup}>
                <h3>Редактировать товар в корзине</h3>
                <h3>{selectedGood?.title}</h3>
                {selectedGood?.colors && 
                <>
                    <h5>Цвет- <span>{selectedGood.selectedColor?.title}</span></h5>
                    <GoodColors colors={selectedGood.colors}></GoodColors>
                    {/* <ul>
                        {selectedGood.colors && selectedGood.colors.map((color) => {
                            return <li>
                                <button onClick={() => {
                                    setNewColor(color);
                                }} style={{backgroundColor: color.colorCode}}></button>
                            </li>
                        })}
                    </ul> */}
                    <button onClick={() => {
                        dispatch(editGood({...selectedGood, selectedColor: newColor}));
                        closePopup();
                    }}>Обновить {selectedGood.title}</button>
                </>}
            </Popup>}
        </>
    )
}