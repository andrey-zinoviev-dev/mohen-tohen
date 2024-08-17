import "./HomeStagingFooter.css";
import logo from "./assets/LOGO-02.png"
export default function HomeStagingFooter() {
  return (
    <footer className="homeStagingFooter">
      <img className="homeStagingFooter__logo" src={logo}></img>
      <ul>
        <li>
          <a>Маркетплейс</a>
        </li>
        <li>
          <a>Блог</a>
        </li>
      </ul>
      <ul>
        <span>Контакты</span>
        <li>
          Telegram
        </li>
        <li>
          VK
        </li>
        <li>
          Whatsapp
        </li>
      </ul>
    </footer>
  )
}