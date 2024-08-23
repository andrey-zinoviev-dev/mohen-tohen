
import { ReactNode, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Brands.css'
// import { brands } from "./utils"
// import { getSellers } from './userApi'
// import { BrandsInterface } from './interfaces'

import { useGetSellersQuery } from './features/apiSlice'
export default function Brands() {
    const {
        data: brands,
    } = useGetSellersQuery();

    let content:ReactNode;

    console.log(brands);
    //state
    // const [brands, setBrands] = useState<BrandsInterface[]>([]);

    // useEffect(() => {
    //     getSellers()
    //     .then((data) => {
    //         // console.log(data);
    //         setBrands(data.designers);
    //     });
    // }, []);

    return (
        <section className="brands">
            <h3>Дизайнеры</h3>
            <ul className='brands__ul'>
                {/* {sellers.map((brand) => {
                        return <li key={brand._id} className='brands__ul-li'>
                            <Link to={`../brands/${brand.name}`} state={brand}>{brand.name}</Link>
                        </li>
                })} */}
                {brands && brands.map((brand) => {
                    return <li key={brand._id} className='brands__ul-li'>
                        <Link to={`../brands/${brand._id}`}>{brand.name}</Link>
                    </li>
                })}
            </ul>
        </section>
    )
}