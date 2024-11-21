import { useParams } from "react-router-dom";
import Headline from "./Headline";
import { categories } from "./utils";
// import Catalog from "./Catalog";
import "./Category.css"
import { useGetCategoryQuery } from "./features/apiSlice";
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

  const category = categories.find((category) => {
    return category.title === categoryName;
  });

  const {
      data: goods = [] as GoodInterface[],
  } = useGetCategoryQuery(categoryName!);

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
       if(key === "subcategories") {
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
          if(Object.entries(urlConverted).length > 0) {
          let resultArray = goods;

          if(urlConverted.subcategories && urlConverted.subcategories.length > 0) {
            resultArray = resultArray.filter((good) => {
                return urlConverted.subcategories && urlConverted.subcategories.find((category) => {
                    return category === good.category;
                });
            })
        }
        
        if(urlConverted.stock) {
          resultArray = resultArray.filter((good) => {
                return urlConverted.stock ? good.batch > 0 : good.batch === 0;
            })
        }

        if(urlConverted.minPrice && urlConverted.minPrice >= 1500) {
          resultArray = resultArray.filter((good) => {
                return urlConverted.minPrice && good.price >= urlConverted.minPrice;
            })
        }

        if(urlConverted.maxPrice && urlConverted.maxPrice <= 100000) {
            // console.log('update goods max price here')
            resultArray = resultArray.filter((good) => {
                return urlConverted.maxPrice && good.price <= urlConverted.maxPrice;
            })
        }

        if(urlConverted.colors && urlConverted.colors.length > 0) {
          resultArray = resultArray.filter((good) => {
                return urlConverted.colors && urlConverted.colors.find((color) => {
                    return color === good.color;
                })
            })
        }
        setCategoryGoods(resultArray);
      } else {
        setCategoryGoods(goods);

      }
    }
  }, [goods]);

  // useEffect(() => {
  //   if(Object.entries(urlConverted).length > 0) {
  //       let resultArray = categoryGoods;

  //       if(urlConverted.subcategories && urlConverted.subcategories.length > 0) {
  //         resultArray = resultArray.filter((good) => {
  //             return urlConverted.subcategories && urlConverted.subcategories.find((category) => {
  //                 return category === good.category;
  //             });
  //         })
  //     }
      
  //     if(urlConverted.stock) {
  //       resultArray = resultArray.filter((good) => {
  //             return urlConverted.stock ? good.batch > 0 : good.batch === 0;
  //         })
  //     }

  //     if(urlConverted.minPrice && urlConverted.minPrice >= 1500) {
  //       resultArray = resultArray.filter((good) => {
  //             return urlConverted.minPrice && good.price >= urlConverted.minPrice;
  //         })
  //     }

  //     if(urlConverted.maxPrice && urlConverted.maxPrice <= 100000) {
  //         // console.log('update goods max price here')
  //         resultArray = resultArray.filter((good) => {
  //             return urlConverted.maxPrice && good.price <= urlConverted.maxPrice;
  //         })
  //     }

  //     if(urlConverted.colors && urlConverted.colors.length > 0) {
  //       filteredGoods = resultArray.filter((good) => {
  //             return urlConverted.colors && urlConverted.colors.find((color) => {
  //                 return color === good.color;
  //             })
  //         })
  //     }
  //   }
  // }, [categoryGoods]);

  return (
    <section className="category">
      <img className="category__cover" src={category?.cover}></img>
      <div className="category__wrapper">
        <Headline text="Что можно приобрести"></Headline>
        <button className="category__wrapper-button" onClick={() => {
          setOpenedFilter(true);
        }}>
          <FontAwesomeIcon icon={faSliders} />
        </button>
        {/* <Filter applyFilters={applyFilters} closeFilter={setOpenedFilter} urlConverted={urlConverted} goods={goods}></Filter> */}
      </div>
      <Goods goods={categoryGoods}></Goods>
      {/* <Headline text="Что можно приобрести"></Headline> */}
      {/* <Catalog></Catalog> */}
      {openedFilter && createPortal(<PortalComp>
        <button onClick={() => {
          setOpenedFilter(false);
        }}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <PortalCentered>
          <Filter subcategories={category?.subcategories} applyFilters={applyFilters} closeFilter={setOpenedFilter} urlConverted={urlConverted} goods={goods}></Filter>
        </PortalCentered>
      </PortalComp>, document.body)}
    </section>
  )
}