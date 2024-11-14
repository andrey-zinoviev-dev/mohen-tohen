import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HomeStagingFooter.css";
import logo from "./assets/LOGO-02.png"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function HomeStagingFooter() {
  return (
    <footer className="homeStagingFooter">
      <div className="homeStagingFooter__text-wrapper">
        <img className="homeStagingFooter__logo" src={logo}></img>
        <p>Оживи пространство — твой идеальный декор на расстоянии клика!</p>
      </div>
      <ul className="homeStagingFooter__links">
        <li>
          <a href="../">
            Маркетплейс
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </li>
        <li>
          <a href="https://dzen.ru/mohen_tohen">
            Блог Дзен
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://t.me/MohenITohen">
            Telegram
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </li>
        <li>
          <a href="#">
            VK
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </li>
        <li>
          <a href="#">
            Pinterest
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </li>
      </ul>

    </footer>
  )
}