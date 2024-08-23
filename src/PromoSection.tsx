import Goods from "./Goods";
// import { promoGoods } from "./utils";
import { useGetGoodsQuery } from "./features/apiSlice";

export default function PromoSection() {
  const {
    data: goods,
  } = useGetGoodsQuery();

  return (
    <section>
      <h3>Интересное</h3>
      {goods && <Goods goods={goods}></Goods>}
    </section>
  )
}