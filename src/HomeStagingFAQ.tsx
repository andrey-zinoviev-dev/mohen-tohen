import HomeStagingQuestion from "./HomeStagingQuestion";
import "./HomeStagingFAQ.css";

export default function HomeStagingFAQ() {
    return (
        <section className="application-faq">
            <h2>Часто задаваемые вопросы (и <span>ответы</span> на них)</h2>
            <ul className="application-faq__ul">
                <li>
                    <HomeStagingQuestion></HomeStagingQuestion>
                </li>
            </ul>
        </section>
    )
}