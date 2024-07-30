import { Link } from 'react-router-dom'
import './Brands.css'
import { brands } from "./utils"
export default function Brands() {
    return (
        <section className="brands">
            <h3>Дизайнеры</h3>
            <ul className='brands__ul'>
                {brands.map((brand) => {
                    return <li className='brands__ul-li'>
                        <Link to={`../brands/${brand.name}`} state={brand}>{brand.name}</Link>
                    </li>
                })}
                {/* {brands.map((brand) => {
                    return <li className='brands__ul-li'>
                        <Link to={`../brands/${brand.name}`} state={brand}>{brand.name}</Link>
                    </li>
                })}{brands.map((brand) => {
                    return <li className='brands__ul-li'>
                        <Link to={`../brands/${brand.name}`} state={brand}>{brand.name}</Link>
                    </li>
                })} */}
            </ul>
        </section>
    )
}