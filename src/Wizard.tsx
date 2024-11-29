import { useEffect, useState } from "react";
import "./Wizard.css"
// import Progress
import ProgressStep from "./ProgressStep";
import Progress from "./Progress";
export default function Wizard({children, submitForm}: {children: React.ReactNode[], submitForm: () => void}) {
    const [currentStep, setCurrentStep] = useState<number>(0);

    // console.log(currentStep);
    
    const stepToRender = Array.from(children)[currentStep];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentStep]);

    return (
        <>
            {/* <ul className="application__wrapper-progress">
                <li className="application__wrapper-progress-step">
                    <span className="application__wrapper-progress-step-index">01</span>
                    <div className="application__wrapper-progress-step-dash"></div>
                </li>
                <li className="application__wrapper-progress-step">
                    <span className="application__wrapper-progress-step-index">02</span>
                    <div className="application__wrapper-progress-step-dash"></div>
                </li>
                <li className="application__wrapper-progress-step">
                    <span className="application__wrapper-progress-step-index">03</span>
                    <div className="application__wrapper-progress-step-dash"></div>
                </li>
                <li className="application__wrapper-progress-step">
                    <span className="application__wrapper-progress-step-index">04</span>
                    <div className="application__wrapper-progress-step-dash"></div>
                </li>               
            </ul> */}
            <Progress>
                {Array.from(children).map((child, index) => {
                    console.log(child);
                    return <ProgressStep step={currentStep} index={index}></ProgressStep>
                })}
            </Progress>
            <form className="application__wrapper-form" onSubmit={(evt) => {
                evt.preventDefault();
                // console.log("submit form");
            }}>
                {stepToRender}
                {/* <h3>Вот тут будут шаги формы</h3>
                {children} */}
                <div className="wizard__buttons">
                    {<button className={currentStep < 1 ? "wizard__buttons-button wizard__buttons-button_hidden" : "wizard__buttons-button"} type="button" onClick={() => {
                        setCurrentStep((prevValue) => {
                            return prevValue - 1;
                        })
                    }}>Назад</button>}
                    
                    {currentStep === children.length -1 ? 
                    <button className="wizard__buttons-button" type="button" onClick={() => {
                        submitForm()
                    }}>
                        Отправить данные
                    </button>
                    :
                    <button className="wizard__buttons-button" type="button" onClick={() => {
                        currentStep === children.length - 1 ? console.log("submit form") : setCurrentStep((prevValue) => {
                            return prevValue + 1;
                        })
                    }}>Вперед</button>}
                </div>
            </form>
        </>

    )
}