import Welcome from "./Welcome"
import Brands from "./Brands"
import Collaboration from "./Collaboration"
import PromoSection from "./PromoSection"
import RandomGoods from "./RandomGoods"
// import
export default function HomeContent() {

    return (
        <>
            {/* <Welcome></Welcome>     */}
            <PromoSection></PromoSection>
            <RandomGoods></RandomGoods>
            <Brands></Brands>
            <Collaboration></Collaboration>
        </>          
    )
}