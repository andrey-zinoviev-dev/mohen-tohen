import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import pic from "./assets/Frame 36-2.png";
import logo from "./assets/mh-1.png"
import pic from "./assets/creative-fengshui-practice-arrangement.jpg"
import "./HomeStaging.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { links } from "./utils";

export default function HomeStaging() {
    return (
        <section className="homestaging">
            <div className="homestaging__action">
                <div className="homestaging__action-text">
                    <img className="homestaging__logo" src={logo}></img>
                    <div className="homestaging__action-text-wrapper">
                        <h2>Превратите ваше жильё в объект <span className="homestaging__action-text-span">мечты</span> с нашим хоумстэйджингом!</h2>
                        <p>Вам не нужно волноваться о деталях — мы сделаем всё за вас, чтобы ваш дом выглядел безупречно.</p>
                        <button>
                            <span>Превратить ваше пространство в шедевр</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                    <ul className="homestaging__action-links">
                        {links.map((link) => {
                            return <li className="homestaging__action-links-link" key={link.name}>
                                <a href={link.href}>
                                    <span>{link.name}</span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </a>
                            </li>
                        })}
                    </ul>
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