import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilterItem from "./FilterItem";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { categories } from "./utils";
import { useState } from "react";
import { UserInterface } from "./features/userSlice";

export default function Filter({sellers}: {sellers: (string | undefined)[]}) {
    //state
    const [filters, setFilters] = useState<string[]>([]);
    return (
        <div>
            <h3>Фильтры</h3>
            <div>
            <ul>
                <li>
                    <FilterItem text="Категория">
                        <div>
                            {categories.map((category) => {
                                return <label>
                                    <input onChange={(evt) => {
                                        console.log(evt.target.value)
                                    }} type="checkbox" value={category.title}></input>
                                    {category.title}
                                </label>
                            })}
                        </div>
                    </FilterItem>
                    {/* <button>Категория</button> */}
                </li>
                <li>
                    <FilterItem text="Наличие">
                        <label>
                            Наличие
                            <input name="stock" type="checkbox" value={"yes"}>
                            </input>
                        </label>


                    </FilterItem>
                    {/* <button>Наличие</button> */}
                </li>
                <li>
                    <FilterItem text="Цена">
                        <input placeholder="от"></input>
                        <input placeholder="до"></input>
                    </FilterItem>
                    {/* <button>Цена</button> */}
                </li>
                <li>
                    <FilterItem text="Размеры" />
                    {/* <button>Размеры</button> */}
                </li>
                <li>
                    <FilterItem text="Цвета" />
                    {/* <button>
                        Цвета
                    </button> */}
                </li>
                <li>
                    <FilterItem text="Материалы" />
                    {/* <button>Материалы</button> */}
                </li>
                <li>
                    <FilterItem text="Дизайнеры">
                        {sellers.map((seller) => {
                            return <label>
                                {seller && seller}
                            </label>
                        })}
                    </FilterItem>
                    {/* <button>
                        Дизайнер
                    </button> */}
                </li>
            </ul>
            </div>
            
            <button>
                <FontAwesomeIcon icon={faCheck} />
            </button>
            {/* <ul></ul> */}
        </div>
    )
}