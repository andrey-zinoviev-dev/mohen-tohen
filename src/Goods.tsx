import { GoodsInterface } from "./interfaces"
import './Goods.css'
// import { useNavigate } from "react-router-dom"
import Good from "./Good"

export default function Goods({ goods }:GoodsInterface) {
  // const navigate = useNavigate();

  return (
    <>
    {goods && goods.length > 0 ? 
      <ul className="goods__ul">
        {/* {goods && goods.map((good) => {
          return <li key={good._id} className="goods__ul-li">
            <Good good={good}></Good>
          </li>
        })} */}
      </ul>
      :
      <p>Товаров пока нет, но их всегда можно добавить</p>
      }
    </>
  )
}