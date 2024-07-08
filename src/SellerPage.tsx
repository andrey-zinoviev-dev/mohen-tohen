import { useLocation } from "react-router-dom"
import { BrandsInterface } from "./interfaces";
import Goods from "./Goods";
export default function SellerPage() {
  const location = useLocation();
  const state = location.state as BrandsInterface;
  console.log(state);
  return (
    <section>
      <img src={state.cover}></img>
      <h3>{state.name}</h3>
      <p>{state.description}</p>
      <Goods category="Что можно приобрести" goods={state.goodsCollection} />
    </section>
  )
}