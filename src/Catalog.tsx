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
// import { useSearchParams } from "react-router-dom";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function Catalog() {
    const {
        data: goods = [] as GoodInterface[],
    } = useGetGoodsQuery();

    //sellers
    const sellersArray = goods.map((good) => {
        return good.seller.brandName;
    });

    // console.log(sellersArray);

    const sellersWithNoRepeats = [...new Set(sellersArray)];

    //state
    const [openedFilter, setOpenedFilter] = useState<boolean>(false);
    const [catalogGoods, setCatalogGoods] = useState<GoodInterface[]>(goods);
    // //search params
    // const [searchParams] = useSearchParams();
    // const paramsType = searchParams.get("type");
    // console.log(paramsType);

    //functions
    function applyFilters(goods:GoodInterface[]) {
        // setOpenedFilter(false);
        setCatalogGoods(goods);
    }

    useEffect(() => {
        goods.length > 0 && setCatalogGoods(goods);
    }, [goods])

    return (
        <section className="category">
            <div className="category__wrapper">
                <button onClick={() => {
                    setOpenedFilter(true);
                }}>
                    <FontAwesomeIcon icon={faSliders} />
                </button>
                <h3>Каталог</h3>
            </div>
            <Goods goods={catalogGoods}></Goods>
            {openedFilter && createPortal(<PortalComp left={true}>
                <button onClick={() => {
                    setOpenedFilter(false);
                }}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <PortalCentered>
                    <Filter goods={goods} sellers={sellersWithNoRepeats} applyFilters={applyFilters}></Filter>
                </PortalCentered>
            </PortalComp>, document.body)}
        </section>
    )
}