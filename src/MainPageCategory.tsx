import "./MainPageCategory.css"
import Goods from "./Goods";
import { GoodInterface } from "./interfaces";
// import LinkCompAction from "./LinkCompAction";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function MainPageCategory({goods, href, title}: {goods: GoodInterface[], href: string, title: string}){
    console.log(goods);
    return (
        <section className="main-category">
            <div className="main-category__wrapper">
                <h3>{title}</h3>
                <Link to={href}>
                    Посмотреть все
                </Link>
                {/* <LinkCompAction text="Посмотреть все" transparent={true} to={href} icon={faArrowRight}></LinkCompAction> */}
            </div>
            <Goods goods={goods} />
        </section>
    )
}