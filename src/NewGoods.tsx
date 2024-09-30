import Goods from "./Goods";
import { useGetGoodsQuery } from "./features/apiSlice";
import { GoodInterface } from "./interfaces";

export default function NewGoods() {
    const {
        data: goods = [] as GoodInterface[],
    } = useGetGoodsQuery();

    return (
        <section>
            <h3>Новое</h3>
            <Goods goods={goods}></Goods>
        </section>
    )
}