import AllGoods from "./AllGoods";
import Brands from "./Brands";
import Footer from "./Footer";
import PromoGoods from "./PromoGoods";
import Welcome from "./Welcome";

export default function Home() {
    return (
        <main>
            <Welcome></Welcome>
            <PromoGoods></PromoGoods>
            <AllGoods></AllGoods>
            <Brands></Brands>
        </main>
    )
}