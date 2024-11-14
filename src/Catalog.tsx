import "./Catalog.css"
import Filter from "./Filter"
import Goods from "./Goods"
import { GoodInterface } from "./interfaces";
import { useGetGoodsQuery } from "./features/apiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PortalComp from "./PortalComp";
import PortalCentered from "./PortalCentered";
import { useSearchParams } from "react-router-dom";
import Headline from "./Headline";
// import { useSearchParams } from "react-router-dom";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function Catalog() {
    const {
        data: goods = [] as GoodInterface[],
    } = useGetGoodsQuery();

    //search params
    const [searchParams] = useSearchParams();

    const urlOjb = (Object.fromEntries([...searchParams]));
    // console.log(urlOjb);
    //url conversion
    const urlConverted = Object.fromEntries(Object.entries(urlOjb).filter((entry) => {
        // console.log(entry);
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
    })) as {
        categories: string[],
        stock?: boolean,
        minPrice: number,
        maxPrice: number,
        colors: string[]
    };

    //sellers
    const sellersArray = goods.map((good) => {
        return good.seller.brandName;
    });

    // console.log(sellersArray);

    const sellersWithNoRepeats = [...new Set(sellersArray)];

    //state
    const [openedFilter, setOpenedFilter] = useState<boolean>(false);
    const [catalogGoods, setCatalogGoods] = useState<GoodInterface[]>(goods);

    //functions
    function applyFilters(goods:GoodInterface[]) {
        setCatalogGoods(goods);
    }

    // useEffect(() => {
    //     console.log()
    // }, [])

    useEffect(() => {
        if(goods.length > 0)  {
            // console.log(urlConverted)
            if(Object.entries(urlConverted).length > 0) {

                let resultArray = goods;

                if(urlConverted.categories && urlConverted.categories.length > 0) {
                    resultArray = resultArray.filter((good) => {
                        return urlConverted.categories && urlConverted.categories.find((category) => {
                            return category === good.category;
                        });
                    })
                }
                
                if(urlConverted.stock) {
                    resultArray = resultArray.filter((good) => {
                        return urlConverted.stock ? good.batch > 0 : good.batch === 0;
                    })
                }

                if(urlConverted.minPrice >= 1500) {
                    resultArray = resultArray.filter((good) => {
                        return good.price >= urlConverted.minPrice;
                    })
                }

                if(urlConverted.maxPrice <= 100000) {
                    // console.log('update goods max price here')
                    resultArray = resultArray.filter((good) => {
                        return good.price <= urlConverted.maxPrice;
                    })
                }

                if(urlConverted.colors && urlConverted.colors.length > 0) {
                    resultArray = resultArray.filter((good) => {
                        return urlConverted.colors && urlConverted.colors.find((color) => {
                            return color === good.color;
                        })
                    })
                }
                setCatalogGoods(resultArray);
            } else {
                setCatalogGoods(goods);
            }
        }

    }, [goods]);

    return (
        <section className="category">
            <div className="category__wrapper">
                <button onClick={() => {
                    setOpenedFilter(true);
                }}>
                    <FontAwesomeIcon icon={faSliders} />
                </button>
                <Headline text="Каталог"></Headline>
            </div>
            <Goods goods={catalogGoods}></Goods>
            {openedFilter && createPortal(<PortalComp left={true}>
                <button onClick={() => {
                    setOpenedFilter(false);
                }}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <PortalCentered>
                    <Filter urlConverted={urlConverted} goods={goods} sellers={sellersWithNoRepeats} closeFilter={setOpenedFilter} applyFilters={applyFilters}></Filter>
                </PortalCentered>
            </PortalComp>, document.body)}
        </section>
    )
}