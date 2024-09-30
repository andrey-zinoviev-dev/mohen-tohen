import Welcome from "./Welcome"
import Brands from "./Brands"
import Collaboration from "./Collaboration"
import PromoSection from "./PromoSection"
import RandomGoods from "./RandomGoods"
import AboutPlatform from "./AboutPlatform"
import NewGoods from "./NewGoods"
// import
export default function HomeContent() {

    return (
        <>
            <Welcome></Welcome>    
            <AboutPlatform></AboutPlatform>
            <NewGoods></NewGoods>
            <PromoSection></PromoSection>
            <RandomGoods></RandomGoods>
            <Brands></Brands>
            <Collaboration></Collaboration>
        </>          
    )
}