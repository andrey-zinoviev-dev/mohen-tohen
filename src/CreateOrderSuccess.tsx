import { useLocation } from "react-router-dom";
import LinkCompBack from "./LinkCompBack";
import SuccessWrapper from "./SuccessWrapper";
import { BasketGoodInterface, goodPageInt, TransactionInterface } from "./interfaces";
// import { useGetTransactionQuery } from "./features/apiSlice";
// import { useMemo } from "react";
// import { useNavigate } from "react-router-dom";

export default function CreateOrderSuccess() {
  //location
  const location = useLocation();
  const order = location.state as {goods: BasketGoodInterface[], transactionData: TransactionInterface};

  // console.log(order);
  
  // //RTK
  // const {data: transaction = {} as TransactionInterface} = useGetTransactionQuery(orderId!);

  const orderTime = new Date(order.transactionData.createdAt && order.transactionData.createdAt);

  // console.log(transaction);

  return (
    <section>
      {/* <h3>Тут будет успешная страница</h3> */}
      <SuccessWrapper label="Спасибо, Андрей, ваш заказ успешно создан!"></SuccessWrapper>
      <span>Номер заказа: {order.transactionData._id}</span>
      {Object.keys(order).length > 0 && <div>
        <span>Дата: {orderTime.toLocaleDateString()}</span>
        <span>Вемя: {orderTime.toLocaleTimeString()}</span>
        <span>Сумма заказа: {order.transactionData.total}</span>
        <div>
          <span>Что в заказе</span>
          <ul>
            {order.goods.map((good) => {
              return <li key={good.good._id}>
                {/* <span>{good.good.title}</span>
                <span>{good.good.selectedColor.option}</span>
                <span>{good.good.selectedDimension.option}</span>
                <span>{good.good.selectedMaterial.option}</span>
                <span>{good.quantity}</span> */}
                {/* <span>{good.price}</span> */}
              </li>
            })}
          </ul>
          
        </div>
      </div>}
      <LinkCompBack reload={true} to="../" text="На главную" />
    </section>
  )
}