import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./GoodPage.css"
import { faArrowRight, faCheckCircle, faHeart, faMinus, faPlus, faTruckRampBox } from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from "react-router-dom"
import { ColorInterface, GoodInterface } from "./interfaces";
import { toggleFavourite } from "./features/goodsSlice";
import { add } from "./features/basketSlice"
import { useAppDispatch } from "./hooks";
import GoodColors from "./GoodColors"
import { changeMessage } from "./features/notificationSlice"
import Terms from "./Terms"

export default function GoodPage() {

    const location = useLocation();
    const state = location.state as GoodInterface;
    const dispatch = useAppDispatch();
    // console.log(state.dimensions);
    //local state
    // const [good, setGood] = React.useState<GoodInterface | undefined>(state);
    const [clickedFavourite, setClickedFavourite] = React.useState<boolean>(false);
    const [addedToBasket, setAddedToBasket] = React.useState<boolean>(false);
    const [selectedColor, setSelectedColor] = React.useState<undefined | ColorInterface>(state.colors && state.colors[0]);
    const [quantity, setQuantity] = React.useState<number>(1);

    return (
        <section className="good">
            <div className="good__parameters">
                <img className="img" src={state.cover}></img>
                <div className="good__parameters-features">
                    <span className="good__parameters-features-feature">{state.material}</span>
                    {state.colors && <span className="good__parameters-features-feature">{selectedColor?.title}</span>}
                    {state.dimensions && <span className="good__parameters-features-feature">
                        {state.candle ? `${state.dimensions && state.dimensions.volume}мл` : `${state.dimensions && state.dimensions.width}x${state.dimensions && state.dimensions.height}x${state.dimensions && state.dimensions.depth}см`}
                    </span>}
                </div>
            </div>
            <div className="good__text">
                <div className="line1"> 
                    <h3>{state.title}</h3>
                    {/* <button className="good__text-button" onClick={() => {
                        dispatch(toggleFavourite(state));
                        setClickedFavourite((prevValue) => {
                            return !prevValue;
                        })
                        dispatch(changeMessage(`Товар ${state.title} добавлен в избранное`))
                    }}>
                        <FontAwesomeIcon className="good__text-button-svg" style={{color: clickedFavourite ? "#FF8261" : "#F7F7F7"}} icon={faHeart} />
                    </button> */}
                </div>
                <h4>Цена: <span className="cvet">{state.price}</span></h4>
                <Link to={`/brands/${state.seller.name}`} state={state.seller} preventScrollReset={false}>
                    <img src={state.seller.cover}></img>
                    <div className="good__text-a-name">
                        <span>{state.seller.name}</span>
                        <div></div>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <p>Вот тут будет описание товара, история создания, вот тут прям да красивый текст про товар</p>
                <div className="good__text-delivery">
                    <FontAwesomeIcon icon={state.stock > 0 ? faCheckCircle : faTruckRampBox} />
                    <span>{!state.madeToOrder ? `В наличии ${state.stock}` : "Товар делается под заказ и будет доставлен в течение 2-5 дней после производства"}</span>
                </div>
                {state.candle ? <h4>Объем: <span className="cvet">{state.dimensions && state.dimensions.volume}мл</span></h4>
                :
                <h4>Размеры: <span className="cvet">{`${state.dimensions && state.dimensions.width}x${state.dimensions && state.dimensions.height}x${state.dimensions && state.dimensions.depth}см`}</span></h4>
                }

                <h4>Материал: <span className="cvet">{state.material}</span></h4>
                {state.colors && <div className="good__text-colors-div">
                    <h4>Цвет: <span className="cvet">{selectedColor?.title}</span></h4>
                    <GoodColors updateColor={setSelectedColor} colors={state.colors} />
                </div>
                }
                <div className="good__text-quantity">
                    <button onClick={() => {
                        setQuantity((prevValue) => {
                            return prevValue + 1;
                        })
                    }}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <span>{quantity}</span>
                    <button disabled={quantity < 2 ? true : false} onClick={() => {
                        setQuantity((prevValue) => {
                            return prevValue - 1;
                        })
                    }}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                </div>
                <div className="good__text-buttons">
                    <button className="butt" onClick={() => {
                        dispatch(add({ ...state, selectedColor: selectedColor, quantity: 1 }));
                        // dispatch(changeMessage(`Товар ${state.title} добавлен`));
                        setAddedToBasket(true);
                    }}>
                        <span>{!addedToBasket ? "Добавить в корзину" : "Товар добавлен"}</span>
                    </button>
                    <button className="good__text-button" onClick={() => {
                        dispatch(toggleFavourite(state));
                        setClickedFavourite((prevValue) => {
                            return !prevValue;
                        })
                        // dispatch(changeMessage(`Товар ${state.title} добавлен в избранное`))
                    }}>
                        <FontAwesomeIcon className="good__text-button-svg" icon={faHeart} style={{color: clickedFavourite ? "#FF8261" : "#F7F7F7"}}/>
                    </button>
                </div>

                <Terms></Terms>
                {/* <ul className="good__text-terms">
                    <li key="delivery">
                        <button>
                            <span>Доставка</span>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </li>
                    <li>
                        <button>
                        <span>Эксплуатация</span>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </li>
                </ul> */}
            </div>
        </section>
    )
}