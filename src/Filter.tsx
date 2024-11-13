import FilterItem from "./FilterItem";
import { categories } from "./utils";
import { createSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoodInterface } from "./interfaces";
import "./Filter.css"
import InputEl from "./InputEl";
// import { UserInterface } from "./features/userSlice";

export default function Filter({urlConverted, sellers, goods, applyFilters, closeFilter}: {urlConverted: {
    categories: string[],
    stock?: boolean,
    minPrice: number,
    maxPrice: number,
    colors: string[]
    },
    sellers: (string | undefined)[], goods: GoodInterface[], closeFilter: React.Dispatch<React.SetStateAction<boolean>>, applyFilters: (good: GoodInterface[]) => void}) {

    //navigate
    const navigate = useNavigate();

    //colors
    const colors = goods.map((good) => {
        return good.color;
    });
    
    //state
    const [filterState, setFilterState] = useState<{
        categories: string[],
        stock?: boolean,
        minPrice: number,
        maxPrice: number,
        colors: string[]
    }>(
        Object.values(urlConverted).length > 0 ? 
        urlConverted
        :
        {
            categories: [],
            // stock: false,
            minPrice: 3000,
            maxPrice: 100000,
            colors: []
        }
    );
    const [filteredArray, setFilteredArray] = useState<GoodInterface[]>([]);

    useEffect(() => {
        let resultArray = goods;
      
        if(filterState.categories && filterState.categories.length > 0) {

            resultArray = resultArray.filter((good) => {
                return filterState.categories && filterState.categories.find((category) => {
                    return category === good.category;
                });
            })
        }
        
        if(filterState.stock) {
            resultArray = resultArray.filter((good) => {
                return filterState.stock ? good.batch > 0 : good.batch === 0;
            })
        }

        if(filterState.minPrice >= 3000) {
            resultArray = resultArray.filter((good) => {
                return good.price >= filterState.minPrice;
            })
        }

        if(filterState.maxPrice <= 100000) {
            resultArray = resultArray.filter((good) => {
                return good.price <= filterState.maxPrice;
            })
        }

        if(filterState.colors && filterState.colors.length > 0) {
            resultArray = resultArray.filter((good) => {
                return filterState.colors && filterState.colors.find((color) => {
                    return color === good.color;
                })
            })
        }
        setFilteredArray(resultArray);
    }, [filterState]);

    return (
        <div className="filter">
            <h3>Фильтры</h3>
            <div>
                <ul className="filter__ul">
                    <li>
                        <span>Категории</span>
                        <ul className="filter__ul-criteria">
                            {categories.map((category) => {
                                return <label key={category.title}>
                                    <input checked={filterState.categories?.includes(category.title) && true} key={category.title} onChange={(evt) => {
                                            setFilterState((prevValue) => {
                                                return {...prevValue, categories: prevValue.categories ? prevValue.categories.includes(evt.target.value) ? prevValue.categories.filter((category) => {
                                                    return category !== evt.target.value
                                                }) : prevValue.categories && [...prevValue.categories, evt.target.value]
                                            :
                                                [category.title]
                                                }
                                            })
                                                        // console.log(evt.target.value)
                                    }} type="checkbox" value={category.title}></input>
                                    {category.title}
                                </label>
                            })}
                        </ul>
                        {/* <button>Категория</button> */}
                    </li>
                    <li>
                        <FilterItem text="Наличие">
                            <label>
                                Показать в наличии
                                <input checked={filterState.stock ? true : false} name="stock" onChange={() => {
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
                            <InputEl name="minPrice" value={filterState.minPrice.toString()} placeHolder="от 3000" updateState={setFilterState}></InputEl>
                            <InputEl name="maxprice" value={filterState.maxPrice.toString()} placeHolder="до 100.000" updateState={setFilterState}></InputEl>
                            {/* <input  onChange={(evt) => {
                                setFilterState((prevValue) => {
                                    return {...prevValue, minPrice: +evt.target.value}
                                })
                            }} placeholder="от 3000"></input> */}
                            {/* <input onChange={(evt) => {
                                setFilterState((prevValue) => {
                                    return {...prevValue, maxPrice: +evt.target.value}
                                })
                            }} placeholder="до 100.000"></input> */}
                        </FilterItem>
                        {/* <button>Цена</button>
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
                            <ul className="filter__ul-criteria">
                                {colors.map((color) => {
                                    return <button key={color} onClick={() => {
                                        setFilterState((prevValue) => {
                                            return {...prevValue, colors: prevValue.colors ? prevValue.colors.includes(color) ? prevValue.colors.filter((prevColor) => {
                                                return prevColor !== color
                                            }) : [...prevValue.colors, color]

                                            :

                                            [color]
                                            
                                            }
                                        })
                                    }} style={{backgroundColor: color}}></button>
                                })}
                            </ul>
                            {/* {colors.map((color) => {
                                return <button key={color} onClick={() => {
                                    setFilterState((prevValue) => {
                                        return {...prevValue, colors: prevValue.colors ? prevValue.colors.includes(color) ? prevValue.colors.filter((prevColor) => {
                                            return prevColor !== color
                                        }) : [...prevValue.colors, color]

                                        :

                                        [color]
                                        
                                        }
                                    })
                                }} style={{backgroundColor: color}}></button>
                            })} */}
                        </FilterItem>
                        
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
                });
                closeFilter(false)
                applyFilters(filteredArray);
            }}>
                Показать ({filteredArray.length})
                {/* Показать ({filteredArray.length}) */}
                {/* <FontAwesomeIcon icon={faCheck} /> */}
            </button>
            {/* <ul></ul> */}
        </div>
    )
}