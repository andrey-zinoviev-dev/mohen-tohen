import Welcome from "./Welcome"
import Goods from "./Goods"
import Brands from "./Brands"
import { promoGoods } from "./utils"
import { HomeContentInterface } from "./interfaces"
export default function HomeContent({setBasket}:HomeContentInterface) {
    return (
        <>
            <Welcome></Welcome>    
            <Goods category="Интересное" goods={promoGoods} setGoods={setBasket}></Goods>
            <Brands></Brands>
        </>          
    )
}