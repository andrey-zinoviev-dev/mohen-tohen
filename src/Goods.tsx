import { GoodsInterface } from "./interfaces"
import './Goods.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
export default function Goods({category, goods, setGoods}:GoodsInterface) {
  return (
    <section className="goods">
      <h3>{category}</h3>
      <ul className="goods__ul">
        {goods.map((good) => {
          return <li key={good.title} className="goods__ul-li">
            <Link className="goods__ul-li-link" to={`goods/${good.title}`}>
              <div className="goods__ul-li-text-wrapper">
                <div className="goods__ul-li-heart">
                  {/* <a>{good.seller.name}</a> */}
                  <p className="goods__ul-li-title">{good.title}</p>
                  <button onClick={() => {
                    
                  }}>
                    <FontAwesomeIcon className="goods__ul-li-heart-svg" icon={faHeart}/>
                  </button>
                </div>
                <span>{good.price}</span>
              </div>
              <img className="goods__ul-li-img" src={good.cover}></img>
            </Link>
            <button className="goods__ul-li-btn" onClick={() => {
              setGoods((prevValue) => {
                return [...prevValue, good];
              })
            }}>
              <FontAwesomeIcon icon={faShoppingBag} />
            </button>
          </li>
        })}
      </ul>
    </section>
  )
}