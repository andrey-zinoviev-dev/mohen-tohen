import FilterItem from "./FilterItem";
// import { categories} from "./utils";
import { createSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoodInterface, urlConvertedInterface } from "./interfaces";
import "./Filter.css"
import InputEl from "./InputEl";
// import { UserInterface } from "./features/userSlice";

export default function Filter({subcategories, urlConverted, goods, applyFilters, closeFilter}: {subcategories: string[] | undefined, urlConverted: urlConvertedInterface, goods: GoodInterface[], closeFilter: React.Dispatch<React.SetStateAction<boolean>>, applyFilters: (good: GoodInterface[]) => void}) {
    //sellers
    const sellers = [...new Set(goods.map((good) => {
        return good.seller.brandName;
    }))];


    //navigate
    const navigate = useNavigate();

    //colors
    const colors = goods.map((good) => {
        return good.color;
    });
    
    //state
    const [filterState, setFilterState] = useState<urlConvertedInterface>(
        Object.values(urlConverted).length > 0 ? 
        urlConverted
        :
        {
            // categories: [],
            // // stock: false,
            // minPrice: 1500,
            // maxPrice: 100000,
            // minWidth: 10,
            // maxWidth: 500,
            // minHeight: 10,
            // maxHeight: 100,
            // minDepth: 0,
            // maxDepth: 100,
            // colors: []
        }
    );
    // console.log(filterState);
    const [filteredArray, setFilteredArray] = useState<GoodInterface[]>([]);

    useEffect(() => {
        let resultArray = goods;
        if(filterState.subcategories && filterState.subcategories.length > 0) {

            resultArray = resultArray.filter((good) => {
                return filterState.subcategories && filterState.subcategories.find((category) => {
                    return category === good.category;
                });
            })
        }
        
        if(filterState.stock) {
            resultArray = resultArray.filter((good) => {
                return filterState.stock ? good.batch > 0 : good.batch === 0;
            })
        }

        if(filterState.minPrice && filterState.minPrice>= 1500) {
            resultArray = resultArray.filter((good) => {
                return filterState.minPrice && good.price >= filterState.minPrice;
            })
        }

        if(filterState.maxPrice && filterState.maxPrice <= 100000) {
            resultArray = resultArray.filter((good) => {
                return filterState.maxPrice && good.price <= filterState.maxPrice;
            })
        }

        if(filterState.colors && filterState.colors.length > 0) {
            resultArray = resultArray.filter((good) => {
                return filterState.colors && filterState.colors.find((color) => {
                    return color === good.color;
                })
            })
        }
        // console.log(resultArray);
        setFilteredArray(resultArray);
    }, [filterState]);

    return (
        <div className="filter">
            <h3>Фильтры</h3>
            <div className="filter__details-wrapper">
                <ul className="filter__ul">
                    <li>
                        <span>Категории</span>
                        <ul className="filter__ul-criteria">
                            {subcategories?.map((category) => {
                                // console.log(category);
                                return <label key={category}>
                                    <input checked={filterState.subcategories?.includes(category) ? true : false} key={category} onChange={() => {
                                            setFilterState((prevValue) => {
                                                return {...prevValue, subcategories: prevValue.subcategories ? prevValue.subcategories.includes(category) ? prevValue.subcategories.filter((prevCategory) => {
                                                    return prevCategory !== category
                                                }) : prevValue.subcategories && [...prevValue.subcategories, category]
                                            :
                                                [category]
                                                }
                                            })
                                                        // console.log(evt.target.value)
                                    }} type="checkbox"></input>
                                    {category}
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
                            <InputEl name="minPrice" placeHolder="от 3000" updateState={setFilterState}></InputEl>
                            <InputEl name="maxPrice" placeHolder="до 100.000" updateState={setFilterState}></InputEl>
                        </FilterItem>
                    </li>
                    <li>
                        <FilterItem text="Ширина">
                            <InputEl name="minWidth" placeHolder="от" updateState={setFilterState}></InputEl>
                            <InputEl name="maxWidth" placeHolder="до" updateState={setFilterState}></InputEl>
                        </FilterItem>
                    </li>
                    <li>
                        <FilterItem text="Высота">
                            <InputEl name="minHeight" placeHolder="от" updateState={setFilterState}></InputEl>
                            <InputEl name="maxHeight" placeHolder="до" updateState={setFilterState}></InputEl>
                        </FilterItem>
                    </li>
                    <li>
                        <FilterItem text="Глубина">
                            <InputEl name="minDepth" placeHolder="от" updateState={setFilterState}></InputEl>
                            <InputEl name="maxDepth" placeHolder="до" updateState={setFilterState}></InputEl>
                        </FilterItem>
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
                    pathname: ``,
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