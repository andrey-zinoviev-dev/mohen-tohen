// import Welcome from "./Welcome"
import Brands from "./Brands"
import Collaboration from "./Collaboration"
import PromoSection from "./PromoSection"
// import RandomGoods from "./RandomGoods"
import AboutPlatform from "./AboutPlatform"
// import NewGoods from "./NewGoods"
import PaidGoods from "./PaidGoods"
import MainPageCategory from "./MainPageCategory"
import { useGetGoodsQuery } from "./features/apiSlice"
import { GoodInterface } from "./interfaces"
// import
export default function HomeContent() {
    const {
        data: goods = [] as GoodInterface[],
    } = useGetGoodsQuery();

    const goodsWithDates = goods.map((good) => {
        return {...good, createdAt: new Date(good.createdAt).getTime()}
    });
    // console.log(goodsWithDates);
    
    //paid goods
    // const newGoods = goods.sort((good) => {

    // });

    //new goods
    const newGoods = goodsWithDates.sort((good1, good2) => {
        return good2.createdAt - good1.createdAt;
    });

    return (
        <>
            {/* <Welcome></Welcome>     */}
            <PromoSection></PromoSection>
            <AboutPlatform></AboutPlatform>
            <PaidGoods></PaidGoods>
            {/* <MainPageCategory href={"catalog"} title="Горячие предложения" goods={goods}></MainPageCategory> */}
            <MainPageCategory href={"catalog"} title="Новинки" goods={newGoods} />
            <MainPageCategory href={"catalog"} title="Что можно приобрести" goods={goods} />
            {/* <PaidGoods></PaidGoods>
            <NewGoods></NewGoods>
            <RandomGoods></RandomGoods> */}
            <Brands></Brands>
            <Collaboration></Collaboration>
        </>          
    )
}