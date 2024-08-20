import HomeStagingAction from "./HomeStagingAction";
import HomeStagingFAQ from "./HomeStagingFAQ";
import HomeStagingFooter from "./HomeStagingFooter";
// import HomeStagingForm from "./HomeStagingForm";
import HomeStagingProcess from "./HomeStagingProcess";
import HomeStagingServices from "./HomeStagingServices";
// import { useAppSelector } from "./hooks";
import Spline from "@splinetool/react-spline"

export default function HomeStaging() {


    return (
        <>
            <HomeStagingAction></HomeStagingAction>
            <HomeStagingServices></HomeStagingServices>
            <HomeStagingProcess></HomeStagingProcess>
            <HomeStagingFAQ></HomeStagingFAQ>
            <Spline scene="https://prod.spline.design/iGAaCt8eAkF-D8Zm/scene.splinecode"></Spline>
            <HomeStagingFooter></HomeStagingFooter>
        </>
        
    )
}