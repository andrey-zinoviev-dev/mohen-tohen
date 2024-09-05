import React from "react";
import { useLocation } from "react-router-dom";
import { GoodInterface } from "./interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import AccountAddGood from "./AccountAddGood";
import "./AccountGoods.css";

export default function AccountGoods() {
    // console.log("yes");
    // const { data: goods } = useGetSellerQuery(); 
    const location = useLocation();
    // console.log(location.state);

    const state  = location.state as {goods: GoodInterface[], headline: string };

    // console.log(state);

    //state
    const [addNewGood, setAddNewGood] = React.useState<boolean>(false);

    return (
        <>
            <h3>{state.headline}</h3>
            {!addNewGood ? <ul className="accountGoods-ul">
                <li key={"new-good"}>
                    <button className="accountGoods-ul__btn" onClick={() => {
                        setAddNewGood(true);
                    }}>
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </button>
                    {/* <Link state={state} to={"addGood"}>
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </Link> */}
                </li>
            </ul>
            :
            <AccountAddGood close={setAddNewGood}>   
            </AccountAddGood>}
            {/* <Goods goods={state.goods}></Goods> */}
        </>
    )
}