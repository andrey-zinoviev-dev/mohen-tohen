// import AllGoods from "./AllGoods";
import React from "react";
import Brands from "./Brands";
import Goods from "./Goods";
// import PromoGoods from "./PromoGoods";
import Welcome from "./Welcome";
import { GoodInterface } from "./interfaces";
import { promoGoods } from "./utils";
export default function Home() {

    const [promoGoodsArray, setPromoGoodsArray] = React.useState<GoodInterface[]>(promoGoods)

    // React.useEffect(() => {
    //     console.log(promoGoodsArray);
    // }, [promoGoodsArray])
    
    return (
        <>
            <Welcome></Welcome>
            <Goods category="Интересное" goods={promoGoodsArray}></Goods>
            <Brands></Brands>
        </>
    )
}