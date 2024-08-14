import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from "./assets/Frame 36-2.png";
// import pic from "./assets/creative-fengshui-practice-arrangement.jpg"
import "./HomeStaging.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HomeStaging() {
    return (
        <section className="homestaging">
            <div className="homestaging__action">
                <div className="homestaging__action-text">
                    <h2>Превратите ваше жильё в объект <span className="homestaging__action-text-span">мечты</span> с нашим хоумстэйджингом!</h2>
                    <p>Вам не нужно волноваться о деталях — мы сделаем всё за вас, чтобы ваш дом выглядел безупречно.</p>
                    <button>
                        <span>Превратить ваше пространство в шедевр</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                <img className="homestaging__action-img" src={pic}></img>
            </div>
            {/* <div>
                <p>Вот тут миссия и видение услуг</p>
            </div>
            <div>
                <p>Вот тут услуги</p>
            </div>
            <div>
                <p>Вот тут кейсы</p>
            </div>
            <div>
                <p>Вот тут часто задаваемые вопросы и ответы на них</p>
            </div> */}
        </section>
    )
}