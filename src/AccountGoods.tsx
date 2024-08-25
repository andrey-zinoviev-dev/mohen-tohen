import Goods from "./Goods";
import { useLocation } from "react-router-dom";
import { GoodInterface } from "./interfaces";

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
            <Goods goods={state.goods}></Goods>
        </>
    )
}