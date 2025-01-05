// import React from "react";
// import { useLocation } from "react-router-dom";
// import { GoodInterface } from "./interfaces";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// import AccountAddGood from "./AccountAddGood";
import "./AccountGoods.css";
// import AddButton from "./AddButton";
// import AddButtonState from "./AddButtonState";
import LinkCompAction from "./LinkCompAction";
// import { useUpdateGoodBatchMutation } from "./features/apiSlice";
import { GoodInterface } from "./interfaces";
import ListColumn from "./ListColumn";
// import { createPortal } from "react-dom";
// import PortalComp from "./PortalComp";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import InputEl from "./InputEl";
// import FormEl from "./FormEl";
import { useAppSelector } from "./hooks";
// import ColorOption from "./ColorOption";
// import NonSizeOption from "./NonSizeOption";
// import ListElementGeneric from "./ListElementGeneric";
// import { changeMessage } from "./features/notificationSlice";
// import { updateAccountGoodBatch } from "./features/userSlice";
// import PortalCentered from "./PortalCentered";
export default function AccountGoods() {
    //dispatch
    // const dispatch = useAppDispatch();

    //redux
    const accountGoods = useAppSelector((state) => {
        return state.user.goods;
    });
    // console.log(accountGoods);
    const sortedArray = accountGoods && [...accountGoods].reverse();
    // console.log(sortedArray);
    //RTK
    // const {
    //     data: goods = [] as GoodInterface[]
    // } = useGetAccountGoodsQuery();

    // const [updateBatch] = useUpdateGoodBatchMutation();

    // console.log("yes");
    // const { data: goods } = useGetSellerQuery(); 
    // const location = useLocation();
    // console.log(location.state);

    // const state  = location.state as { headline: string };

    // console.log(state);

    //state
    // const [addNewGood, setAddNewGood] = React.useState<boolean>(false);
    // const [newBatch, setNewBatch] = React.useState<{batch: number}>({batch: 0});
    // const [goodId, setGoodId] = React.useState<string | null>(null);

    //functions
    // function submitForm() {
    //     goodId && updateBatch({id: goodId, batchSize: newBatch.batch})
    //     .then((data) => {
    //         if(data.data?.updatedBatch) {
    //             dispatch(updateAccountGoodBatch({id: goodId, batchSize: data.data?.updatedBatch}))
    //             dispatch(changeMessage({message: "Остаток товара обновлен!"}));
    //             setGoodId(null);
    //         }
    //     })
    // }

    // React.useEffect(() => {
    //     goods.length > 0 && dispatch()
    //     console.log(goods);
    // }, [goods])

    return (
        <>
            {/* <h3>Мои товары</h3> */}
            <LinkCompAction to="../AddGood" text="Добавить товар" />
            {accountGoods && accountGoods.length > 0 ? 
            
            <ListColumn>
                {sortedArray && sortedArray.map((good:GoodInterface) => {
                    return <li key={good._id}>
                        {/* <span className="list-column__id-span">{good._id}</span> */}
                        <div className="account-goods__item-wrapper">
                            <div className="account-goods__item-title-wrapper">
                                <img className="account-goods__item-cover" src={good.photos[0]}></img>
                                <div className="account-goods__item-details">
                                    <h3>{good.title}</h3>
                                    <span>Наличие: {good.batch}</span>
    
                                </div>
                                
                            </div>
                           

                            
                            <div className="list-column__price-wrapper">
                                <span className="list-column__price-span">{good.price}</span>
                                <LinkCompAction state={good} to={`../goods/${good._id}/edit`} text="Редактировать" />
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
            {/* {goodId && createPortal(<PortalComp> */}
                {/* <button onClick={() => {
                    setGoodId(null);
                }}>
                    <FontAwesomeIcon icon={faXmarkCircle} />
                </button> */}
                {/* <PortalCentered>
                    <h3>Обновить тираж товара</h3>
                    <FormEl submitForm={submitForm}>
                        <label>
                            <InputEl name="batch" updateState={setNewBatch} placeHolder="3"/>
                        </label>
                        <button className="form__button-batch-submit">
                            Обновить тираж
                        </button>
                    </FormEl>
                </PortalCentered> */}
                
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
            {/* </PortalComp>, document.body)} */}
        </>
    )
}