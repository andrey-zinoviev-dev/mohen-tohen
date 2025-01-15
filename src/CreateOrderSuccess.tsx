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

  const deliveryConst = 3500;

  // console.log(transaction);

  return (
    <section>
      {/* <h3>Тут будет успешная страница</h3> */}
      <SuccessWrapper label="Спасибо, Андрей, ваш заказ успешно создан!"></SuccessWrapper>
      <span>Номер заказа: {order._id}</span>
      <div>
        <div>
          <span>{order.personalData.name}</span>
          <span>sttrog_810@mail.ru</span>
          <span>{order.personalData.phone}</span>
          <span>{order.personalData.address}</span>
          <span>117335</span>
        </div>
        <span>{order.total}&#8381;</span>
      </div>
      {Object.keys(order).length > 0 && <div>
        {/* <span>Дата: {orderTime.toLocaleDateString()}</span>
        <span>Вемя: {orderTime.toLocaleTimeString()}</span> */}
        {/* <span>Сумма заказа: {order.total}&#8381;</span> */}
        {/* <div>
          <span>Что в заказе</span>
          <ul>
            {order.goods.map((good) => {
              return <li key={good._id}>
                <span>{good.title}</span>
                <ColorOption active={true} color={good.color.option}></ColorOption>
                <span>{good.dimension.option}</span>
                <span>{good.material.option}</span>
                <span>{good.quantity}</span>
                <span>{good.price + good.color.price + good.dimension.price + good.material.price}&#8381;</span>
              </li>
            })}
          </ul>

        </div> */}

      </div>}
      <div>
        <div>
          <span>Сумма за товары</span>
          <span>{order.total}&#8381;</span>
        </div>
        <div>
          <span>Сумма за доставку</span>
          <span>{deliveryConst}&#8381;</span>
        </div>
        <div>
          <span>Итого</span>
          <span>{order.total + deliveryConst}&#8381;</span>
        </div>
      </div>
      <LinkCompBack reload={true} to="../" text="На главную" />
    </section>
  )
}