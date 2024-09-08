import React from "react";
// import { useLocation } from "react-router-dom";
// import { GoodInterface } from "./interfaces";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// import AccountAddGood from "./AccountAddGood";
import "./AccountGoods.css";
// import AddButton from "./AddButton";
// import AddButtonState from "./AddButtonState";
import ListGrid from "./ListGrid";
import { useAppSelector } from "./hooks";

export default function AccountGoods() {
    //redux
    const userGoods = useAppSelector((state) => {
        return state.user.goods;
    })
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
            {userGoods && userGoods.length > 0 ? 
            
                userGoods.map((good) => {
                    return <li key={good._id}>
                        <h3>{good.title}</h3>
                    </li>
                })
                :
                <span>Товаров пока нет, но вы можете их добавить</span>
            }
        </>
    )
}