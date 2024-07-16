import { GoodsInterface } from "./interfaces"
import './Goods.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
// import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import { add } from "./features/basketSlice";
// import { addToFavourite } from "./features/favouriteSlice"
import { useAppDispatch } from "./hooks"
import { toggleFavourite } from "./features/goodsSlice"
import { changeMessage } from "./features/notificationSlice"

export default function Goods({ category, goods, inAccountPage }:GoodsInterface) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <section className={!inAccountPage ? "goods" : "goods goods_inaccount"}>
      <h3>{category}</h3>
      {goods && goods.length > 0 ? <ul className="goods__ul">
        {goods && goods.map((good) => {
          return <li key={good.title} className="goods__ul-li" onClick={() => {
            navigate(`/goods/${good.title}`, {
              state: good,
              preventScrollReset: false,
            })
          }}>
              <div className="goods__ul-li-text-wrapper">
                <div className="goods__ul-li-heart">
                  <p className="goods__ul-li-title">{good.title}</p>
                  {!inAccountPage && <button onClick={(evt) => {
                    evt.stopPropagation();
                    // dispatch(addToFavourite());
                    dispatch(toggleFavourite({...good, quantity: 1}));
                    dispatch(changeMessage(`Товар ${good.title} добавлен в избранное`))
                  }}>
                    <FontAwesomeIcon className="goods__ul-li-heart-svg" style={{color: good.favourite ? "#FF8261" : "#F7F7F7"}} icon={faHeart}/>
                  </button>}
                </div>
                <span>{good.price}</span>
                {good.colors && <span>Цвета: {good.colors.length}</span>}

              </div>
              <img className="goods__ul-li-img" src={good.cover}></img>
            {!inAccountPage && <button className="goods__ul-li-btn" onClick={(evt) => {
              evt.stopPropagation();
              dispatch(add({...good, quantity: 1, selectedColor: good.colors && good.colors[0]}));
              dispatch(changeMessage(`Товар ${good.title} добавлен в корзину`))
            }}>
              <FontAwesomeIcon icon={faShoppingBag} />
            </button>}
          </li>
        })}
      </ul>
      :
      <p>Товаров в категории {category} пока нет, но их всегда можно добавить</p>
      }
    </section>
  )
}