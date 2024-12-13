import { useGetCategoryQuery } from "./features/apiSlice";
import Goods from "./Goods";
import Headline from "./Headline";
import { GoodInterface } from "./interfaces";

export default function Services() {
    const {
        data: goods = [] as GoodInterface[]
    } = useGetCategoryQuery("Услуги");

    return (
        <section className="services">
            <Headline text="Наши персональные услуги" />
            <Goods goods={goods}>

            </Goods>
        </section>
    )
}