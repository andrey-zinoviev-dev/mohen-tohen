import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Welcome.css"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

export default function Welcome() {
    return (
        <>
            <section className="welcome">
                <h1>Оживи пространство — твой идеальный декор на расстоянии клика!</h1>
                {/* <h1>Украсить интерьер - это легко с Mohen | Tohen</h1> */}
                <button className="welcome__button">
                    <span>Приступить к украшению</span> 
                    <FontAwesomeIcon icon={faArrowDown} />
                </button>
            </section>
        </>
    )
}