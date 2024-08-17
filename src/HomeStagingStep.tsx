import "./HomeStagingStep.css";

export default function HomeStagingStep({index, title, description}: {index: number, title: string, description?: string}) {
    return (
        <>
            <span className="step-span">0{index}</span>
            <h3 className="step-header">{title}</h3>
            <span className="step-description">{description}</span>
            {/* <button></button> */}
        </>
    )
}