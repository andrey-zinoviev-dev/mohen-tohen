import "./HistoryGoods.css"
import { useAppSelector } from "./hooks"
import { useLocation } from "react-router-dom";
import { GoodInterface, TransactionInterface } from "./interfaces";
import { useGetTransactionsQuery } from "./features/apiSlice";
export default function HistoryGoods() {
  //redux
  const userState = useAppSelector((state) => {
    return state.user;
  });

  const { data: transactions } = useGetTransactionsQuery(userState._id!);
  
  // console.log(goods);
  //location
  const location = useLocation();
  const state = location.state as { headline: string};
  // console.log(location);

  // console.log(userState);

  return (
    // <div className="history">
    //   <h3>{state.headline}</h3>
    //   <ul className="history__ul">
    //     {userState.ordersHistory.length > 0 ? userState.ordersHistory.map((transaction) => {
    //       return <li className="history__ul-li" key={transaction.title}>
    //         <p className="history__ul-li-p">Номер заказа</p>
    //         <div className="history__ul-li-order-wrapper">
    //           <img src={transaction.cover}></img>
    //           <span>{transaction.title}</span>
    //           <span>Дата заказа</span>
    //           <span>Количество: {transaction.quantity}</span>
    //           <span>Сумма: {transaction.price}</span>
    //         </div>
    //       </li>
    //     })
    //     :
    //     <li className="history__ul-li" key="empty-history">
    //       <span>История {!userState.seller ? "покупок" : "продаж"} пуста, но вы всегда можете ее заполнить</span>
    //     </li>
    //     }
    //   </ul>
    // </div>
    <>
      {/* <h3>{state.headline}</h3> */}
      <ul className="history__ul">
        {transactions ? transactions.map((transaction) => {
          return <li className="history__ul-li" key={transaction._id}>
            <p className="history__ul-li-p">{transaction._id}</p>
            <div className="history__ul-li-order-wrapper">
              <span>Дата заказа</span>
              <span>Количество товаров: {transaction.goods.length}</span>
              <span>Сумма: {transaction.price}</span>
            </div>
          </li>
        })
        :
        <li className="history__ul-li" key="empty-history">
          <span>{state.headline} пуста, но вы всегда можете ее заполнить</span>
        </li>
        }
      </ul>
    </>
  )
}