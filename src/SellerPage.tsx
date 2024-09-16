import { useLocation, useParams } from "react-router-dom"
import { BrandsInterface } from "./interfaces";
import "./SellerPage.css";
import Goods from "./Goods";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { useGetSellerQuery } from "./features/apiSlice";
import { UserInterface } from "./features/userSlice";

export default function SellerPage() {
  const { brandID } = useParams();
  // console.log(brandID);
  // const location = useLocation();
  // const state = location.state as BrandsInterface;
  // console.log(state);
  const {
    data: brand = {} as UserInterface,

  } = useGetSellerQuery(brandID!);

  console.log(brand);

  return (
    <section className="seller">
      <div className="seller__warpper">
        <img className="seller__warpper-img" src={""}></img>
        <div className="seller__wrapper_details">
          <h3>{brand && brand.name}</h3>
          <p>{brand && brand.description}</p>

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
        <Goods goods={brand && brand.goods} />
      </div>
    </section>
  )
}