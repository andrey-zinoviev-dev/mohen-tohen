import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./GoodPage.css"
import { faArrowRight, faXmarkCircle
    // faTruckRampBox 
} from "@fortawesome/free-solid-svg-icons"
import { 
    // Link, 
    // useLocation,
     useParams } from "react-router-dom"
import { 
    // ColorInterface, 
GoodInterface, 
OptionInterface} from "./interfaces";

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
// import ShareButton from "./ShareButton"
import { Swiper, SwiperSlide } from "swiper/react"
// import s
import SwiperDot from "./SwiperDot"
import QuantityButton from "./QuantityButton"
import NoteWrapper from "./NoteWrapper"
import ColorOption from "./ColorOption"
import { createPortal } from "react-dom"
import PortalMultimedia from "./PortalMultimedia"
import ListElementGeneric from "./ListElementGeneric"
import NonSizeOption from "./NonSizeOption"
import ShareButtonIcon from "./ShareButtonIcon"
// import PortalContainer from "./PortalContainer"
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
    // const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
    const [selectedMaterial, setSelectedMaterial] = useState<OptionInterface>({
        option: "",
        price: 0,
    });
    const [selectedColor, setSelectedColor] = useState<OptionInterface>({
        option: "",
        price: 0,
    });
    const [selectedDimension, setSelectedDimension] = useState<OptionInterface>({
        option: "",
        price: 0,
    })
    const [quantity, setQuantity] = React.useState<number>(1);
    const [selectedPhoto, setSelectedPhoto] = React.useState<number>(0);
    // const [selectedColor, setSelectedColor] = React.useState<{title: string, price: number}>({title: "", price: 0});
    // const [selectedMaterial, setSelectedMaterial] = React.useState<{title: string, price: number}>({title: "", price: 0})
    const [imageClicked, setImageClicked] = useState<boolean>(false);

    // //memo values
    const optionsPrice = React.useMemo(() => {
        return selectedColor.price + selectedDimension.price + selectedMaterial.price
    }, [selectedColor.price, selectedDimension.price, selectedMaterial.price]);

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

    React.useEffect(() => {
        // console.log(good);
        good.colors && setSelectedColor(good.colors[0]);
        good.materials && setSelectedMaterial(good.materials[0])
        good.dimensions && setSelectedDimension(good.dimensions[0]);
    }, [good]);

    return (
        <section className="good">
            <div className="good__swiper">
                <Swiper className="good__swiper-container" onSlideChange={(data) => {
                    setSelectedPhoto(data.realIndex);
                }} slidesPerView={1} spaceBetween={5}>
                    {good.photos && good.photos.map((photo) => {
                        return <SwiperSlide key={photo}>
                            <img onClick={() => {
                                setImageClicked(true);
                            }} className="good__swiper-img" src={photo}></img>
                        </SwiperSlide>
                    })}
                    <div className="good__swiper-dots">
                    {good.photos && good.photos.map((photo, index) => {
                        return <SwiperDot setSelectedPhoto={setSelectedPhoto} index={index} key={photo}></SwiperDot>
                    })}
                </div>
                </Swiper>
                
            </div>
            
            {/* } */}
            <div className="good__text">
                <div className="line1"> 
                    <h3>{good.title}</h3>

                </div>
                <h4>Цена: <span className="cvet">{good.price + optionsPrice}&#8381;</span></h4>
                <h4>Бренд: <Link to={`/brands/${good.seller && good.seller._id}`}>
                    <div className="good__text-a-name">
                        <span>{good.seller && good.seller.name}</span>
                        <div></div>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link></h4>

                

                <h4>Описание: <span className="cvet">{good.description}</span></h4>
                {/* <p className="good__text-description">{good.description}</p> */}
                {good.madeToOrder && <NoteWrapper text="Внимание! Этот товар делается на заказ"></NoteWrapper>}
                <h4>
                    Размер: 
                    {good.dimensions && <ListElementGeneric classUl="good__page-options" items={good.dimensions} renderItems={(item) => {
                        return <button className={item.option === selectedDimension.option ? "good__option-button_active good__option-button good__option-button_text" : "good__option-button good__option-button_text"} onClick={() => {
                            setSelectedDimension(item)
                        }}>
                            <NonSizeOption option={item.option}></NonSizeOption>
                        </button>
                    }}></ListElementGeneric>}
                    {/* <span className="cvet">{good.dimensions && good.dimensions[0].option}</span> */}
                </h4>
                <h4>Материал:
                    {good.materials && <ListElementGeneric classUl="good__page-options" items={good.materials} renderItems={(item) => {
                        return <button className={item.option === selectedMaterial.option ? "good__option-button_active good__option-button good__option-button_text" : "good__option-button good__option-button_text"} onClick={() => {
                            setSelectedMaterial(item);
                        }}>
                            <NonSizeOption option={item.option}></NonSizeOption>
                        </button>
                    }}></ListElementGeneric>}
                    {/* <span className="cvet">{good.materials && good.materials[0].option}</span> */}
                </h4>
                <h4>Цвет: 
                    {good.colors && <ListElementGeneric classUl="good__page-options" items={good.colors} renderItems={(item) => {
                        return <button onClick={() => {
                            setSelectedColor(item)
                        }} className={item.option === selectedColor.option ? "good__option-button_active good__option-button" : "good__option-button"}>
                            <ColorOption active={false} color={item.option}></ColorOption>
                            {/* <span>+{item.price}&#8381;</span> */}
                        </button>
                    }}></ListElementGeneric>}
                </h4>
                
                <h4>Наличие: <span className="cvet">{good.batch}</span></h4>

                <div className="good__text-quantity">
                    <QuantityButton stock={good.batch} numberInBasket={quantity} updateQuantity={minusOne} minus={true}></QuantityButton>
                    <span>{quantity}</span>
                    <QuantityButton stock={good.batch} numberInBasket={quantity} updateQuantity={plusOne} minus={false}></QuantityButton>
                </div>
                <div className="good__text-buttons">
                    <BasketButton good={{title: good.title, _id: good._id, seller: good.seller, batch: good.batch, photos: good.photos, price: good.price, quantity: quantity, selectedColor, selectedDimension, selectedMaterial}} />
                    <LikeButton good={good}></LikeButton>
                    <ShareButtonIcon classParam="good__button-like" href={`https://mohen-tohen.ru/goods/${good._id}`}></ShareButtonIcon>
                    {/* <ShareButton href={`https://mohen-tohen.ru/goods/${good._id}`} /> */}
                </div>
                <Terms></Terms>
            </div>
            {imageClicked && createPortal(<PortalMultimedia>
                <button onClick={() => {
                    setImageClicked(false);
                }}>
                <FontAwesomeIcon icon={faXmarkCircle} />
                </button>
                <img src={good.photos[selectedPhoto]} />
            </PortalMultimedia>, document.body)}
        </section>
    )
}