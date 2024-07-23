import { useAppDispatch, useAppSelector } from "./hooks";
import { addRemoveToFavUser } from "./features/userSlice";
import { changeMessage } from "./features/notificationSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { GoodComponentInterface } from "./interfaces";
import { add, remove } from "./features/basketSlice";
import { useNavigate } from "react-router-dom";
export default function Good({good}:GoodComponentInterface) {
    //redux
    const dispatch = useAppDispatch();
    
    const userStateFavs = useAppSelector((state) => {
        return state.user.favourites;
    });
    const basketState = useAppSelector((state) => {
        return state.basket.goods;
    })

    //derived state
    const goodInFavourites = userStateFavs.find((favGood) => {
        return favGood.title === good.title;
    });
    const goodInBasket = basketState.find((basketGood) => {
        return basketGood.title === good.title;
    });

    //navigate
    const navigate = useNavigate();

    return (
        <>
            <div className="goods__ul-li-text-wrapper">
                <div className="goods__ul-li-heart">
                  <p className="goods__ul-li-title">{good.title}</p>
                  <button onClick={(evt) => {
                    evt.stopPropagation();
                    dispatch(addRemoveToFavUser(good));
                    // dispatch(addToFavourite());
                    // dispatch(toggleFavourite({...good, quantity: 1}));
                    // dispatch(changeMessage(goodInFavourites ? {message: `Товар ${good.title} убран из избранных` : `Товар ${good.title} добавлен в избранное`}))
                  }}>
                    <FontAwesomeIcon className="goods__ul-li-heart-svg" style={{color: goodInFavourites ? "#FF8261" : "#F7F7F7"}} icon={faHeart}/>
                  </button>
                </div>
                <span>{good.price}</span>
                {good.colors && <span>Цвета: {good.colors.length}</span>}
            </div>
            <img className="goods__ul-li-img" src={good.cover}></img>
            <button className="goods__ul-li-btn" onClick={(evt) => {
                evt.stopPropagation();
                {!goodInBasket ? 
                    dispatch(add({...good, quantity: 1, selectedColor: good.colors && good.colors[0]})) 
                    :
                    dispatch(remove(good)) 

                    // navigate("/basket")
                }
                // dispatch(changeMessage(goodInBasket ? `Товар ${good.title} убран из корзины` : `Товар ${good.title} добавлен в корзину`))
            }}>
                {goodInBasket ? <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> : <FontAwesomeIcon icon={faShoppingBag} />}
            </button>
        </>
    )
}