import "./ProgressStep.css"
export default function ProgressStep({step, index}: {step: number, index: number}){
    return (
        <li className={step === index ? "progress__li progress__li_active" : step > index ? "progress__li progress__li_completed" : "progress__li"}>
            <span className="progress__li-index">0{index + 1}</span>
            <div className="progress__li-dash"></div>
        </li>
    )
}