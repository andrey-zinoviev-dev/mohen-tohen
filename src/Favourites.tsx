import Goods from "./Goods";
import { useAppSelector } from "./hooks"
export default function Favourites() {
    const favsState = useAppSelector((state) => {
        return state.goods.favourties;
    });
    return (
        <section>
            <Goods category="избранное" goods={favsState}></Goods>
        </section>
    )
}