import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilterItem from "./FilterItem";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Filter() {
    return (
        <div>
            <h3>Фильтры</h3>
            <div>
            <ul>
                <li>
                    <FilterItem text="Категория"></FilterItem>
                    {/* <button>Категория</button> */}
                </li>
                <li>
                    <FilterItem text="Наличие" />
                    {/* <button>Наличие</button> */}
                </li>
                <li>
                    <FilterItem text="Цена" />
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
                    <FilterItem text="Дизайнеры" />
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