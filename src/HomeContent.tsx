import Welcome from "./Welcome"
import Goods from "./Goods"
import Brands from "./Brands"
import { useAppSelector } from "./hooks"
import Collaboration from "./Collaboration"

export default function HomeContent() {
    const promoGoodsState = useAppSelector((state) => {
        return state.goods.goods;
    });

    return (
        <>
            <Welcome></Welcome>    
            <Goods category="Интересное" goods={promoGoodsState}></Goods>
            <Brands></Brands>
            <Collaboration></Collaboration>
        </>          
    )
}