import { GoodComponentInterface } from "./interfaces";
// import { add, remove } from "./features/basketSlice";
// import { useNavigate } from "react-router-dom";
import LikeButton from "./LikeButton";
// import { useState } from "react";
import BasketButton from "./BasketButton";
import ShareButton from "./ShareButton";
// import { useLocation } from "react-router-dom";
// import BasketButton from "./BasketButton";
// import { usePostGoodToFavouriteMutation } from "./features/apiSlice";
export default function Good({ good }:GoodComponentInterface) {
    return (
        <>
            <div className="goods__ul-li-actions-wrapper">
                <img className="goods__ul-li-img" src={good.cover}></img>
                <div className="goods__ul-li-buttons">
                    <LikeButton good={ good } />
                    <ShareButton href={`${window.location.href}goods/${good._id}`} />
                </div>
            </div>
            <div className="goods__ul-li-text-wrapper">
                <h3>{good.title}</h3>
                <span className="goods__ul-li-author">{good.seller.name}</span>
                {/* <p>{good.description}</p> */}
                <div className="goods__ul-li-price-wrapper">
                    <h4>{good.price}р.</h4>
                    <BasketButton good={good} quantity={1} />
                </div>
            </div>
        </>
    )
}