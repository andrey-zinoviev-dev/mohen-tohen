import { useState } from "react"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HomeStagingQuestion.css";

export default function HomeStagingQuestion() {
    //state
    const [answer, setAnswer] = useState<boolean>(false);
    return (
        <>
            <div className="faq__question">
                <span>Вопрос</span>
                <button onClick={() => {
                    setAnswer((prevValue) => {
                        return !prevValue;
                    })
                }}>
                    <FontAwesomeIcon icon={faPlusCircle} />
                </button>
            </div>
            {answer && <span className="faq__answer">Ответ</span>}
        </>
    )
}