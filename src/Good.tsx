import "./Good.css";
import { GoodComponentInterface } from "./interfaces";
import LikeButton from "./LikeButton";
import BasketButton from "./BasketButton";
import ShareButton from "./ShareButton";
import { useNavigate } from "react-router-dom";

export default function Good({ good }:GoodComponentInterface) {
    //navigate
    const navigate = useNavigate();
    return (
        <>
            <div className="good-img-wrapper">
                <img src={good.photos[0].url} onClick={() => {
                    navigate(`/goods/${good._id}`, {
                        state: good,
                        preventScrollReset: false,
                    })
                }}></img>
                <div className="good-img-wrapper__actions">
                    <LikeButton good={ good } />
                    <ShareButton href={`${window.location.href}goods/${good._id}`} />
                </div>
            </div>
            <div className="good-text-wrapper">
                <h3>{good.title}</h3>
                {good.seller._id && <div className="good-text-wrapper__seller">
                    <img src={good.seller.cover}></img>
                    <span className="good-text-wrapper__seller-name">{good.seller.name}</span>
                </div>}
                <BasketButton good={good} quantity={1} />
            </div>
        </>
    )
}