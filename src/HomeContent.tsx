import Welcome from "./Welcome"
import Goods from "./Goods"
import Brands from "./Brands"
import { promoGoods } from "./utils"
// import Collaboration from "./Collaboration"

export default function HomeContent() {
    return (
        <>
            <Welcome></Welcome>    
            <Goods category="Интересное" goods={promoGoods}></Goods>
            <Brands></Brands>
            {/* <Collaboration></Collaboration> */}
        </>          
    )
}