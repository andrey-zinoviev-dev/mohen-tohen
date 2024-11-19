import { useParams } from "react-router-dom";
import Headline from "./Headline";
import { categories } from "./utils";
import Catalog from "./Catalog";
import "./Category.css"
import { useGetGoodsQuery } from "./features/apiSlice";
import { useEffect, useState } from "react";
import { GoodInterface } from "./interfaces";
import Goods from "./Goods";
import Filter from "./Filter";
import { useSearchParams } from "react-router-dom";
import { urlConvertedInterface } from "./interfaces";
import { createPortal } from "react-dom";
import PortalComp from "./PortalComp";
import PortalCentered from "./PortalCentered";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faSliders } from "@fortawesome/free-solid-svg-icons";
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
  const [openedFilter, setOpenedFilter] = useState<boolean>(false);

  //search params
  const [searchParams] = useSearchParams();

  const urlOjb = (Object.fromEntries([...searchParams]));
   // console.log(urlOjb);
   //url conversion
  const urlConverted = Object.fromEntries(Object.entries(urlOjb).filter((entry) => {
    return entry[1].length > 0;
  }).map(([key, value]) => {
       if(key === "categories") {
           return [key, value === "" ? [] : value.split(",")];
       }
       if(key === "stock") {
           return [key, value === "false" ? false : true];
           // console.log(Boolean(value));
       }
       if(key === 'colors') {
           return [key, value === "" ? [] : value.split(",")]
           // console.log(value.split(","));
       }
       if(key === 'minPrice') {
          return [key, +value];
       }
       if(key=== "maxPrice") {
           return [key, +value];
       }
       return [key, value.split(",")]
  })) as urlConvertedInterface;

  //functions
  function applyFilters(goods:GoodInterface[]) {
    setCategoryGoods(goods);
  }

  useEffect(() => {
    if(goods.length > 0) {
      const filteredGoods = goods.filter((good) => {
        return good.category === categoryName;
      });
      setCategoryGoods(filteredGoods);
    }
  }, [goods])

  return (
    <section className="category">
      <img className="category__cover" src={categoryCover}></img>
      <div className="category__wrapper">
        <Headline text="Что можно приобрести"></Headline>
        <button onClick={() => {
          setOpenedFilter(true);
        }}>
          <FontAwesomeIcon icon={faSliders} />
        </button>
        {/* <Filter applyFilters={applyFilters} closeFilter={setOpenedFilter} urlConverted={urlConverted} goods={goods}></Filter> */}
      </div>
      <Goods goods={categoryGoods}></Goods>
      {/* <Headline text="Что можно приобрести"></Headline> */}
      {/* <Catalog></Catalog> */}
      {openedFilter && createPortal(<PortalComp left={true}>
        <button onClick={() => {
          setOpenedFilter(false);
        }}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <PortalCentered>
          <Filter applyFilters={applyFilters} closeFilter={setOpenedFilter} urlConverted={urlConverted} goods={categoryGoods}></Filter>
        </PortalCentered>
      </PortalComp>, document.body)}
    </section>
    
  )
}