import { GoodsInterface } from "./interfaces"
import './Goods.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
export default function Goods({category, goods, changeGoodsFunction}:GoodsInterface) {
  return (
    <section className="goods">
      <h3>{category}</h3>
      <ul className="goods__ul">
        {goods.map((good) => {
          return <li key={good.title} className="goods__ul-li">
            <div className="goods__ul-li-heart">
              <a>{good.seller.name}</a>
              <button onClick={() => {
                
              }}>
                <FontAwesomeIcon className="goods__ul-li-heart-svg" icon={faHeart}/>
              </button>
            </div>
          
            <p>{good.title}</p>
            <span>{good.price}</span>
            <img className="goods__ul-li-img" src={good.cover}></img>
          </li>
        })}
      </ul>
    </section>
  )
}