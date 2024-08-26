import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./GoodPage.css"
import { faArrowRight, faCheckCircle, faHeart, faMinus, faPlus, faShareNodes, faTruckRampBox } from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from "react-router-dom"
import { ColorInterface, GoodInterface } from "./interfaces";
// import { toggleFavourite } from "./features/goodsSlice";
import { addRemoveToFavUser, addRemoveToBasket } from "./features/userSlice"
// import { add, remove } from "./features/basketSlice"
import { useAppDispatch, useAppSelector } from "./hooks";
import GoodColors from "./GoodColors"
import { changeMessage } from "./features/notificationSlice"
import Terms from "./Terms"

import { usePostGoodToBasketMutation, usePostGoodToFavouriteMutation } from "./features/apiSlice";


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

    const [postGoodToBasket, { isLoading }] = usePostGoodToBasketMutation();
    const [postGoodToFavourites] = usePostGoodToFavouriteMutation();

    const userState = useAppSelector((state) => {
        return state.user;
    });

    //derived state
    const goodInFavourites = userState.favourites && userState.favourites.find((favGood) => {
        return favGood.title === state.title;
    });
    
    const goodInBasket = userState.basket && userState.basket.find((basketGood) => {
        return basketGood.title === state.title;
    });

    // console.log(userStateFavs, );

    // console.log(state);

    // console.log(goodInFavourites, goodInBasket);

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
                        userState._id && postGoodToBasket({good: {...state, selectedColor: selectedColor, quantity: 1}, userId: userState._id})
                        .then((data) => {
                            console.log(data);
                            // !goodInBasket ? dispatch(addRemoveToBasket({ ...state, selectedColor: selectedColor, quantity: 1 }))
                            // :
                            // dispatch(addRemoveToBasket(state));
                        
                            // dispatch(changeMessage({message: goodInBasket ? `Товар ${state.title} убран из корзины` : `Товар ${state.title} добавлен в корзину`}))
                        })
                        // !goodInBasket ? dispatch(addRemoveToBasket({ ...state, selectedColor: selectedColor, quantity: 1 }))
                        // :
                        // dispatch(addRemoveToBasket(state));
                     
                        // dispatch(changeMessage({message: goodInBasket ? `Товар ${state.title} убран из корзины` : `Товар ${state.title} добавлен в корзину`}))

                    }}>
                        <span>{!goodInBasket ? "Добавить в корзину" : "Товар добавлен"}</span>
                    </button>
                    <button className="good__text-button" onClick={() => {
                        dispatch(addRemoveToFavUser(state));

                        // dispatch(toggleFavourite(state));
                        // setClickedFavourite((prevValue) => {
                        //     return !prevValue;
                        // })

                        dispatch(changeMessage({message: goodInFavourites ? `Товар ${state.title} убран из избранных` : `Товар ${state.title} добавлен в избранное`}))

                        // dispatch(changeMessage(`Товар ${state.title} добавлен в избранное`))
                    }}>
                        <FontAwesomeIcon className="good__text-button-svg" icon={faHeart} style={{color: goodInFavourites ? "#FF8261" : "#F7F7F7"}}/>
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faShareNodes} />
                    </button>
                </div>

                <Terms></Terms>
            </div>
        </section>
    )
}