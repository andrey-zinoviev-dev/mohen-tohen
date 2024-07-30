import { useLocation } from "react-router-dom"
import { BrandsInterface } from "./interfaces";
import "./SellerPage.css";
import Goods from "./Goods";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
          {/* <div className="seller__wrapper_details-rating">
            <span>5.0</span>
            <FontAwesomeIcon className="seller__wrapper_details-rating-svg" icon={faStar} />
            <span>53 отзыва</span>
          </div> */}
          <button className="seller__warpper-button">Сделать персональный заказ</button>
        </div>
      </div>
      <div className="seller__goods">
        <h3>Что можно приобрести</h3>
        <Goods goods={state.goodsCollection} />
      </div>
    </section>
  )
}