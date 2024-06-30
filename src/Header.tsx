import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import "./Header.css";

import { HeaderInterface } from "./interfaces";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
export default function Header({basket}: HeaderInterface) {
    return (
        <header className="header">
            <form>
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                <input placeholder="Поиск"></input>
                {/* <button>найти</button> */}
            </form>
            <h3 className="header__headline">Mohen-Tohen</h3>
            <div>
                <button>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <button>Войти</button>
                <button>
                    <FontAwesomeIcon icon={faShoppingBag} />
                    <span>{basket.length}</span>
                </button>
            </div>
        </header>
    )
}