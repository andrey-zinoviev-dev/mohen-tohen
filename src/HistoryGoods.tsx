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
      {/* <ul>
        {userState.history.map((transaction) => {
          return <li key={transaction.title}>
            <span>{transaction.title}</span>
          </li>
        })}
      </ul> */}
    </section>
  )
}