import "./MainPageCategory.css"
import Goods from "./Goods";
import { GoodInterface } from "./interfaces";
// import LinkCompAction from "./LinkCompAction";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Headline from "./Headline";
export default function MainPageCategory({goods, title}: {goods: GoodInterface[], href: string, title: string}){
    // console.log(goods);
    return (
        <section className="main-category">
            <Headline text={title}></Headline>
            <Goods goods={goods} />
        </section>
    )
}