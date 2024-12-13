import "./Good.css";
import { GoodComponentInterface } from "./interfaces";
import LikeButton from "./LikeButton";
import BasketButton from "./BasketButton";
import ShareButton from "./ShareButton";
import { Link, useNavigate } from "react-router-dom";

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
                <div className="good-img-wrapper__actions">
                    <LikeButton good={ good } />
                    <ShareButton href={`https://mohen-tohen.ru/goods/${good._id}`} />
                </div>
            </div>
            <div className="good-text-wrapper">
                <h3>{good.title}</h3>
                {good.seller._id && <Link to={`../brands/${good.seller._id}`} className="good-text-wrapper__seller">
                    <img src={good.seller.cover}></img>
                    <span className="good-text-wrapper__seller-name">{good.seller.brandName}</span>
                </Link >}
                <BasketButton price={good.price} good={good} quantity={1} />
            </div>
        </>
    )
}