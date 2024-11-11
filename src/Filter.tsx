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
    //url conversion
    const urlConverted = Object.fromEntries(Object.entries(urlOjb).map(([key, value]) => {
        if(key === "categories") {
            return [key, value.split(",")];
        }
        if(key === "stock") {
            return [key, Boolean(value)]
            // console.log(Boolean(value));
        }
        return [key, value]
    }));

    

    //navigate
    const navigate = useNavigate();
    //state
    const [filterState, setFilterState] = useState<{
        categories?: string[],
        stock?: boolean,
        // priceRange: {
        //     min: number,
        //     max: number
        // },
        // colors: string[]
    }>(
        Object.values(urlConverted).length > 0 ? 
        urlConverted
        :
        {
            categories: [],
            // stock: false,
            // priceRange: {
            //     min: 3000,
            //     max: 100000,
            // },
            // colors: []
        }
    );

    useEffect(() => {
        console.log(filterState);
    }, [filterState]);

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
                                    <input checked={filterState.categories?.includes(category.title) && true} key={category.title} onChange={(evt) => {
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