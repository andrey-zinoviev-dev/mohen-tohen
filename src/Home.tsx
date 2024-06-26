// import AllGoods from "./AllGoods";
import Brands from "./Brands";
import Goods from "./Goods";
// import PromoGoods from "./PromoGoods";
import Welcome from "./Welcome";

import { promoGoods } from "./utils";
export default function Home() {
    
    return (
        <>
            <Welcome></Welcome>
            <Goods category="Интересное" goods={promoGoods}></Goods>
            {/* <PromoGoods></PromoGoods>
            <AllGoods></AllGoods> */}
            <Brands></Brands>
        </>
    )
}