import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./GoodPage.css"
import { faMinus, faPlus, faArrowRight, 
    // faTruckRampBox 
} from "@fortawesome/free-solid-svg-icons"
import { 
    // Link, 
    // useLocation,
     useParams } from "react-router-dom"
import { 
    // ColorInterface, 
GoodInterface } from "./interfaces";

import { Link } from "react-router-dom"
// import { toggleFavourite } from "./features/goodsSlice";
// import { addRemoveToFavUser, addRemoveToBasket } from "./features/userSlice"
// import { add, remove } from "./features/basketSlice"
// import { useAppDispatch, useAppSelector } from "./hooks";
// import GoodColors from "./GoodColors"
// import { changeMessage } from "./features/notificationSlice"
import Terms from "./Terms"

import { useGetGoodQuery, 
    // usePostGoodToBasketMutation, 
    // usePostGoodToFavouriteMutation 
} from "./features/apiSlice";
import LikeButton from "./LikeButton"
import BasketButton from "./BasketButton"
import ShareButton from "./ShareButton"

export default function GoodPage() {

    const { goodID } = useParams();

    //RTK
    const {
        data: good = {} as GoodInterface
    } = useGetGoodQuery(goodID!);

    // const location = useLocation();
    // const state = location.state as GoodInterface;
    // const dispatch = useAppDispatch();
    // console.log(state.dimensions);
    //local state
    // const [good, setGood] = React.useState<GoodInterface | undefined>(state);
    // const [clickedFavourite, setClickedFavourite] = React.useState<boolean>(false);
    // const [addedToBasket, setAddedToBasket] = React.useState<boolean>(false);
    // const [selectedColor, setSelectedColor] = React.useState<undefined | ColorInterface>(state.colors && state.colors[0]);
    const [quantity, setQuantity] = React.useState<number>(1);
    const [selectedPhoto, setSelectedPhoto] = React.useState<number>(0)

    // const [postGoodToBasket, { isLoading }] = usePostGoodToBasketMutation();
    // const [postGoodToFavourites] = usePostGoodToFavouriteMutation();

    // const userState = useAppSelector((state) => {
    //     return state.user;
    // });

    //derived state
    // const goodInFavourites = userState.favourites && userState.favourites.find((favGood) => {
    //     return favGood.title === state.title;
    // });
    
    // const goodInBasket = userState.basket && userState.basket.find((basketGood) => {
    //     return basketGood.title === state.title;
    // });

    // console.log(userStateFavs, );

    // console.log(state);

    // console.log(goodInFavourites, goodInBasket);

    // React.useEffect(() => {
    //     console.log(good);
    // }, [good])

    return (
        <section className="good">
            <div className="good__parameters">
                <img className="img" src={good.photos && good.photos[selectedPhoto].url}></img>
                <ul className="good__photos">
                    {good.photos && good.photos.map((photo, index) => {
                        return <li key={photo.url}>
                            <button onClick={() => {
                                setSelectedPhoto(index);
                            }}>
                                <img src={photo.url}></img>
                            </button>
                        </li>
                    })}
                </ul>
                <div className="good__parameters-features">
                    <span className="good__parameters-features-feature">{good.material}</span>
                    {/* {state.colors && <span className="good__parameters-features-feature">{selectedColor?.title}</span>} */}
                    {good.dimensions && <span className="good__parameters-features-feature">
                        {good.dimensions}
                        {/* {state.candle ? `${state.dimensions && state.dimensions.volume}мл` : `${state.dimensions && state.dimensions.width}x${state.dimensions && state.dimensions.height}x${state.dimensions && state.dimensions.depth}см`} */}
                    </span>}
                </div>
            </div>
            <div className="good__text">
                <div className="line1"> 
                    <h3>{good.title}</h3>
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
                <h4>Цена: <span className="cvet">{good.price}</span></h4>
                <Link to={`/brands/${good.seller && good.seller._id}`}>
                    <div className="good__text-a-name">
                        <span>{good.seller && good.seller.name}</span>
                        <div></div>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                {/* <Link to={`/brands/${good && good.seller._id}`} preventScrollReset={false}>
                    <div className="good__text-a-name">
                        <span>{good.seller.name && good.seller.name}</span>
                        <div></div>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link> */}
                <p>{good.description}</p>
                {/* <div className="good__text-delivery">
                    <FontAwesomeIcon icon={state.stock > 0 ? faCheckCircle : faTruckRampBox} />
                    <span>{!state.madeToOrder ? `В наличии ${state.stock}` : "Товар делается под заказ и будет доставлен в течение 2-5 дней после производства"}</span>
                </div> */}
                {/* <span>Материал{}</span> */}
                {/* {state.candle ? <h4>Объем: <span className="cvet">{state.dimensions && state.dimensions.volume}мл</span></h4>
                :
                <h4>Размеры: <span className="cvet">{`${state.dimensions && state.dimensions.width}x${state.dimensions && state.dimensions.height}x${state.dimensions && state.dimensions.depth}см`}</span></h4>
                } */}

                <h4>Материал: <span className="cvet">{good.material}</span></h4>
                <h4>Цвет: <span className="cvet">{good.color}</span></h4>
                <h4>Наличие: <span className="cvet">{good.batch}</span></h4>
                {/* {state.colors && <div className="good__text-colors-div">
                    <h4>Цвет: <span className="cvet">{selectedColor?.title}</span></h4>
                    <GoodColors updateColor={setSelectedColor} colors={state.colors} />
                </div>
                } */}
                <div className="good__text-quantity">
                    
                    <button disabled={quantity < 2 ? true : false} onClick={() => {
                        setQuantity((prevValue) => {
                            return prevValue - 1;
                        })
                    }}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span>{quantity}</span>
                    <button disabled={quantity < good.batch ? false : true} onClick={() => {
                        setQuantity((prevValue) => {
                            return prevValue + 1;
                        })
                    }}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div className="good__text-buttons">
                    <BasketButton good={ {good: good, quantity: quantity} } />
                    {/* <button className="butt" onClick={() => {
                        userState._id && postGoodToBasket({good: {...state, selectedColor: selectedColor, quantity: quantity}, userId: userState._id})
                        .then((data) => {
                            console.log(data);
                            // !goodInBasket ? dispatch(addRemoveToBasket({ ...state, selectedColor: selectedColor, quantity: 1 }))
                            // :
                            // dispatch(addRemoveToBasket(state));
                        
                            // dispatch(changeMessage({message: goodInBasket ? `Товар ${state.title} убран из корзины` : `Товар ${state.title} добавлен в корзину`}))
                        })
                        !goodInBasket ? dispatch(addRemoveToBasket({ ...state, selectedColor: selectedColor, quantity: 1 }))
                        :
                        dispatch(addRemoveToBasket(state));
                     
                        dispatch(changeMessage({message: goodInBasket ? `Товар ${state.title} убран из корзины` : `Товар ${state.title} добавлен в корзину`}))

                    }}>
                        Добавить в корзину
                        <span>{!goodInBasket ? "Добавить в корзину" : "Товар добавлен"}</span>
                    </button> */}
                    {/* <button className="good__text-button" onClick={() => {
                        console.log(state, quantity);
                        dispatch(addRemoveToFavUser(state));

                        dispatch(toggleFavourite(state));
                        setClickedFavourite((prevValue) => {
                            return !prevValue;
                        })

                        dispatch(changeMessage({message: goodInFavourites ? `Товар ${state.title} убран из избранных` : `Товар ${state.title} добавлен в избранное`}))

                        dispatch(changeMessage(`Товар ${state.title} добавлен в избранное`))
                    }}>
                        <FontAwesomeIcon className="good__text-button-svg" icon={faHeart} style={{color: goodInFavourites ? "#FF8261" : "#F7F7F7"}}/>
                    </button> */}
                    <LikeButton good={good}></LikeButton>
                    <ShareButton href={window.location.href} />
                    {/* <button>
                        <FontAwesomeIcon icon={faShareNodes} />
                    </button> */}
                </div>

                <Terms></Terms>
            </div>
        </section>
    )
}