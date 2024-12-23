import { GoodsInterface } from "./interfaces"
import './Goods.css'
import ListElementGeneric from "./ListElementGeneric"
import Good from "./Good"
// import { useNavigate } from "react-router-dom"
// import Good from "./Good"

export default function Goods({ goods }:GoodsInterface) {
  // const navigate = useNavigate();

  return (
    <>
    {goods && goods.length > 0 ? 
      <ListElementGeneric classUl="goods__ul" items={goods} renderItems={(good) => {
        return <Good good={good}></Good>
      }}></ListElementGeneric>
      :
      <p>Товаров пока нет, но их всегда можно добавить</p>
      }
    </>
  )
}