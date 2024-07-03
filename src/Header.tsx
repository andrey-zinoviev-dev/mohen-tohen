import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import "./Header.css";
import { useAppSelector } from "./hooks";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
export default function Header() {
    //redux state
    const basketState = useAppSelector((state) => {
        return state.basket;
    });
    const favouriteState = useAppSelector((state) => {
        return state.favourites
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
                <button>
                    <FontAwesomeIcon icon={faHeart} />
                    <span>{favouriteState.favouriteGoods}</span>
                </button>
                <button>Войти</button>
                <button onClick={() => {
                    console.log(basketState);
                }}>
                    <FontAwesomeIcon icon={faShoppingBag} />
                    <span>{basketState.goods.length}</span>
                </button>
            </div>
        </header>
    )
}