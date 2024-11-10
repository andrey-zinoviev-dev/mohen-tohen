import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilterItem from "./FilterItem";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { categories } from "./utils";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { UserInterface } from "./features/userSlice";

export default function Filter({sellers, colors}: {sellers: (string | undefined)[], colors: string[]}) {
    const [searchParams] = useSearchParams();
    const urlOjb = (Object.fromEntries([...searchParams]));
    // console.log(urlOjb);
    //location
    const location = useLocation();
    // console.log(`${location.pathname}?${urlOjb}`);
    //navigate
    const navigate = useNavigate();
    //state
    const [filterState, setFilterState] = useState<{
        categories: string[],
        stock: boolean,
        // priceRange: {
        //     min: number,
        //     max: number
        // },
        // colors: string[]
    }>({
        categories: [],
        stock: false,
    });

    // const params = Object.entries(filterState);
    // //url serialize
    // function serialize() {
    //     // console.log(filterState);
    //     const params = new URLSearchParams();
    //     params.set("categories", filterState.categories.join(","));
    //     params.set("stock", filterState.stock.toString());
    //     params.set("minPrice", filterState.priceRange.min.toString());
    //     params.set("maxPrice", filterState.priceRange.max.toString());
    //     params.set("colors", filterState.colors.join(","));
    //     return params;
    // }

    //test variable
    // let params = {};

    // const [searchParams, setSearchParams] = useSearchParams();
    // const allParams = searchParams.get(searchParams.entries());
    // console.log(allParams);

    // useEffect(() => {
    //     const entries = Object.entries(filterState);

    // }, [filterState]);

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
                                    <input key={category.title} onChange={(evt) => {
                                        setFilterState((prevValue) => {
                                            // const categoriesArray = Array.from(prevValue.categories);
                                            // console.log(categoriesArray);
                                            // return prevValue;
                                            return {...prevValue, categories: prevValue.categories && prevValue.categories.includes(evt.target.value) ? prevValue.categories.filter((category) => {
                                                return category !== evt.target.value
                                            }) : prevValue.categories && [...prevValue.categories, evt.target.value]}
                                        })
                                        // console.log(evt.target.value)
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
                            <input name="stock" onChange={() => {
                                setFilterState((prevValue) => {
                                    return {...prevValue, stock: !prevValue.stock}
                                })
                            }} type="checkbox" value={"yes"}>
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
                    <FilterItem text="Размеры">
                        <label>
                            Размеры
                            <input placeholder="от"></input>
                            <input placeholder="до"></input>
                        </label>
                    </FilterItem>
                    {/* <button>Размеры</button> */}
                </li>
                <li>
                    <FilterItem text="Цвета">
                        {colors.map((color) => {
                            return <button style={{backgroundColor: color}}></button>
                        })}
                    </FilterItem>
                    {/* <button>
                        Цвета
                    </button> */}
                </li>
                {/* <li>
                    <FilterItem text="Материалы" />
                    <button>Материалы</button>
                </li> */}
                <li>
                    <FilterItem text="Дизайнеры">
                        {sellers.map((seller) => {
                            return <label>
                                {seller && seller}
                                <input type="checkbox" value={seller}></input>
                            </label>
                        })}
                    </FilterItem>
                    {/* <button>
                        Дизайнер
                    </button> */}
                </li>
            </ul>
            </div>
            
            <button onClick={() => {
                const result = Object.entries(filterState).map(([key, val]) => {
                    return [key, val.toString()]
                });

                navigate({
                    pathname: `../catalog`,
                    search: `${createSearchParams(Object.fromEntries(result))}`
                })
            }}>
                <FontAwesomeIcon icon={faCheck} />
            </button>
            {/* <ul></ul> */}
        </div>
    )
}