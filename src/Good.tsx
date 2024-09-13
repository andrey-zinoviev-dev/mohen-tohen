import { useAppDispatch, useAppSelector } from "./hooks";
// import { addRemoveToFavUser } from "./features/userSlice";
import { changeMessage } from "./features/notificationSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { GoodComponentInterface } from "./interfaces";
import { add, remove } from "./features/basketSlice";
import { useNavigate } from "react-router-dom";
import LikeButton from "./LikeButton";
import BasketButton from "./BasketButton";
import { usePostGoodToFavouriteMutation } from "./features/apiSlice";
export default function Good({good}:GoodComponentInterface) {


    //RTK
    // const {
    //     data: addedToFavs = false as boolean
    // } = usePostGoodToFavouriteMutation(good._id!)
    
    // const userStateFavs = useAppSelector((state) => {
    //     return state.user.favourites;
    // });
    // const basketState = useAppSelector((state) => {
    //     return state.basket.goods;
    // })

    const userState = useAppSelector((state) => {
        return state.user;
    })

    //derived state
    // const goodInFavourites = userState.favourites && userState.favourites.find((favGood) => {
    //     return favGood.title === good.title;
    // });
    // const goodInBasket = userState.basket && userState.basket.find((basketGood) => {
    //     return basketGood.title === good.title;
    // });

    //navigate
    const navigate = useNavigate();

    return (
        <>
            <div className="goods__ul-li-text-wrapper">
                <div className="goods__ul-li-heart">
                  <p className="goods__ul-li-title">{good.title}</p>
                  <LikeButton good={ good } />
                  {/* <button onClick={(evt) => {
                    evt.stopPropagation();
                    dispatch(addRemoveToFavUser(good));
                    dispatch(changeMessage({message: goodInFavourites ? `Товар ${good.title} убран из избранных` : `Товар ${good.title} добавлен в избранное`}))

                  }}>
                    <FontAwesomeIcon className="goods__ul-li-heart-svg" style={{color: goodInFavourites ? "#FF8261" : "#F7F7F7"}} icon={faHeart}/>
                  </button> */}
                </div>
                <span>{good.price}</span>
                {good.colors && <span>Цвета: {good.colors.length}</span>}
            </div>
            <img className="goods__ul-li-img" src={good.cover}></img>
            <BasketButton good={good} />
            {/* <button className="goods__ul-li-btn" onClick={(evt) => {
                evt.stopPropagation();
                {!goodInBasket ? 
                    dispatch(add({...good, selectedColor: good.colors && good.colors[0]})) 
                    :
                    dispatch(remove(good)) 

                }
                dispatch(changeMessage({message: goodInBasket ? `Товар ${good.title} убран из корзины` : `Товар ${good.title} добавлен в корзину`}))
            }}>
                {goodInBasket ? <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> : <FontAwesomeIcon icon={faShoppingBag} />}
            </button> */}
        </>
    )
}