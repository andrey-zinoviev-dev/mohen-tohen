import { useLocation } from "react-router-dom";
import LinkCompBack from "./LinkCompBack";
import SuccessWrapper from "./SuccessWrapper";
import { BasketGoodInterface, goodPageInt, TransactionInterface } from "./interfaces";
import ListElementGeneric from "./ListElementGeneric";
import CartItem from "./CartItem";
import ColorOption from "./ColorOption";
// import { useGetTransactionQuery } from "./features/apiSlice";
// import { useMemo } from "react";
// import { useNavigate } from "react-router-dom";

export default function CreateOrderSuccess() {
  //location
  const location = useLocation();
  const order = location.state as TransactionInterface;
  console.log(order);
  // console.log(order);
  
  // //RTK
  // const {data: transaction = {} as TransactionInterface} = useGetTransactionQuery(orderId!);

  const orderTime = new Date(order.createdAt);

  // console.log(transaction);

  return (
    <section>
      {/* <h3>Тут будет успешная страница</h3> */}
      <SuccessWrapper label="Спасибо, Андрей, ваш заказ успешно создан!"></SuccessWrapper>
      <span>Номер заказа: {order._id}</span>
      <div>
        <span>{order.personalData.name}</span>
        <span>{order.personalData.email}</span>
        <span>{order.personalData.address}</span>
        <span>{order.personalData.zipcode}</span>
        <span>{order.total}</span>
      </div>
      {Object.keys(order).length > 0 && <div>
        <span>Дата: {orderTime.toLocaleDateString()}</span>
        <span>Вемя: {orderTime.toLocaleTimeString()}</span>
        <span>Сумма заказа: {order.total}</span>
        <div>
          <span>Что в заказе</span>
          {/* <ListElementGeneric items={order.goods} renderItems={(item) => {
            return <CartItem good={item}></CartItem>
          }}></ListElementGeneric> */}
          <ul>
            {order.goods.map((good) => {
              return <li key={good._id}>
                {/* <img src={good}></img> */}
                <span>{good.title}</span>
                <ColorOption active={true} color={good.color.option}></ColorOption>
                {/* <span>{good.color.option}</span> */}
                <span>{good.dimension.option}</span>
                <span>{good.material.option}</span>
                <span>{good.quantity}</span>
                <span>{good.price + good.color.price + good.dimension.price + good.material.price}</span>
              </li>
            })}
          </ul>
          
        </div>
      </div>}
      <LinkCompBack reload={true} to="../" text="На главную" />
    </section>
  )
}