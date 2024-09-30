import "./Favourites.css"
import Goods from "./Goods";
import { useAppSelector } from "./hooks"
export default function Favourites() {
    const favsState = useAppSelector((state) => {
        return state.favourites.favouriteGoods;
    });
    return (
        // <div className={favsState.length > 0 ? "favs" : "favs favs_empty"}>
        //     <h3>Избранное</h3>
        //     <Goods goods={favsState}></Goods>
        // </div>
        <>
            <h3>Избранное</h3>
            <Goods goods={favsState}></Goods>
        </>
        // <section>
        //     <Goods category="избранное" goods={favsState}></Goods>
        // </section>
    )
}