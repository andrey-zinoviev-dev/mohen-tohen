
// import { ReactNode, useEffect, useState } from 'react'
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

    return (
        <section className="brands">
            <h3>Дизайнеры</h3>
            <ul className='brands__ul'>
                {brands && brands.map((brand) => {
                    return <li key={brand._id} className='brands__ul-li'>
                        <Link to={`../brands/${brand._id}`}>
                            <img src={brand.cover}></img>
                            <span>{brand.brandName}</span>
                        </Link>
                    </li>
                })}
            </ul>
        </section>
    )
}