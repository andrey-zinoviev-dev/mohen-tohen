import "./Good.css";
import { GoodComponentInterface } from "./interfaces";
import LikeButton from "./LikeButton";
// import BasketButton from "./BasketButton";
// import ShareButton from "./ShareButton";
import { Link, useNavigate } from "react-router-dom";
// import MadeToOrderLink from "./MadeToOrderLink";
// import NoteWrapper from "./NoteWrapper";

export default function Good({ good }:GoodComponentInterface) {
    //navigate
    const navigate = useNavigate();
    return (
        <>
            <div className="good-img-wrapper">
                <img src={good.photos[0]} onClick={() => {
                    navigate(`/goods/${good._id}`, {
                        state: good,
                        preventScrollReset: false,
                    })
                }}></img>
                {good.madeToOrder && <span className="good__made-to-order-note">на заказ</span>}
                {/* <div className="good-img-wrapper__actions">
                    <LikeButton good={ good } />
                    <ShareButton href={`https://mohen-tohen.ru/goods/${good._id}`} />
                </div> */}
            </div>
            <div className="good-text-wrapper">
                <div className="good-text-title-wrapper">
                    <h3>{good.title}</h3>
                    <LikeButton good={ good } />
                </div>
                {/* {good.madeToOrder && <NoteWrapper text="Товар на заказ" />} */}
                {good.seller._id && <Link to={`../brands/${good.seller._id}`} className="good-text-wrapper__seller">
                    {/* <img src={good.seller.cover}></img> */}
                    <span className="good-text-wrapper__seller-name">{good.seller.brandName}</span>
                </Link >}
                {good.madeToOrder ? <span className="good-text-wrapper__price">От {good.price}&#8381;</span> : <span className="good-text-wrapper__price">{good.price}&#8381;</span>}
                {/* {good.madeToOrder ? <span className="good-text-wrapper__price">от {good.price} &#8381;</span> : <span className="good-text-wrapper__price">{good.price} &#8381;</span>} */}
                {/* {good.madeToOrder ? <MadeToOrderLink id={good._id} price={good.price} /> : <BasketButton price={good.price} good={good} quantity={1} />} */}
            </div>
        </>
    )
}