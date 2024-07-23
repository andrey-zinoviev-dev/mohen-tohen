import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Collaboration.css"
export default function Collaboration () {
    return (
        <section className="collaboration">
            <div className="collaboration__headline-wrapper">
                <h2>Вы дизайнер? Давайте сотрудничать!</h2>
                <a href="mailto:sttrog_810@mail.ru">
                    sttrog_810@mail.ru
                    <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </div>
            <div className="collaboration__wrapper">
                <h3>Данные для заявки</h3>
                <form className="collaboration__form">
                    <div className="collaboration__form-inputs">
                        <div className="colalboration__form-input-wrapper">
                            <label htmlFor="email">
                                Почта
                            </label>
                            <input id="email" placeholder="ваша почта..."></input>
                        </div>
                        <div className="colalboration__form-input-wrapper">
                            <label htmlFor="subject">
                                Направление
                            </label>
                            <input id="subject" placeholder="ваше направление..."></input>
                        </div>
                    </div>
                    <div className="collaboration__form-inputs">
                        <div className="colalboration__form-input-wrapper">
                            <label htmlFor="phone">
                                Почта
                            </label>
                            <input id="phone" placeholder="ваш телефон..."></input>
                        </div>
                        <div className="colalboration__form-input-wrapper">
                            <label htmlFor="name">
                                Почта
                            </label>
                            <input id="name" placeholder="ваше имя..."></input>
                        </div>
                    </div>
                    
                    <button>
                        <span>Отправить заявку </span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </form>
                {/* <div className="collaboration__wrapper">
                    <p>По кнопке ниже Вы можете ознакомиться со всеми условиями сотрудичества с нами, чтобы люди быстрее смогли приобрести Ваши товары</p>
                    <button>
                        <span>Ознакомиться с условиями</span>
                    </button>
                </div> */}
            </div>
        </section>
    )
}