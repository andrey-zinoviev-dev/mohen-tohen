import Goods from "./Goods";
// import { promoGoods } from "./utils";
import { useGetGoodsQuery } from "./features/apiSlice";
import { GoodInterface } from "./interfaces";

export default function PromoSection() {
  const {
    data: goods = [] as GoodInterface[],
  } = useGetGoodsQuery();

  return (
    <section>
      <h3>Интересное</h3>
      {goods && <Goods goods={goods}></Goods>}
    </section>
  )
}