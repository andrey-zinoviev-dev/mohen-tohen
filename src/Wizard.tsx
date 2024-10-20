import { useState } from "react";

export default function Wizard({children}: {children: React.ReactNode[]}) {
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
            <div>
                {currentStep > 0 && <button type="button" onClick={() => {
                    setCurrentStep((prevValue) => {
                        return prevValue - 1;
                    })
                }}>Назад</button>}
                
                {currentStep === children.length -1 ? 
                <button type="button" onClick={() => {
                    console.log("submit application");
                }}>
                    Отправить данные
                </button>
                :
                <button type="button" onClick={() => {
                    currentStep === children.length - 1 ? console.log("submit form") : setCurrentStep((prevValue) => {
                        return prevValue + 1;
                    })
                }}>Вперед</button>}
            </div>
        </form>
    )
}