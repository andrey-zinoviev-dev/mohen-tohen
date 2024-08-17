import { useState } from "react"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HomeStagingQuestion.css";

export default function HomeStagingQuestion({question, answer}: {question: string, answer: string}) {
    //state
    const [answerClicked, setAnswerClicked] = useState<boolean>(false);
    return (
        <>
            <button onClick={() => {
                setAnswerClicked((prevValue) => {
                    return !prevValue;
                })
            }} className="faq__question">
                <span>{question}</span>
                <FontAwesomeIcon icon={faPlusCircle} />
            </button>
            {answerClicked && <div className="faq__answer">
                <span>{answer}</span>
            </div>}
        </>
    )
}