// import Goods from "./Goods";
// // import { promoGoods } from "./utils";
// import { useGetGoodsQuery } from "./features/apiSlice";
// import { GoodInterface } from "./interfaces";

import { welcomeSlides } from "./utils";

export default function PromoSection() {
  // const {
  //   data: goods = [] as GoodInterface[],
  // } = useGetGoodsQuery();

  return (
    <section>
      <h3>Интересное</h3>
      <ul>
        {welcomeSlides.map((slide) => {
          return <li key={slide.cover}>
            <span>{slide.text}</span>
            <img src={slide.cover} alt="" />
          </li>
        })}
      </ul>
      {/* {goods && <Goods goods={goods}></Goods>} */}
    </section>
  )
}