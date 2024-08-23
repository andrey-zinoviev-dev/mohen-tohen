import Goods from "./Goods";
import { useGetGoodsQuery } from "./features/apiSlice";

export default function RandomGoods() {
    const {
        data: goods,
    } = useGetGoodsQuery();

    return (
        <section>
            <h3>Что можно приобрести</h3>
            <Goods goods={goods}></Goods>
        </section>
    )
}