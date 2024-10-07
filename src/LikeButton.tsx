// import { useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoodInterface } from "./interfaces";
import "./LikeButton.css";
// import { usePostGoodToFavouriteMutation } from "./features/apiSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
// import { addRemoveToFavUser } from "./features/userSlice";
import { addToFavourite, removeFromFavourite } from "./features/favouriteSlice";
import { changeMessage } from "./features/notificationSlice";

export default function LikeButton({ good }: { good: GoodInterface }) {
    //RTK
    //mutation
    // const [addToFavs] = usePostGoodToFavouriteMutation();

    //redux
    const userFavState = useAppSelector((state) => {
        return state.favourites.favouriteGoods;
    });

    //derived state
    const goodInFavs = userFavState.find((fav) => {
        return fav._id === good._id;
    });

    //dispatch
    const dispatch = useAppDispatch();

    return (
        <button className={goodInFavs ? "button-like_clicked button-like" :  "button-like"} onClick={(evt) => {
            evt.stopPropagation();
            dispatch(!goodInFavs ? addToFavourite(good) : removeFromFavourite(good));
            dispatch(changeMessage(!goodInFavs ? {message: "Товар добавлен в избранное"} : {message: "Товар убран из избранного"}))
            // addToFavs(good._id)
            // .then((data) => {
            //     if(!data.data?.addedToFavs) {
            //         dispatch(addRemoveToFavUser(good))
            //     } else {
            //         dispatch(addRemoveToFavUser(good))
            //     }
            // })
        }}>
            <FontAwesomeIcon icon={faHeart} />
        </button>
    )
}