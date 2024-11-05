import "./Catalog.css"
import Filter from "./Filter"
import Goods from "./Goods"
import { GoodInterface } from "./interfaces";
import { useGetGoodsQuery } from "./features/apiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { createPortal } from "react-dom";
import PortalComp from "./PortalComp";
import PortalCentered from "./PortalCentered";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function Catalog() {
    const {
        data: goods = [] as GoodInterface[],
    } = useGetGoodsQuery();

    //state
    const [openedFIlter, setOpenedFilter] = useState<boolean>(false);

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
            <Goods goods={goods}></Goods>
            {openedFIlter && createPortal(<PortalComp left={true}>
                <button onClick={() => {
                    setOpenedFilter(false);
                }}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <PortalCentered top={true}>
                    <Filter></Filter>
                </PortalCentered>
            </PortalComp>, document.body)}
        </section>
    )
}