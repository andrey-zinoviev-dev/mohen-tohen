// import AllGoods from "./AllGoods";
import React from "react";
import Brands from "./Brands";
import Goods from "./Goods";
// import PromoGoods from "./PromoGoods";
import Welcome from "./Welcome";
import { HomeInterface } from "./interfaces";
import { promoGoods } from "./utils";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Home({basket}:HomeInterface) {
    // React.useEffect(() => {
    //     console.log(promoGoodsArray);
    // }, [promoGoodsArray])
    
    return (
        <>
            <Header basket={basket}></Header>
            <Outlet></Outlet>

            <Footer></Footer>
        </>
    )
}