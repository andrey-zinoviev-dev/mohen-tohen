import React from "react";
// import { useLocation } from "react-router-dom";
// import { GoodInterface } from "./interfaces";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// import AccountAddGood from "./AccountAddGood";
import "./AccountGoods.css";
// import AddButton from "./AddButton";
// import AddButtonState from "./AddButtonState";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import LinkCompAction from "./LinkCompAction";
import { useGetAccountGoodsQuery } from "./features/apiSlice";
import { GoodInterface, TransactionInterface } from "./interfaces";
import ListColumn from "./ListColumn";
export default function AccountGoods() {
    //RTK
    const {
        data: goods = [] as GoodInterface[]
    } = useGetAccountGoodsQuery()

    // console.log("yes");
    // const { data: goods } = useGetSellerQuery(); 
    // const location = useLocation();
    // console.log(location.state);

    // const state  = location.state as { headline: string };

    // console.log(state);

    //state
    // const [addNewGood, setAddNewGood] = React.useState<boolean>(false);

    return (
        <>
            <h3>Мои товары</h3>
            <LinkCompAction to="../AddGood" text="Добавить товар" icon={faPlusCircle} />
            {goods.length > 0 ? 
            
            <ListColumn>
                {goods.map((good:GoodInterface) => {
                    return <li key={good._id}>
                        <span className="list-column__id-span">{good._id}</span>
                        <div className="list-column__wrapper">
                            <div className="list-column__content-wrapper">
                                <img className="list-column__cover" src={good.cover}></img>
                                <div className="list-column__details-wrapper">
                                    <h3>{good.title}</h3>
                                    <div className="list-column__materials-wrapper">
                                        <span className="list-column__id-span">{good.material}</span>
                                        <span className="list-column__id-span">{good.dimensions}</span>
                                    </div>
                                </div>
                            </div>
                            <span className="list-column__price-span">{good.price}</span>
                        </div>
                    </li>
                })}
            </ListColumn>
            // goods.map((good) => {
            //         return <li key={good._id}>
            //             <img src={good.cover}></img>
            //             <h3>{good.title}</h3>
            //         </li>
            // })
                :
            <span>Товаров пока нет, но вы можете их добавить</span>
            }
            {/* <Link to={"../addGood"} className="addgoodbtn">
                <span>Добавить товар</span>
                <FontAwesomeIcon icon={faPlusCircle} />
            </Link> */}
        </>
    )
}