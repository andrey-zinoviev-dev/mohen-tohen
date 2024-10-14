import "./HistoryGoods.css"
import { useAppSelector } from "./hooks"
// import { useLocation } from "react-router-dom";
// import { GoodInterface, TransactionInterface } from "./interfaces";
import { useGetTransactionsQuery } from "./features/apiSlice";
import ListColumn from "./ListColumn";
import { TransactionInterface } from "./interfaces";
export default function HistoryGoods() {
  //redux
  const transactions = useAppSelector((state) => {
    return state.user.ordersHistory;
  });

  // const { data: transactions = [] as TransactionInterface[] } = useGetTransactionsQuery(userState._id!);
  
  // console.log(goods);
  //location
  // const location = useLocation();
  // const state = location.state as { headline: string};
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
      <h3>История</h3>
      {transactions.length > 0 ?
      <ListColumn>
        {transactions.map((transaction) => {
          return <li key={transaction._id}>
            <span className="list-column__id-span">{transaction._id}</span>
            {/* <h3>{transaction._id}</h3> */}
            <div className="list-column__wrapper">
              <div className="list-column__wrapper-column">
                <span>Товары: {transaction.goods.length}</span>
                {transaction.goods.map((good) => {
                  return <img className="list-column__wrapper-column-cover" key={good._id} src={good.photos[0].url}></img>
                })}
              </div>
              <div className="list-column__wrapper-column">
                  <span>Бренды</span>
                  {transaction.goods.map((good) => {
                    return <div className="list-column__wrapper-column-brand" key={good.seller._id}>
                      <img src={good.seller.cover}></img>
                      <span>{good.seller.name}</span>
                    </div>
                  })}
                </div>
              <div className="list-column__wrapper-column">
                <span>Дата</span>
                <span>17 Октября</span>
              </div>
              <div className="list-column__wrapper-column">
                <span>Сумма</span>
                <span>{transaction.price}</span>
              </div>
              {/* <span className="list-column__price-span">Сумма {transaction.price}</span> */}
            </div>  
            {/* <button>
              Открыть
            </button>         */}
          </li>
        })}
      </ListColumn>

      :
      <span>История товаров пуста, но вы всегда можете ее заполнить</span>}
    </>
  )
}


      // transactions.length > 0 ? <ul className="history__ul">
      //    {transactions.map((transaction) => {
      //     return <li className="history__ul-li" key={transaction._id}>
      //       <p className="history__ul-li-p">{transaction._id}</p>
      //       <div className="history__ul-li-order-wrapper">
      //         <span>Дата заказа</span>
      //         <span>Количество товаров: {transaction.goods.length}</span>
      //         <span>Сумма: {transaction.price}</span>
      //       </div>
      //     </li>
      //   })}
      // </ul>