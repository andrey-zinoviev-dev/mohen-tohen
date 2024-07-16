import Goods from "./Goods";
import { useAppSelector } from "./hooks"
export default function Favourites() {
    const favsState = useAppSelector((state) => {
        return state.goods.favourties;
    });
    return (
        <div>
            <h3>Избранное</h3>
            <Goods goods={favsState}></Goods>
        </div>
        // <section>
        //     <Goods category="избранное" goods={favsState}></Goods>
        // </section>
    )
}