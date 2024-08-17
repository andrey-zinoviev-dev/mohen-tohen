import HomeStagingStep from "./HomeStagingStep";
import { stepsOfProcess } from "./utils";

export default function HomeStagingProcess() {
    return (
        <section>
            <h2>Процесс хоумстэйджинга</h2>
            <ul>
                {stepsOfProcess.map((step, index) => {
                    return <li key={step.title}>
                        <HomeStagingStep title={step.title} description={step.descirption} index={index + 1} />
                    </li>
                } )}
            </ul>
        </section>
    )
}