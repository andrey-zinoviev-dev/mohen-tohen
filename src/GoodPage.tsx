import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./GoodPage.css"
import { faArrowRight, faHeart, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from "react-router-dom"
import { ColorInterface, GoodInterface } from "./interfaces";
import { toggleFavourite } from "./features/goodsSlice";
import { add } from "./features/basketSlice"
import { useAppDispatch } from "./hooks";
import GoodColors from "./GoodColors"
import { changeMessage } from "./features/notificationSlice"
import { dimensionTranslations } from "./utils"
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
                    {state.colors && <span className="good__parameters-features-feature">{selectedColor?.title}</span>}
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
                        dispatch(changeMessage(`Товар ${state.title} добавлен в избранное`))
                    }}>
                        <FontAwesomeIcon className="good__text-button-svg" style={{color: clickedFavourite ? "#FF8261" : "#F7F7F7"}} icon={faHeart} />
                    </button>
                </div>
                <span>{state.price}</span>
                <Link to={`/profile/${state.seller.name}`} state={state.seller} preventScrollReset={false}>
                    <img src={state.seller.cover}></img>
                    {state.seller.name}
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <p>Вот тут будет описание товара, история создания, вот тут прям да красивый текст про товар</p>
                {state.dimensions && <ul className="good__text-dimensions">
                    {Object.keys(state.dimensions).map((key) => {
                        const translstedDimension = dimensionTranslations.find((dimension) => {
                            return dimension.title === key;
                        });
                        return <li>
                            <h4>{translstedDimension?.translation}:</h4> 
                            <span>{state.dimensions && state.dimensions[key]}</span>
                        </li>
                    })}
                </ul>
                //  <div className="">
                //     <h4>Размеры</h4>
                //     <span>Ширина: {state.dimensions.width}</span>
                //     <span>Высота: {state.dimensions.height}</span> 
                // </div>
                }
                <h4>Материал- <span className="cvet">{state.material}</span></h4>
                {state.colors && <div className="good__text-colors-div">
                    <h4>Цвет-<span className="cvet">{selectedColor?.title}</span></h4>
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
                    dispatch(changeMessage(`Товар ${state.title} добавлен`));
                    setAddedToBasket(true);
                }}>
                    <span>{!addedToBasket ? "Добавить в корзину" : "Товар добавлен"}</span>
                </button>
            </div>
        </section>
    )
}