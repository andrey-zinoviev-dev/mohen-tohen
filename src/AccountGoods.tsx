import React from "react";
// import { useLocation } from "react-router-dom";
// import { GoodInterface } from "./interfaces";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// import AccountAddGood from "./AccountAddGood";
import "./AccountGoods.css";
// import AddButton from "./AddButton";
// import AddButtonState from "./AddButtonState";
import { faPlusCircle, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import LinkCompAction from "./LinkCompAction";
import { useGetAccountGoodsQuery } from "./features/apiSlice";
import { GoodInterface } from "./interfaces";
import ListColumn from "./ListColumn";
import { createPortal } from "react-dom";
import PortalComp from "./PortalComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputEl from "./InputEl";
import FormEl from "./FormEl";
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
    const [addNewGood, setAddNewGood] = React.useState<boolean>(false);
    const [newBatch, setNewBatch] = React.useState<number>(0);

    //functions
    function submitForm() {
        console.log("submit batch");
        console.log(newBatch);
    }

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
                            <span>Наличие: {good.batch}</span>
                            <div className="list-column__price-wrapper">
                                <span className="list-column__price-span">{good.price}</span>
                                <button onClick={() => {
                                    setAddNewGood(true);
                                }}>
                                    Обновить наличие
                                </button>
                            </div>
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
            {addNewGood && createPortal(<PortalComp>
                <button onClick={() => {
                    setAddNewGood(false);
                }}>
                    <FontAwesomeIcon icon={faXmarkCircle} />
                </button>
                <FormEl submitForm={submitForm}>
                    <label>
                        <InputEl name="batch" updateState={setNewBatch} placeHolder="3"/>
                    </label>
                    <button>
                        Обновить тираж
                    </button>
                </FormEl>
                {/* <form onSubmit={(evt) => {
                    evt.preventDefault();
                    console.log(newBatch);
                }}>
                    <label>
                        <InputEl name="batch" updateState={setNewBatch} placeHolder="3"/>
                    </label>
                    <button>
                        Обновить тираж
                    </button>
                </form> */}
            </PortalComp>, document.body)}
        </>
    )
}