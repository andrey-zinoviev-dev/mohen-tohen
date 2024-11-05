// import Welcome from "./Welcome"
import Brands from "./Brands"
import Collaboration from "./Collaboration"
import PromoSection from "./PromoSection"
import RandomGoods from "./RandomGoods"
import AboutPlatform from "./AboutPlatform"
import NewGoods from "./NewGoods"
import PaidGoods from "./PaidGoods"
import MainPageCategory from "./MainPageCategory"
import { useGetGoodsQuery } from "./features/apiSlice"
import { GoodInterface } from "./interfaces"
// import
export default function HomeContent() {
    const {
        data: goods = [] as GoodInterface[],
    } = useGetGoodsQuery();

    return (
        <>
            {/* <Welcome></Welcome>     */}
            <PromoSection></PromoSection>
            <AboutPlatform></AboutPlatform>
            <MainPageCategory href={"catalog"} title="Горячие предложения" goods={goods}></MainPageCategory>
            <MainPageCategory href={"catalog"} title="Новинки" goods={goods} />
            <MainPageCategory href={"catalog"} title="Что можно приобрести" goods={goods} />
            {/* <PaidGoods></PaidGoods>
            <NewGoods></NewGoods>
            <RandomGoods></RandomGoods> */}
            <Brands></Brands>
            <Collaboration></Collaboration>
        </>          
    )
}