import "./Good.css";
import { GoodComponentInterface } from "./interfaces";
// import { add, remove } from "./features/basketSlice";
// import { useNavigate } from "react-router-dom";
import LikeButton from "./LikeButton";
// import { useState } from "react";
import BasketButton from "./BasketButton";
import ShareButton from "./ShareButton";
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import BasketButton from "./BasketButton";
// import { usePostGoodToFavouriteMutation } from "./features/apiSlice";
export default function Good({ good }:GoodComponentInterface) {
    //navigate
    const navigate = useNavigate();
    return (
        <>
            <div className="good-img-wrapper">
                <img src={good.photos[0].url}></img>
                <div className="good-img-wrapper__actions">
                    <LikeButton good={ good } />
                    <ShareButton href={`${window.location.href}goods/${good._id}`} />
                </div>
            </div>
            <div className="good-text-wrapper">
                <h3>{good.title}</h3>
                <div className="good-text-wrapper__seller">
                    <img src={good.seller.cover}></img>
                    <span className="good-text-wrapper__seller-name">{good.seller.name}</span>
                </div>
                {/* <button>Купить за {good.price}р</button> */}
                <BasketButton good={good} quantity={1} />
                {/* <div>
                    <h4>{good.price}р.</h4>
                    <BasketButton good={good} quantity={1} />
                </div> */}
            </div>
            {/* <div className="goods__ul-li-actions-wrapper">
                <img className="goods__ul-li-img" onClick={() => {
                    navigate(`/goods/${good._id}`, {
                        state: good,
                        preventScrollReset: false,
                    })
                }} src={good.photos[0].url}></img>
                <div className="goods__ul-li-buttons">
                    <LikeButton good={ good } />
                    <ShareButton href={`${window.location.href}goods/${good._id}`} />
                </div>
            </div>
            <div className="goods__ul-li-text-wrapper">
                <h3>{good.title}</h3>
                <span className="goods__ul-li-author">{good.seller.name}</span>
                <div className="goods__ul-li-price-wrapper">
                    <h4>{good.price}р.</h4>
                    <BasketButton good={good} quantity={1} />
                </div>
            </div> */}
        </>
    )
}