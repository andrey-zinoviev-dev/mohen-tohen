import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./GoodPage.css"
import { faHeart, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { useLocation } from "react-router-dom"
import { ColorInterface, GoodInterface } from "./interfaces";
import { toggleFavourite } from "./features/goodsSlice";
import { add } from "./features/basketSlice"
import { useAppDispatch } from "./hooks";
import GoodColors from "./GoodColors"

export default function GoodPage() {

    const location = useLocation();
    const state = location.state as GoodInterface;
    const dispatch = useAppDispatch();

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
                    <GoodColors updateColor={setSelectedColor} colors={state.colors} />
                </div>
                }
                <div>
                    <button>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <span>1</span>
                    <button>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                </div>
                <button className="butt" onClick={() => {
                    dispatch(add({ ...state, selectedColor: selectedColor, quantity: 1 }));
                    setAddedToBasket(true);
                }}>
                    <span>{!addedToBasket ? "Добавить в корзину" : "Товар добавлен"}</span>
                </button>
            </div>
        </section>
    )
}