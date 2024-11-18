
// import { ReactNode, useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import './Brands.css'
// import { brands } from "./utils"
// import { getSellers } from './userApi'
// import { BrandsInterface } from './interfaces'
// import { Swiper, SwiperSlide} from 'swiper/react';
// import { Navigation } from 'swiper/modules';
import { useGetSellersQuery } from './features/apiSlice'
// import { useState } from 'react';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import SliderButton from './SliderButton';
import { UserInterface } from './features/userSlice';
import Headline from './Headline';
export default function Brands() {
    const {
        data: brands = [] as UserInterface[],
    } = useGetSellersQuery();

    //state
    // const [slide, setSlide] = useState<number>(0);

    return (
        <section className="brands">
            <Headline text='Дизайнеры'></Headline> 
            <ul>
                {brands.map((brand) => {
                    return <li>
                        <a target='_blank' href={`/brands/${brand._id}`}>
                            <span>{brand.brandName}</span>,
                        </a>
                    </li>
                })}
                {/* <Swiper breakpoints={{
                    1279: {
                        slidesPerView: 4
                        // width: 1279,

                    },
                    767: {
                        // width: 767,
                        slidesPerView: 3
                    },
                    425: {
                        slidesPerView: 2,
                    },
                    375: {
                        slidesPerView: 2,
                    },
                    300: {
                        slidesPerView: 2
                    }
                }} spaceBetween={15} slidesPerView={4} loop={brands.length > 1 ? true : false}>
                    {brands && brands.map((brand) => {
                        return <SwiperSlide key={brand._id} className='brands__ul-li'>
                            <Link to={`../brands/${brand._id}`}>
                                    <img src={brand.cover}></img>
                                    <span>{brand.brandName}</span>
                            </Link>
                        </SwiperSlide>
                    })}
                    <div className='brands__navigation-buttons'>
                        <SliderButton handleSlideChange={() => {}} slideslength={brands && brands.length} left={true} icon={faChevronLeft}></SliderButton>
                        <SliderButton handleSlideChange={() => {}} slideslength={brands && brands.length} icon={faChevronRight}></SliderButton>
                    </div>
                </Swiper> */}
            </ul>
            
            {/* <ul className='brands__ul'>
                {brands && brands.map((brand) => {
                    return <li key={brand._id} className='brands__ul-li'>
                        <Link to={`../brands/${brand._id}`}>
                            <img src={brand.cover}></img>
                            <span>{brand.brandName}</span>
                        </Link>
                    </li>
                })}
            </ul> */}
        </section>
    )
}