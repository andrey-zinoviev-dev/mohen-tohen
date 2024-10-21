import LinkCompBack from "./LinkCompBack";
import SuccessWrapper from "./SuccessWrapper";
// import { useNavigate } from "react-router-dom";

export default function CreateOrderSuccess() {
  return (
    <section>
      <h3>Тут будет успешная страница</h3>
      <SuccessWrapper label="Все прошло отлично!"></SuccessWrapper>
      <LinkCompBack to="../" text="На главную" />
    </section>
  )
}