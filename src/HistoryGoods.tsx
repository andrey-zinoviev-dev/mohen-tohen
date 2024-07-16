import "./HistoryGoods.css"
import { useAppSelector } from "./hooks"
export default function HistoryGoods() {
  //redux
  const userState = useAppSelector((state) => {
    return state.user;
  });

  return (
    <section className="history">
      <h3>История {!userState.seller ? "покупок" : "продаж"}</h3>
      {/* <Goods goods={userState.history}></Goods> */}
      <ul className="history__ul">
        {userState.history.map((transaction) => {
          return <li className="history__ul-li" key={transaction.title}>
            <p className="history__ul-li-p">Номер заказа</p>
            <div className="history__ul-li-order-wrapper">
              <img src={transaction.cover}></img>
              <span>{transaction.title}</span>
              <span>Дата заказа</span>
              <span>Количество: {transaction.quantity}</span>
              <span>Сумма: {transaction.price}</span>
            </div>
          </li>
        })}
      </ul>
    </section>
  )
}