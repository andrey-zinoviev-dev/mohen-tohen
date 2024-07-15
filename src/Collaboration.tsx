import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Collaboration.css"
export default function Collaboration () {
    return (
        <section className="collaboration">
            <h2>Вы дизайнер? Давайте сотрудничать!</h2>
            <div className="collaboration__wrapper">
                <form className="collaboration__form">
                    <input placeholder="ваша почта..."></input>
                    <input placeholder="ваше имя..."></input>
                    <button>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </form>
                <div className="collaboration__wrapper">
                    <p>По кнопке ниже Вы можете ознакомиться со всеми условиями сотрудичества с нами, чтобы люди быстрее смогли приобрести Ваши товары</p>
                    <button>
                        <span>Ознакомиться с условиями</span>
                    </button>
                </div>
            </div>
        </section>
    )
}