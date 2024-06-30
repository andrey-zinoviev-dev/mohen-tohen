import './Brands.css'
import { brands } from "./utils"
export default function Brands() {
    return (
        <section className="brands">
            <h3>Brands</h3>
            <ul className='brands__ul'>
                {brands.map((brand) => {
                    return <li className='brands__ul-li'>
                        <p>{brand.name}</p>
                    </li>
                })}
            </ul>
        </section>
    )
}