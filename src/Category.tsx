import { useParams } from "react-router-dom";
// import Headline from "./Headline";
import { categories } from "./utils";
import Catalog from "./Catalog";
import "./Category.css"
import { useGetGoodsQuery } from "./features/apiSlice";
import { useEffect, useState } from "react";
import { GoodInterface } from "./interfaces";
import Goods from "./Goods";
export default function Category() {
  const params = useParams();
  
  const categoryName = params.categoryName as string;

  const categoryCover = categories.find((category) => {
    return category.title === categoryName;
  })?.cover;

  const {
      data: goods = [] as GoodInterface[],
  } = useGetGoodsQuery();

  //state
  const [categoryGoods, setCategoryGoods] = useState<GoodInterface[]>([]);

  useEffect(() => {
    if(goods.length > 0) {
      const filteredGoods = goods.filter((good) => {
        return good.category === categoryName;
      })
      setCategoryGoods(filteredGoods);
    }
  }, [goods])

  return (
    <section className="category">
      <img className="category__cover" src={categoryCover}></img>
      <Goods goods={categoryGoods}></Goods>
      {/* <Headline text="Что можно приобрести"></Headline> */}
      {/* <Catalog></Catalog> */}
    </section>
  )
}