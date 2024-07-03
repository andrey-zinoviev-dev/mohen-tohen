import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./GoodPage.css"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { useLocation } from "react-router-dom"
import { GoodInterface } from "./interfaces";
export default function GoodPage() {
    const location = useLocation();
    const state = location.state as GoodInterface;

    return (
        <section className="good">
            <img className="img" src={state.cover}></img>
            <div className="good__text">
                <div className="line1"> 
                    <h3>{state.title}</h3>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <span>{state.price}</span>
                <span>{state.seller.name}</span>
                <h5>Цвет-<span className="cvet">угольный</span></h5>
                <button className="butt">
                    <span>Добавить в корзину</span>
                </button>
            </div>
        </section>
    )
}