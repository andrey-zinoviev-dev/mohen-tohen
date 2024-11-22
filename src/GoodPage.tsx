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
import { Swiper, SwiperSlide } from "swiper/react"
// import s
import SwiperDot from "./SwiperDot"
import QuantityButton from "./QuantityButton"

export default function GoodPage() {

    const { goodID } = useParams();

    //RTK
    const {
        data: good = {} as GoodInterface
    } = useGetGoodQuery(goodID!);

    //ref
    // const swiperRef = useRef<SwiperClass | null>(null);

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
    console.log(selectedPhoto);

    //functions
    function minusOne() {
        return setQuantity((prevValue) => {
            return prevValue - 1;
        })
    }

    function plusOne() {
        return setQuantity((prevValue) => {
            return prevValue + 1;
        })
    }

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
            <div className="good__swiper">
                <Swiper className="good__swiper-container" onSlideChange={(data) => {
                    setSelectedPhoto(data.realIndex);
                }} slidesPerView={1} spaceBetween={5}>
                    {good.photos && good.photos.map((photo) => {
                        return <SwiperSlide key={photo.url}>
                            <img className="good__swiper-img" src={photo.url}></img>
                        </SwiperSlide>
                    })}
                    <div className="good__swiper-dots">
                    {good.photos && good.photos.map((photo, index) => {
                        return <SwiperDot setSelectedPhoto={setSelectedPhoto} index={index} key={photo.title}></SwiperDot>
                    })}
                </div>
                </Swiper>
                
            </div>
            
            {/* } */}
            <div className="good__text">
                <div className="line1"> 
                    <h3>{good.title}</h3>

                </div>
                <h4>Цена: <span className="cvet">{good.price}</span></h4>
                <Link to={`/brands/${good.seller && good.seller._id}`}>
                    <div className="good__text-a-name">
                        <span>{good.seller && good.seller.name}</span>
                        <div></div>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>

                <p>{good.description}</p>

                <h4>
                    Размер: <span className="cvet">{good.dimensions}</span>
                </h4>
                <h4>Материал: <span className="cvet">{good.material}</span></h4>
                <h4>Цвет: <span className="cvet"></span>
                    <div style={{backgroundColor: good.color, width: 20, height: 20, borderRadius: 3}}></div>
                </h4>
                <h4>Наличие: <span className="cvet">{good.batch}</span></h4>

                <div className="good__text-quantity">
                    <QuantityButton stock={good.batch} numberInBasket={quantity} updateQuantity={minusOne} minus={true}></QuantityButton>
                    <span>{quantity}</span>
                    <QuantityButton stock={good.batch} numberInBasket={quantity} updateQuantity={plusOne} minus={false}></QuantityButton>
                    {/* <button disabled={quantity < 2 ? true : false} onClick={() => {
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
                    </button> */}
                </div>
                <div className="good__text-buttons">
                    <BasketButton good={good} quantity={quantity} />
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