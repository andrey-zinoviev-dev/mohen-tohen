import { Link, useLocation } from "react-router-dom";
import { GoodInterface } from "./interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function AccountGoods() {
    // console.log("yes");
    // const { data: goods } = useGetSellerQuery(); 
    const location = useLocation();
    // console.log(location.state);

    const state  = location.state as {goods: GoodInterface[], headline: string };

    // console.log(state);

    return (
        <>
            <h3>{state.headline}</h3>
            <ul>
                <li key={"new-good"}>
                    <Link state={state} to={"addGood"}>
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </Link>
                </li>
            </ul>
            {/* <Goods goods={state.goods}></Goods> */}
        </>
    )
}