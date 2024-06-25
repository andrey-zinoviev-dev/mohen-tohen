import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <form>
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                <input placeholder="Поиск"></input>
                {/* <button>найти</button> */}
            </form>
            <h3 className="header__headline">Mohen-Tohen</h3>
            <div>
                <button>Войти</button>
                <button>
                    <FontAwesomeIcon icon={faShoppingBag} />
                </button>
            </div>
        </header>
    )
}