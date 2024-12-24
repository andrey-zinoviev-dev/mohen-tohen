import "./Favourites.css"
import Good from "./Good";
// import Goods from "./Goods";
import { useAppSelector } from "./hooks"
// import { GoodInterface } from "./interfaces";
import ListElementGeneric from "./ListElementGeneric";
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
            {/* <h3>Избранное</h3> */}
            {<ListElementGeneric classUl="goods__ul" items={favsState} renderItems={(favItem) => {
                return <Good good={favItem} />
            }} />}
            {/* <Goods goods={favsState}></Goods> */}
        </>
        // <section>
        //     <Goods category="избранное" goods={favsState}></Goods>
        // </section>
    )
}