import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import "./Header.css";
import { useAppSelector } from "./hooks";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Header() {
    //redux state
    const basketState = useAppSelector((state) => {
        return state.basket;
    });
    const favouriteState = useAppSelector((state) => {
        return state.goods.favourties;
    })

    return (
        <header className="header">
            <form>
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                <input placeholder="Поиск"></input>
                {/* <button>найти</button> */}
            </form>
            <h3 className="header__headline">Mohen-Tohen</h3>
            <div>
                <Link to="../favs">
                    <FontAwesomeIcon icon={faHeart} />
                    <span>{favouriteState.length}</span>
                </Link>
                <button>Войти</button>
                <Link to="../basket">
                    <FontAwesomeIcon icon={faShoppingBag} />
                    <span>{basketState.goods.length}</span>
                </Link>
            </div>
        </header>
    )
}