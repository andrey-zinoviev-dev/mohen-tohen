import { useState } from "react";
import "./Wizard.css"
export default function Wizard({children, submitForm}: {children: React.ReactNode[], submitForm: () => void}) {
    const [currentStep, setCurrentStep] = useState<number>(0);

    // console.log(currentStep);
    
    const stepToRender = Array.from(children)[currentStep];

    return (
        <form onSubmit={(evt) => {
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
    )
}