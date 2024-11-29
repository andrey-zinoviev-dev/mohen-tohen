import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HistoryGoods.css"
import { useAppSelector } from "./hooks"
// import { useLocation } from "react-router-dom";
// import { GoodInterface, TransactionInterface } from "./interfaces";
// import { useGetTransactionsQuery } from "./features/apiSlice";
import ListColumn from "./ListColumn";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { testTransactions } from "./utils";
// import { TransactionInterface } from "./interfaces";
export default function HistoryGoods() {
  //redux
  const userState = useAppSelector((state) => {
    return state.user;
  });
  // console.log(userState);
  // console.log(transactions);

  // const transGoods = transactions.map((transaction) => {
  //   return transaction.goods;
  // }).flat();

  // console.log(transGoods);



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
      {userState.ordersHistory.length > 0 ?
      <ListColumn>
        {/* {transGoods.map((transGood) => {
          return <li className="history__li">
            <div className="history__li-wrapper">
              <img className="history__li-img" src={transGood.cover}></img>
              <div className="history__li-good">
                <span className="history__li-good-title">{transGood.title}</span>
                <span className="history__li-good-date">25-10-2001</span>
              </div>
            </div>
            <div className="history__li-wrapper">
                <img className="history__li-img history__li-img_round" src={transGood.seller.cover}></img>
                <span>{transGood.seller.name}</span>
                <button>
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </button>
            </div>
            <div className="history__li-wrapper">
              <span>110-95-27-004</span>
                <button>
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </button>
            </div>
            
            <span>{transGood.price} р.</span>
          </li>
        })} */}
        {userState.ordersHistory.map((transaction) => {
          return <li key={transaction._id}>
            {/* <div className="list-column__wrapper">
              
            </div>   */}
            <div className="list-column__wrapper-column">
                <span>Товары: {transaction.goods.length}</span>
                <div className="list-column__wrapper-column-pics">
                  {transaction.goods.map((good) => {
                      return <div className="list-column__wrapper-column-brand" key={good.good._id}>
                          <img className="list-column__wrapper-column-cover" key={good.good._id} src={good.good.photos[0].url}></img>
                          <span>{good.good.title}</span>
                      </div>
                  })}
                </div>
              </div>
              <div className="list-column__wrapper-column list-column__wrapper-column_brands">
                  <span>Бренды</span>
                  <div className="list-column__wrapper-column-pics">
                    {transaction.goods.map((good) => {
                      
                      return <Link className="list-column__wrapper-column-link" to={""}>
                        <img className="list-column__wrapper-column-cover list-column__wrapper-column-cover_round" src={good.good.seller.cover}></img>
                        <span>{good.good.seller.brandName}</span>
                        <FontAwesomeIcon icon={faUpRightFromSquare} />
                      </Link>
                    })}
                  </div>
              </div>
              <div className="list-column__wrapper-column">
                <span>Дата</span>
                <span>17 Октября</span>
              </div>
              <div className="list-column__wrapper-column">
                <span>Трек-номер</span>
                <a className="list-column__wrapper-column-link" href="https://cdek.by/ru/tracking/">
                  110-95-218-094
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>
              <div className="list-column__wrapper-column">
                <span>Сумма</span>
                <span>{transaction.total}</span>
              </div>
          </li>
        })}
      </ListColumn>

      :
      <span className="history__empty-span">История покупок пуста, но вы всегда можете ее заполнить</span>}
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