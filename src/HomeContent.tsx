// import Welcome from "./Welcome"
import Brands from "./Brands"
import Collaboration from "./Collaboration"
import PromoSection from "./PromoSection"
import RandomGoods from "./RandomGoods"
import AboutPlatform from "./AboutPlatform"
import NewGoods from "./NewGoods"
import PaidGoods from "./PaidGoods"
// import
export default function HomeContent() {

    return (
        <>
            {/* <Welcome></Welcome>     */}
            <PromoSection></PromoSection>
            <AboutPlatform></AboutPlatform>
            <PaidGoods></PaidGoods>
            <NewGoods></NewGoods>
            <RandomGoods></RandomGoods>
            <Brands></Brands>
            <Collaboration></Collaboration>
        </>          
    )
}