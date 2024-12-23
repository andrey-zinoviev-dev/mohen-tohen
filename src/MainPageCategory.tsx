import "./MainPageCategory.css"
// import Goods from "./Goods";
import { GoodInterface } from "./interfaces";
// import LinkCompAction from "./LinkCompAction";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Headline from "./Headline";
// import ListElementGeneric from "./ListElementGeneric";
import Goods from "./Goods";
export default function MainPageCategory({goods, title}: {goods: GoodInterface[], href: string, title: string}){
    // console.log(goods);
    return (
        <section className="main-category">
            <Headline text={title}></Headline>
            {/* <ListElementGeneric items={goods} classUl="goods__ul" renderItems={(good) => {
                return <Good good={good}></Good>
            }}></ListElementGeneric> */}
            <Goods goods={goods} />
        </section>
    )
}