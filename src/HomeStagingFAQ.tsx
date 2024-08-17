import HomeStagingQuestion from "./HomeStagingQuestion";
import "./HomeStagingFAQ.css";
import { questions } from "./utils";

export default function HomeStagingFAQ() {
    return (
        <section className="application-faq">
            <h2>Часто задаваемые <span>вопросы</span></h2>
            <ul className="application-faq__ul">
                {questions.map((question) => {
                    return <li key={question.question}>
                        <HomeStagingQuestion answer={question.answer} question={question.question}></HomeStagingQuestion>
                    </li>
                })}
                {/* <li>
                    <HomeStagingQuestion></HomeStagingQuestion>
                </li> */}
            </ul>
        </section>
    )
}