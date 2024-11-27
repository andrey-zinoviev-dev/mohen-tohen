import { Link } from "react-router-dom";
import { categories } from "./utils";
import "./Navigation.css";

export default function Navigation () {
    return (
        <ul className="ul-navigation">
            <li key="home">
                <Link reloadDocument to={"../"}>
                    Главная
                    <div></div>
                </Link>
            </li>
            {categories.map((category) => {
                return <li key={category.title}>
                    <Link reloadDocument state={{cover: category.cover}}  to={`/category/${category.title}`}>
                        {category.title}
                        <div></div>
                    </Link>
                </li>
            })}
        </ul>
    )
}