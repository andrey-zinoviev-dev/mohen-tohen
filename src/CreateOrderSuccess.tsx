import { useLocation } from "react-router-dom";
import LinkCompBack from "./LinkCompBack";
import SuccessWrapper from "./SuccessWrapper";
import { TransactionInterface } from "./interfaces";
import { useGetTransactionQuery } from "./features/apiSlice";
// import { useMemo } from "react";
// import { useNavigate } from "react-router-dom";

export default function CreateOrderSuccess() {
  //location
  const location = useLocation();
  const orderId = location.state as string;
  
  //RTK
  const {data: transaction = {} as TransactionInterface} = useGetTransactionQuery(orderId!);

  const orderTime = new Date(transaction.createdAt && transaction.createdAt);

  // console.log(orderDetails);
  //memo
  // const orderTotal = useMemo(() => {
  //   return orderDetails.goods.map((good) => {
  //     return good.good.price;
  //   }).reduce((prevPrice, currentPrice) => {
  //     return prevPrice + currentPrice;
  //   }, 0)
  // }, [orderDetails._id]) 

  return (
    <section>
      {/* <h3>Тут будет успешная страница</h3> */}
      <SuccessWrapper label="Ваш заказ успешно оплачен!"></SuccessWrapper>
      {Object.keys(transaction).length > 0 && <>
        <span>Дата: {orderTime.toLocaleDateString()}</span>
        <span>Вемя: {orderTime.toLocaleTimeString()}</span>
        <span>Сумма заказа: {transaction.total}</span>
        <div>
          <span>Что в заказе</span>
          {/* {orderDetails.goods.map((good) => {
            return good.good._id;
          })} */}
        </div>
      </>}
      <LinkCompBack reload={true} to="../" text="На главную" />
    </section>
  )
}