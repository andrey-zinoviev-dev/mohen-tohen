import HomeStagingStep from "./HomeStagingStep";
import { stepsOfProcess } from "./utils";
import "./HomeStagingProcess.css";

export default function HomeStagingProcess() {
    return (
        <section className="process">
            <h2><span>Процесс</span> хоумстэйджинга</h2>
            <ul className="process__ul">
                {stepsOfProcess.map((step, index) => {
                    return <li key={step.title}>
                        <HomeStagingStep title={step.title} description={step.descirption} index={index + 1} />
                    </li>
                } )}
            </ul>
        </section>
    )
}