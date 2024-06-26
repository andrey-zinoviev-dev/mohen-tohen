import { GoodsInterface } from "./interfaces"

export default function Goods({category, goods}:GoodsInterface) {
  return (
    <section>
      <h3>{category}</h3>
      <ul>
        {goods.map((good) => {
          return <li>
            <a>{good.seller.name}</a>
            <p>{good.title}</p>
            <span>{good.price}</span>
            <img src={good.cover}></img>
          </li>
        })}
      </ul>
    </section>
  )
}