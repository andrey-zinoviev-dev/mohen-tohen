import Welcome from "./Welcome"
import Brands from "./Brands"
import Collaboration from "./Collaboration"
import PromoSection from "./PromoSection"

export default function HomeContent() {

    return (
        <>
            <Welcome></Welcome>    
            <PromoSection></PromoSection>
            {/* <MainGoods></MainGoods> */}
            <Brands></Brands>
            <Collaboration></Collaboration>
        </>          
    )
}