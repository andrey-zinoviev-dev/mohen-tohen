import { GoodInterface } from "./interfaces";
import { useGetGoodsQuery } from "./features/apiSlice";
import Good from "./Good";
import ListOverflow from "./ListOverflow";
export default function PaidGoods() {
    const {
        data: goods = [] as GoodInterface[],
    } = useGetGoodsQuery();
    return (
        <section>
            <h3>
                Горячие предолжения
            </h3>
            <ListOverflow listItems={goods}>
                {/* {goods.map((good) => {
                    return <li key={good._id}>
                        <Good good={good} />
                    </li>
                })} */}
            </ListOverflow>
        </section>
    )
}