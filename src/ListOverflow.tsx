import Good from "./Good";
import { GoodInterface } from "./interfaces";
import "./ListOverflow.css";
export default function ListOverflow({listItems}: {listItems: GoodInterface[]}) {
    return (
        <ul className="ul-overflow">
            {listItems.map((item) => {
                return <li className="ul-overflow__li" key={item._id}>
                    <Good good={item}></Good>
                </li>
            })}
        </ul>
    )
}