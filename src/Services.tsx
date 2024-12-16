import { useGetCategoryQuery } from "./features/apiSlice";
import Good from "./Good";
import Goods from "./Goods";
import Headline from "./Headline";
import { GoodInterface } from "./interfaces";
import ListElementGeneric from "./ListElementGeneric";

export default function Services() {
    const {
        data: goods = [] as GoodInterface[]
    } = useGetCategoryQuery("Услуги");

    return (
        <section className="services">
            <Headline text="Наши персональные услуги" />
            <ListElementGeneric classUl="goods__ul" items={goods} renderItems={(good: GoodInterface) => {
                return <Good good={good} />
            }} />
            {/* <Goods goods={goods}>

            </Goods> */}
        </section>
    )
}