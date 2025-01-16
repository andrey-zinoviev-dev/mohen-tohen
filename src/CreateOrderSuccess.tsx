import { useLocation } from "react-router-dom";
import LinkCompBack from "./LinkCompBack";
import SuccessWrapper from "./SuccessWrapper";
import { TransactionInterface } from "./interfaces";
import ListElementGeneric from "./ListElementGeneric";
import CartItem from "./CartItem";
import ColorOption from "./ColorOption";
import "./CreateOrderSuccess.css";
import CreatedOrderItem from "./CreatedOrderItem";
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
    <section className="success-order">
      {/* <h3>Тут будет успешная страница</h3> */}
      <SuccessWrapper label="Спасибо, Андрей, ваш заказ успешно создан!"></SuccessWrapper>
      <span>Номер заказа: {order._id}</span>
      <div className="success-order__main-data">
        <div className="success-order__main-data-personal">
          <span>{order.personalData.name}</span>
          <span>sttrog_810@mail.ru</span>
          <span>{order.personalData.phone}</span>
          <span>{order.personalData.address}</span>
          <span>117335</span>
        </div>
        <div className="success-order__main-data-personal">
          <span className="success-order__main-data-payment__total">{order.total}&#8381;</span>
          <span>{orderTime.toLocaleDateString()}</span>
          <span>{orderTime.toLocaleTimeString("ru-RU", {
            hour12: false
          })}</span>
          {/* <span>1408</span> */}
        </div>
      </div>
      <div>
        <h4 className="success-order__headline">Что в заказе</h4>
        <ListElementGeneric classUl="cart__ul" items={order.goods} renderItems={(item) => {
          return <CreatedOrderItem item={item}></CreatedOrderItem>
        }}></ListElementGeneric>
      </div>
      <div className="success-order__totals">
        <div className="success-order__totals-param">
          <span>Сумма за товары</span>
          <span>{order.total}&#8381;</span>
        </div>
        <div className="success-order__totals-param">
          <span>Сумма за доставку</span>
          <span>{deliveryConst}&#8381;</span>
        </div>
        <div className="success-order__totals-param">
          <span>Итого</span>
          <span>{order.total + deliveryConst}&#8381;</span>
        </div>
      </div>
      <div className="success-order__back">
        <LinkCompBack reload={true} to="../" text="На главную" />
      </div>
    </section>
  )
}