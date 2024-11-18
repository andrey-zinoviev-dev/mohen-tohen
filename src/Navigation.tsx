import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { categories } from "./utils";
import "./Navigation.css";

export default function Navigation () {
    //navigate
    const navigate = useNavigate();

    return (
        <ul className="ul-navigation">
            {categories.map((category) => {
                return <li key={category.title}>
                    {/* <button onClick={() => {
                        navigate(`/catalog?category=${category.title}`);
                        
                    }}>{category.title}</button> */}
                    <Link reloadDocument to={`/catalog?categories=${category.title}`}>
                        {category.title}
                        <div></div>
                    </Link>
                </li>
            })}
        </ul>
    )
}