import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./GoodPage.css"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { useLocation } from "react-router-dom"
import { ColorInterface, GoodInterface } from "./interfaces";
import { toggleFavourite } from "./features/goodsSlice";
import { add } from "./features/basketSlice"
import { useAppDispatch } from "./hooks";

export default function GoodPage() {
    const location = useLocation();
    const state = location.state as GoodInterface;
    const dispatch = useAppDispatch();
    // const basketState = useAppSelector((state) => {
    //     return state.basket.goods;
    // });

    //derived state
    // const goodInBasket = basketState.find((good) => {
    //     return good.title === state.title;
    // });

    // console.log(goodInBasket);
    

    //local state
    const [clickedFavourite, setClickedFavourite] = React.useState<boolean>(false);
    const [addedToBasket, setAddedToBasket] = React.useState<boolean>(false);
    const [selectedColor, setSelectedColor] = React.useState<undefined | ColorInterface>(state.colors && state.colors[0]);

    return (
        <section className="good">
            <div className="good__parameters">
                <img className="img" src={state.cover}></img>
                <div className="good__parameters-features">
                    <span className="good__parameters-features-feature">{state.material}</span>
                </div>
            </div>
            <div className="good__text">
                <div className="line1"> 
                    <h3>{state.title}</h3>
                    <button className="good__text-button" onClick={() => {
                        dispatch(toggleFavourite(state));
                        setClickedFavourite((prevValue) => {
                            return !prevValue;
                        })
                    }}>
                        <FontAwesomeIcon className="good__text-button-svg" style={{color: clickedFavourite ? "#FF8261" : "#F7F7F7"}} icon={faHeart} />
                    </button>
                </div>
                <span>{state.price}</span>
                <span>{state.seller.name}</span>
                <h5>Материал- <span className="cvet">{state.material}</span></h5>
                {state.colors && <div>
                    <h5>Цвет-<span className="cvet">{selectedColor?.title}</span></h5>
                    <ul className="good__colors">
                        {state.colors.map((color) => {
                            
                            return <li className={`good__colors-li ${selectedColor?.title === color.title && 'good__colors-li_active'}`}>
                                <button onClick={() => {
                                    setSelectedColor(color);
                                }} style={{backgroundColor: color.colorCode}}>

                                </button>
                            </li>
                        })}
                    </ul>
                </div>
                }
                <button className="butt" onClick={() => {
                    dispatch(add(state));
                    setAddedToBasket(true);
                }}>
                    <span>{!addedToBasket ? "Добавить в корзину" : "Товар добавлен"}</span>
                </button>
            </div>
        </section>
    )
}