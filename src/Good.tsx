import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket, faCirclePlus, } from "@fortawesome/free-solid-svg-icons";
import { GoodComponentInterface } from "./interfaces";
// import { add, remove } from "./features/basketSlice";
// import { useNavigate } from "react-router-dom";
import LikeButton from "./LikeButton";
// import BasketButton from "./BasketButton";
// import { usePostGoodToFavouriteMutation } from "./features/apiSlice";
export default function Good({good}:GoodComponentInterface) {

    return (
        <>
            <div className="goods__ul-li-actions-wrapper">
                    <img className="goods__ul-li-img" src={good.cover}></img>
                    <div className="goods__ul-li-buttons">
                        <LikeButton good={ good } />
                        <button>
                            <FontAwesomeIcon icon={faArrowUpFromBracket} />
                        </button>
                    </div>
            </div>
            <h3>{good.title}</h3>
            <p>{good.description}</p>
            <div className="goods__ul-li-price-wrapper">
                <h4>{good.price}р.</h4>
                <button>
                    <FontAwesomeIcon icon={faCirclePlus} />
                    Добавить в корзину
                </button>
            </div>
        </>
    )
}