import HomeStagingAction from "./HomeStagingAction";
import HomeStagingFAQ from "./HomeStagingFAQ";
import HomeStagingFooter from "./HomeStagingFooter";
// import HomeStagingForm from "./HomeStagingForm";
import HomeStagingProcess from "./HomeStagingProcess";
import HomeStagingServices from "./HomeStagingServices";
// import { useAppSelector } from "./hooks";

export default function HomeStaging() {


    return (
        <>
            <HomeStagingAction></HomeStagingAction>
            <HomeStagingServices></HomeStagingServices>
            <HomeStagingProcess></HomeStagingProcess>
            <HomeStagingFAQ></HomeStagingFAQ>
            <HomeStagingFooter></HomeStagingFooter>
        </>
        
    )
}