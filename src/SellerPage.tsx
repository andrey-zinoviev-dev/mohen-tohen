import { useLocation } from "react-router-dom"
import { BrandsInterface } from "./interfaces";
import "./SellerPage.css";
import Goods from "./Goods";

export default function SellerPage() {
  const location = useLocation();
  const state = location.state as BrandsInterface;
  console.log(state);
  return (
    <section className="seller">
      <div className="seller__warpper">
        <img className="seller__warpper-img" src={state.cover}></img>
        <div className="seller__wrapper_details">
          <h3>{state.name}</h3>
          <p>{state.description}</p>
          <div>
          <span>5.0</span> <span>53 отзыва</span>
          </div>
          <button>Сделать персональный заказ</button>
        </div>
      </div>
      <Goods category="Что можно приобрести" goods={state.goodsCollection} />
    </section>
  )
}