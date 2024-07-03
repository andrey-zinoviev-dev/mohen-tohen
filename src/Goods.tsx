import { GoodsInterface } from "./interfaces"
import './Goods.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import { add } from "./features/basketSlice";
import { addToFavourite } from "./features/favouriteSlice"
import { useAppDispatch } from "./hooks"

export default function Goods({ category, goods }:GoodsInterface) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <section className="goods">
      <h3>{category}</h3>
      <ul className="goods__ul">
        {goods.map((good) => {
          return <li key={good.title} className="goods__ul-li" onClick={() => {
            navigate(`/goods/${good.title}`, {
              state: good,
            })
          }}>
              <div className="goods__ul-li-text-wrapper">
                <div className="goods__ul-li-heart">
                  <p className="goods__ul-li-title">{good.title}</p>
                  <button onClick={(evt) => {
                    evt.stopPropagation();
                    dispatch(addToFavourite())
                  }}>
                    <FontAwesomeIcon className="goods__ul-li-heart-svg" icon={faHeart}/>
                  </button>
                </div>
                <span>{good.price}</span>
              </div>
              <img className="goods__ul-li-img" src={good.cover}></img>
            <button className="goods__ul-li-btn" onClick={(evt) => {
              evt.stopPropagation();
              dispatch(add(good));
              // setGoods((prevValue) => {
              //   return [...prevValue, good];
              // })
            }}>
              <FontAwesomeIcon icon={faShoppingBag} />
            </button>
          </li>
        })}
      </ul>
    </section>
  )
}